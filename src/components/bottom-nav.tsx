import { Link, useRouterState } from "@tanstack/react-router";
import {
  CalendarDays,
  Compass,
  Home,
  Mic,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { to: "/", label: "Accueil", icon: Home, exact: true },
  { to: "/explore", label: "Explorer", icon: Compass },
  { to: "/reservations", label: "Réservations", icon: CalendarDays },
  { to: "/profile", label: "Profil", icon: UserRound },
] as const;

export function BottomNav({ onVoice }: { onVoice?: () => void }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <div className="relative shrink-0 bg-bg/95 shadow-nav backdrop-blur-md">
      <button
        type="button"
        onClick={onVoice}
        className="absolute -top-7 right-5 flex size-12 items-center justify-center rounded-full bg-voice text-on-media shadow-float active:scale-[0.96]"
        aria-label="Recherche vocale"
      >
        <Mic className="size-5" strokeWidth={2.2} />
      </button>
      <nav className="grid grid-cols-5 items-end px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        {items.slice(0, 3).map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            icon={item.icon}
            active={
              "exact" in item && item.exact
                ? pathname === "/"
                : pathname.startsWith(item.to)
            }
          />
        ))}
        <Link
          to="/messages"
          className="flex flex-col items-center gap-1"
          aria-label="Messages"
        >
          <span
            className={cn(
              "flex size-12 -translate-y-1 items-center justify-center rounded-full bg-primary text-primary-fg shadow-float",
              pathname.startsWith("/messages") && "ring-2 ring-primary/30",
            )}
          >
            <ChatMark className="size-6" />
          </span>
        </Link>
        <NavItem
          to="/profile"
          label="Profil"
          icon={UserRound}
          active={pathname.startsWith("/profile")}
        />
      </nav>
    </div>
  );
}

function NavItem({
  to,
  label,
  icon: Icon,
  active,
}: {
  to: string;
  label: string;
  icon: typeof Home;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center gap-1 py-1 text-[11px] font-medium",
        active ? "text-fg" : "text-faint",
      )}
    >
      <Icon
        className="size-5"
        strokeWidth={active ? 2.4 : 1.8}
        fill={active && to === "/" ? "currentColor" : "none"}
      />
      {label}
    </Link>
  );
}

export function ChatMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M5 16.5V8.8c0-1.7 1.3-3.1 3-3.1h8c1.7 0 3 1.4 3 3.1v4.4c0 1.7-1.3 3.1-3 3.1H9.2L5 19.2v-2.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="9.2" cy="10.6" r="0.85" fill="currentColor" />
      <circle cx="12" cy="10.6" r="0.85" fill="currentColor" />
      <circle cx="14.8" cy="10.6" r="0.85" fill="currentColor" />
      <circle cx="10.6" cy="13.1" r="0.85" fill="currentColor" />
      <circle cx="13.4" cy="13.1" r="0.85" fill="currentColor" />
      <path
        d="M9.2 10.6h5.6M10.6 13.1h2.8M9.2 10.6l1.4 2.5M12 10.6v2.5M14.8 10.6l-1.4 2.5"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}
