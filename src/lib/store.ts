import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getArtisan } from "./data";

export type Booking = {
  id: string;
  experienceId: string;
  date: string;
  time: string;
  guests: number;
  total: number;
  createdAt: number;
};

export type ChatMessage = {
  id: string;
  from: "me" | "them";
  text: string;
  at: number;
};

type AppState = {
  userName: string | null;
  favorites: string[];
  bookings: Booking[];
  threads: Record<string, ChatMessage[]>;
  login: (name: string) => void;
  logout: () => void;
  toggleFavorite: (id: string) => void;
  addBooking: (booking: Omit<Booking, "id" | "createdAt">) => Booking;
  ensureThread: (artisanId: string) => void;
  sendMessage: (artisanId: string, text: string) => void;
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const greetings: Record<string, string> = {
  gaspard:
    "Bonjour — c’est Gaspard. Dis-moi le jour qui t’arrange, on ouvre la cour.",
  kossi:
    "Wé, c’est Kossi. L’argile est prête. Tu veux un bol, un canari, ou tu laisses les mains décider ?",
  ami: "Ami à l’appareil. La cuve d’indigo est bonne cette semaine. Tu viens quand ?",
};

export const useYonwa = create<AppState>()(
  persist(
    (set, get) => ({
      userName: null,
      favorites: [],
      bookings: [],
      threads: {},
      login: (name) => set({ userName: name.trim() || "Invité" }),
      logout: () => set({ userName: null }),
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((item) => item !== id)
            : [id, ...state.favorites],
        })),
      addBooking: (booking) => {
        const next: Booking = {
          ...booking,
          id: uid(),
          createdAt: Date.now(),
        };
        set((state) => ({ bookings: [next, ...state.bookings] }));
        return next;
      },
      ensureThread: (artisanId) => {
        const threads = get().threads;
        if (threads[artisanId]?.length) return;
        const artisan = getArtisan(artisanId);
        const hello =
          greetings[artisanId] ??
          `Bonjour, ici ${artisan?.name ?? "l’artisan"}. Je te réponds ici.`;
        set({
          threads: {
            ...threads,
            [artisanId]: [
              {
                id: uid(),
                from: "them",
                text: hello,
                at: Date.now() - 1000 * 60 * 8,
              },
            ],
          },
        });
      },
      sendMessage: (artisanId, text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        get().ensureThread(artisanId);
        const mine: ChatMessage = {
          id: uid(),
          from: "me",
          text: trimmed,
          at: Date.now(),
        };
        set((state) => ({
          threads: {
            ...state.threads,
            [artisanId]: [...(state.threads[artisanId] ?? []), mine],
          },
        }));
        window.setTimeout(() => {
          const reply: ChatMessage = {
            id: uid(),
            from: "them",
            text: "Reçu. Je te confirme un créneau par ici — à très vite.",
            at: Date.now(),
          };
          set((state) => ({
            threads: {
              ...state.threads,
              [artisanId]: [...(state.threads[artisanId] ?? []), reply],
            },
          }));
        }, 900);
      },
    }),
    { name: "yonwa-store" },
  ),
);
