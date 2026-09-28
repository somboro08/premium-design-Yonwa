import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { AppFrame } from "@/components/app-frame";
import { BottomNav } from "@/components/bottom-nav";
import { formatFcfa, getExperience } from "@/lib/data";
import { useYonwa } from "@/lib/store";
import { VoiceOverlay } from "@/components/home-extras";
import { useState } from "react";

export const Route = createFileRoute("/reservations")({
  component: Reservations,
});

function Reservations() {
  const bookings = useYonwa((s) => s.bookings);
  const [voice, setVoice] = useState(false);

  return (
    <AppFrame footer={<BottomNav onVoice={() => setVoice(true)} />}>
      <div className="px-5 pt-5 pb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Réservations</h1>
        <p className="mt-1 text-sm text-muted">Tes ateliers confirmés.</p>
        {bookings.length === 0 ? (
          <div className="mt-16 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary">
              <CalendarDays className="size-6" />
            </span>
            <p className="mt-4 text-sm text-muted">
              Pas encore de réservation. Le prochain geste t’attend.
            </p>
            <Link
              to="/explore"
              className="mt-4 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-bg"
            >
              Explorer
            </Link>
          </div>
        ) : (
          <ul className="mt-5 space-y-3">
            {bookings.map((booking) => {
              const experience = getExperience(booking.experienceId);
              if (!experience) return null;
              return (
                <li key={booking.id}>
                  <Link
                    to="/experience/$id"
                    params={{ id: experience.id }}
                    className="flex gap-3 rounded-2xl border border-line p-2"
                  >
                    <img
                      src={experience.images[0]}
                      alt=""
                      className="size-20 rounded-xl object-cover"
                    />
                    <span className="min-w-0 flex-1 py-1">
                      <span className="line-clamp-2 text-sm font-semibold">
                        {experience.title}
                      </span>
                      <span className="mt-1 block text-xs text-muted">
                        {booking.date} · {booking.time} · {booking.guests} pers.
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-primary">
                        {formatFcfa(booking.total)} · confirmé
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <VoiceOverlay open={voice} onClose={() => setVoice(false)} />
    </AppFrame>
  );
}
