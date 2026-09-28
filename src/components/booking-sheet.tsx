import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { formatFcfa, type Experience } from "@/lib/data";
import { useYonwa } from "@/lib/store";
import { Overlay } from "./app-frame";
import { Button } from "./ui/button";

function upcomingDays(count = 12) {
  const days: { iso: string; day: string; num: string; month: string }[] = [];
  const now = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", ""),
      num: String(d.getDate()),
      month: d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", ""),
    });
  }
  return days;
}

const slots = ["10:00", "14:00", "17:00"];

export function BookingSheet({
  experience,
  open,
  onClose,
}: {
  experience: Experience;
  open: boolean;
  onClose: () => void;
}) {
  const addBooking = useYonwa((s) => s.addBooking);
  const days = useMemo(() => upcomingDays(), []);
  const [date, setDate] = useState(days[0]?.iso ?? "");
  const [time, setTime] = useState(slots[1]!);
  const [guests, setGuests] = useState(experience.minGuests);
  const [done, setDone] = useState(false);
  const total = experience.price * guests;

  return (
    <Overlay open={open} onClose={onClose} labelledBy="book-title">
      {done ? (
        <div className="pb-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Confirmé
          </p>
          <h2 id="book-title" className="mt-2 text-2xl font-semibold tracking-tight">
            C’est réservé.
          </h2>
          <p className="mt-2 text-sm text-muted">
            {experience.title} · {guests} pers. · {date} à {time}
          </p>
          <Button className="mt-6 w-full" size="lg" onClick={onClose}>
            Parfait
          </Button>
        </div>
      ) : (
        <>
          <h2 id="book-title" className="text-lg font-semibold">
            Réserver
          </h2>
          <p className="mt-1 text-sm text-muted">{experience.title}</p>

          <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
            Jour
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {days.map((d) => {
              const active = d.iso === date;
              return (
                <button
                  key={d.iso}
                  type="button"
                  onClick={() => setDate(d.iso)}
                  className={
                    active
                      ? "flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-ink text-bg"
                      : "flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-soft text-fg"
                  }
                >
                  <span className="text-[10px] uppercase">{d.day}</span>
                  <span className="text-lg font-semibold leading-none">{d.num}</span>
                  <span className="text-[10px]">{d.month}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
            Heure
          </p>
          <div className="flex gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={
                  slot === time
                    ? "h-10 flex-1 rounded-full bg-ink text-sm font-medium text-bg"
                    : "h-10 flex-1 rounded-full bg-primary-soft text-sm font-medium"
                }
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-primary-soft px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Personnes</p>
              <p className="text-xs text-muted">
                {experience.minGuests} à {experience.maxGuests}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full bg-bg"
                onClick={() =>
                  setGuests((n) => Math.max(experience.minGuests, n - 1))
                }
                aria-label="Retirer une personne"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-6 text-center text-base font-semibold tabular-nums">
                {guests}
              </span>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full bg-bg"
                onClick={() =>
                  setGuests((n) => Math.min(experience.maxGuests, n + 1))
                }
                aria-label="Ajouter une personne"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-xl font-semibold tabular-nums">{formatFcfa(total)}</p>
              <p className="text-xs text-muted">
                {formatFcfa(experience.price)} × {guests}
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => {
                addBooking({
                  experienceId: experience.id,
                  date,
                  time,
                  guests,
                  total,
                });
                toast.success("Réservation confirmée");
                setDone(true);
              }}
            >
              Confirmer
            </Button>
          </div>
        </>
      )}
    </Overlay>
  );
}
