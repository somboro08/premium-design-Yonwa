import { useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  BadgeCheck,
  ChevronLeft,
  Clock3,
  Heart,
  MapPin,
  MessageSquare,
  RotateCcw,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { AppFrame, MediaButton } from "@/components/app-frame";
import { ArtisanDot } from "@/components/experience-card";
import { BookingSheet } from "@/components/booking-sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  artisanOf,
  formatFcfa,
  getExperience,
} from "@/lib/data";
import { useYonwa } from "@/lib/store";

export const Route = createFileRoute("/experience/$id")({
  component: ExperiencePage,
});

function ExperiencePage() {
  const { id } = Route.useParams();
  const experience = getExperience(id);
  const navigate = useNavigate();
  const artisan = experience ? artisanOf(experience) : undefined;
  const favorites = useYonwa((s) => s.favorites);
  const toggleFavorite = useYonwa((s) => s.toggleFavorite);
  const ensureThread = useYonwa((s) => s.ensureThread);
  const [index, setIndex] = useState(0);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [book, setBook] = useState(false);
  const [heart, setHeart] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const loved = experience ? favorites.includes(experience.id) : false;

  if (!experience || !artisan) {
    return (
      <AppFrame>
        <div className="p-8 text-center">
          <p className="font-semibold">Expérience introuvable</p>
          <Link to="/" className="mt-3 inline-block text-sm text-primary">
            Retour à l’accueil
          </Link>
        </div>
      </AppFrame>
    );
  }

  return (
    <AppFrame
      footer={
        <div className="flex items-center gap-2 border-t border-line bg-bg/95 px-4 py-3 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold leading-tight tabular-nums">
              {formatFcfa(experience.price)}
            </p>
            <p className="text-xs text-muted">par personne</p>
          </div>
          <Button
            variant="line"
            size="icon"
            aria-label="Message"
            onClick={() => {
              ensureThread(artisan.id);
              void navigate({
                to: "/messages/$threadId",
                params: { threadId: artisan.id },
              });
            }}
          >
            <MessageSquare className="size-5" />
          </Button>
          <Button size="lg" className="min-w-36" onClick={() => setBook(true)}>
            Réserver
          </Button>
        </div>
      }
    >
      <div className="relative">
        <div
          ref={scroller}
          className="flex h-96 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-none"
          onScroll={(e) => {
            const el = e.currentTarget;
            const i = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
            setIndex(i);
          }}
        >
          {experience.images.map((src) => (
            <div
              key={src}
              className="relative h-full w-full min-w-full shrink-0 snap-center"
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <MediaButton
            className="pointer-events-auto"
            aria-label="Retour"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="size-5" />
          </MediaButton>
          <MediaButton
            className={cn("pointer-events-auto", heart && "anim-heart")}
            aria-label="Favori"
            onClick={() => {
              toggleFavorite(experience.id);
              setHeart(true);
              window.setTimeout(() => setHeart(false), 320);
            }}
          >
            <Heart
              className={cn("size-5", loved && "fill-primary text-primary")}
            />
          </MediaButton>
        </div>
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {experience.images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "h-1 rounded-full",
                i === index ? "w-5 bg-on-media" : "w-1.5 bg-on-media/45",
              )}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pt-5 pb-8">
        <p className="text-sm font-medium text-primary">{experience.city}</p>
        <h1 className="mt-1 text-[28px] leading-tight font-semibold tracking-tight">
          {experience.title}
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {experience.tagline}
        </p>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Trust
            icon={BadgeCheck}
            label="Certifié"
            className="border-primary/25 bg-primary-soft text-primary"
          />
          <Trust
            icon={ShieldCheck}
            label="Sécurisé"
            className="border-success/20 bg-success-soft text-success"
          />
          <Trust
            icon={Heart}
            label="Authentique"
            className="border-gold/25 bg-gold-soft text-gold"
          />
          <Trust
            icon={RotateCcw}
            label="Remboursable"
            className="border-peach/25 bg-peach-soft text-peach"
          />
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-line p-3">
          <Link
            to="/artisan/$id"
            params={{ id: artisan.id }}
            className="flex min-w-0 flex-1 items-center gap-3"
          >
            <ArtisanDot
              artisanId={artisan.id}
              initial={artisan.initial}
              photo={artisan.photo}
              size="md"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{artisan.handle}</p>
              <p className="text-xs text-muted">Voir le profil de l’artisan</p>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => {
              ensureThread(artisan.id);
              void navigate({
                to: "/messages/$threadId",
                params: { threadId: artisan.id },
              });
            }}
            className="flex size-10 items-center justify-center rounded-xl border border-line"
            aria-label="Écrire"
          >
            <MessageSquare className="size-4" />
          </button>
          <span className="flex items-center gap-1 text-sm font-semibold">
            <Star className="size-3.5 fill-star text-star" />
            {experience.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-2 text-sm">
            <Clock3 className="size-4 text-primary" />
            {experience.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-2 text-sm">
            <Users className="size-4 text-primary" />
            {experience.guests}
          </span>
        </div>

        <section className="mt-7">
          <h2 className="text-base font-semibold">À propos</h2>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed text-muted",
              !aboutOpen && "line-clamp-3",
            )}
          >
            {experience.about}
          </p>
          <button
            type="button"
            className="mt-1 text-sm font-semibold text-primary"
            onClick={() => setAboutOpen((v) => !v)}
          >
            {aboutOpen ? "Réduire" : "Lire la suite"}
          </button>
        </section>

        <section className="mt-7">
          <h2 className="text-base font-semibold">Au programme</h2>
          <ol className="mt-3 space-y-3">
            {experience.program.map((step) => (
              <li key={step.time} className="flex gap-3">
                <span className="w-10 shrink-0 pt-0.5 text-xs font-semibold tabular-nums text-primary">
                  {step.time}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{step.title}</span>
                  <span className="text-sm text-muted">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-7">
          <h2 className="text-base font-semibold">Inclus</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {experience.included.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-primary-soft px-3 py-2 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">Avis</h2>
            <span className="flex items-center gap-1 text-sm font-semibold">
              <Star className="size-3.5 fill-star text-star" />
              {experience.rating.toFixed(1)} · {experience.reviews} avis
            </span>
          </div>
          <div className="mt-3 space-y-3">
            {experience.quotes.map((quote) => (
              <blockquote
                key={quote.name}
                className="rounded-2xl border border-line px-4 py-3"
              >
                <p className="text-sm leading-relaxed">“{quote.text}”</p>
                <footer className="mt-2 text-xs text-muted">
                  {quote.name} · {quote.city}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-7 flex items-start gap-3 rounded-2xl bg-primary-soft p-4">
          <MapPin className="mt-0.5 size-4 text-primary" />
          <div>
            <p className="text-sm font-semibold">{experience.city}</p>
            <p className="text-xs text-muted">
              L’adresse exacte est envoyée après réservation.
            </p>
          </div>
        </section>
      </div>

      <BookingSheet
        experience={experience}
        open={book}
        onClose={() => setBook(false)}
      />
    </AppFrame>
  );
}

function Trust({
  icon: Icon,
  label,
  className,
}: {
  icon: typeof BadgeCheck;
  label: string;
  className: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold",
        className,
      )}
    >
      <Icon className="size-3.5" />
      {label}
    </span>
  );
}
