import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  Play,
  Search,
  X,
} from "lucide-react";
import { experiences, getExperience, heroSlides, immersionImages } from "@/lib/data";
import { useYonwa } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Cover, Overlay } from "./app-frame";
import { Button } from "./ui/button";
import { ChatMark } from "./bottom-nav";

export function HeroCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    const onScroll = () => {
      const cards = [...node.querySelectorAll<HTMLElement>("[data-slide]")];
      const mid = node.scrollLeft + node.clientWidth / 2;
      let closest = 0;
      let dist = Infinity;
      cards.forEach((card, i) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const d = Math.abs(center - mid);
        if (d < dist) {
          dist = d;
          closest = i;
        }
      });
      setIndex(closest);
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    const timer = window.setInterval(() => {
      const next = (index + 1) % heroSlides.length;
      const card = node.querySelectorAll<HTMLElement>("[data-slide]")[next];
      card?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 5200);
    return () => window.clearInterval(timer);
  }, [index]);

  return (
    <section className="anim-rise stagger-2">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 scrollbar-none"
      >
        {heroSlides.map((slide) => {
          const experience = getExperience(slide.experienceId);
          if (!experience) return null;
          return (
            <Link
              key={slide.experienceId}
              data-slide
              to="/experience/$id"
              params={{ id: experience.id }}
              className="relative h-56 w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl bg-ink text-on-media"
            >
              <img
                src={experience.images[0]}
                alt=""
                className="absolute inset-0 size-full object-cover anim-kenburns"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              <span className="absolute top-4 right-4 rounded-full bg-ink/35 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                {experience.city}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-2xl font-semibold leading-snug tracking-tight">
                  {slide.title}
                </p>
                <p className="mt-1 text-sm text-on-media/80">{slide.kicker}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-3 flex justify-center gap-1.5">
        {heroSlides.map((slide, i) => (
          <span
            key={slide.experienceId}
            className={cn(
              "h-1 rounded-full transition-[width,background-color] duration-300",
              i === index ? "w-6 bg-primary" : "w-1.5 bg-line",
            )}
          />
        ))}
      </div>
    </section>
  );
}

export function ImmersionCard() {
  return (
    <Link
      to="/immersion"
      className="mx-5 mt-5 flex items-center gap-3 rounded-2xl border border-line bg-bg px-3.5 py-3 anim-rise stagger-3 active:scale-[0.99]"
    >
      <span className="relative size-12 shrink-0 overflow-hidden rounded-xl">
        <img src="/images/abomey.jpg" alt="" className="size-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-fg">
            <Play className="size-3.5 fill-current" />
          </span>
        </span>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">Immersion vidéo</span>
        <span className="block text-xs text-muted">
          Découvre le Bénin en images
        </span>
      </span>
      <ChevronRight className="size-4 text-faint" />
    </Link>
  );
}

export function HomeHeader({
  onSearch,
  onLogin,
  onNotif,
}: {
  onSearch: () => void;
  onLogin: () => void;
  onNotif: () => void;
}) {
  const userName = useYonwa((s) => s.userName);
  return (
    <header className="px-5 pt-4 pb-3 anim-rise">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold tracking-tight">yonwa</p>
        <button
          type="button"
          onClick={onSearch}
          className="flex size-10 items-center justify-center rounded-full text-fg"
          aria-label="Rechercher"
        >
          <Search className="size-5" strokeWidth={2} />
        </button>
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        {userName ? (
          <div className="flex items-center gap-2 rounded-full bg-primary-soft py-1 pr-3 pl-1">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-fg">
              {userName.slice(0, 1).toLowerCase()}
            </span>
            <span className="text-sm font-medium">{userName}</span>
          </div>
        ) : (
          <Button size="sm" onClick={onLogin} className="px-4">
            Se connecter
          </Button>
        )}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onNotif}
            className="flex size-10 items-center justify-center rounded-full border border-line"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
          </button>
          <Link
            to="/messages"
            className="flex size-10 items-center justify-center rounded-full border border-line"
            aria-label="Messages"
          >
            <ChatMark className="size-5 text-fg" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const results = experiences.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q)
    );
  });

  return (
    <Overlay open={open} onClose={onClose} labelledBy="search-title">
      <div className="flex items-center justify-between">
        <h2 id="search-title" className="text-lg font-semibold">
          Rechercher
        </h2>
        <button type="button" onClick={onClose} aria-label="Fermer">
          <X className="size-5 text-muted" />
        </button>
      </div>
      <label className="mt-4 flex items-center gap-2 rounded-full bg-primary-soft px-4 py-3">
        <Search className="size-4 text-primary" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cuisine, Ouidah, argile…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-faint"
        />
      </label>
      <ul className="mt-4 space-y-2">
        {results.map((item) => (
          <li key={item.id}>
            <Link
              to="/experience/$id"
              params={{ id: item.id }}
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl p-2 hover:bg-primary-soft"
            >
              <img
                src={item.images[0]}
                alt=""
                className="size-14 rounded-lg object-cover"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">
                  {item.title}
                </span>
                <span className="text-xs text-muted">
                  {item.city} · {item.categoryLabel}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Overlay>
  );
}

export function LoginOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const login = useYonwa((s) => s.login);
  const [name, setName] = useState("");
  return (
    <Overlay open={open} onClose={onClose} labelledBy="login-title">
      <h2 id="login-title" className="text-lg font-semibold">
        Se connecter
      </h2>
      <p className="mt-1 text-sm text-muted">
        Un prénom suffit pour sauvegarder tes favoris et tes réservations sur cet
        appareil.
      </p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ton prénom"
        className="mt-4 h-12 w-full rounded-full border border-line px-4 text-sm outline-none focus:border-primary"
      />
      <Button
        className="mt-4 w-full"
        size="lg"
        onClick={() => {
          login(name || "Invité");
          onClose();
        }}
      >
        Continuer
      </Button>
    </Overlay>
  );
}

export function NotifOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Overlay open={open} onClose={onClose} labelledBy="notif-title">
      <h2 id="notif-title" className="text-lg font-semibold">
        Notifications
      </h2>
      <ul className="mt-4 space-y-3">
        <NotifRow
          title="Gaspard a un créneau demain 17h"
          body="Atelier cuisine — 2 places encore."
        />
        <NotifRow
          title="Soirée de contes à Ouidah"
          body="Samedi, feu allumé à 19h."
        />
        <NotifRow
          title="Ton cœur a retenu l’argile"
          body="Kossi ouvre l’atelier jeudi matin."
        />
      </ul>
    </Overlay>
  );
}

function NotifRow({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-2xl bg-primary-soft px-4 py-3">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-0.5 text-xs text-muted">{body}</p>
    </li>
  );
}

export function VoiceOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"listen" | "done">("listen");

  useEffect(() => {
    if (!open) {
      setPhase("listen");
      return;
    }
    const t = window.setTimeout(() => setPhase("done"), 1800);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <Cover open={open}>
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg/95 px-8 text-center">
        <button
          type="button"
          className="absolute top-4 right-4 flex size-10 items-center justify-center"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X className="size-5" />
        </button>
        <div className="relative flex size-28 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-[pulse-ring_1.6s_ease-out_infinite]" />
          <span className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-fg">
            <span className="text-2xl font-semibold">y</span>
          </span>
        </div>
        <p className="mt-8 text-lg font-semibold">
          {phase === "listen" ? "Je t’écoute" : "« cuisine traditionnelle »"}
        </p>
        <p className="mt-2 text-sm text-muted">
          {phase === "listen"
            ? "Dis-moi ce que tu veux vivre au Bénin."
            : "Atelier trouvé à Cotonou."}
        </p>
        {phase === "done" ? (
          <Button
            className="mt-6"
            onClick={() => {
              onClose();
              void navigate({
                to: "/experience/$id",
                params: { id: "cuisine" },
              });
            }}
          >
            Voir l’atelier
          </Button>
        ) : null}
      </div>
    </Cover>
  );
}

export function ImmersionFilm() {
  const [index, setIndex] = useState(0);
  const current = immersionImages[index]!;
  return (
    <div className="relative min-h-full bg-ink text-on-media">
      <img
        src={current.src}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/30" />
      <div className="relative flex min-h-dvh flex-col justify-between p-5 pb-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex size-11 items-center justify-center rounded-full bg-bg/90 text-fg"
            aria-label="Retour"
          >
            <X className="size-5" />
          </Link>
          <p className="text-sm font-medium">
            {index + 1} / {immersionImages.length}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-on-media/70">
            Immersion
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {current.caption}
          </h1>
          <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-none">
            {immersionImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2",
                  i === index ? "ring-primary" : "ring-transparent opacity-70",
                )}
              >
                <img src={img.src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
