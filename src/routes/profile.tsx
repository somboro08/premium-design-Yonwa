import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, LogOut } from "lucide-react";
import { AppFrame } from "@/components/app-frame";
import { BottomNav } from "@/components/bottom-nav";
import { LoginOverlay, VoiceOverlay } from "@/components/home-extras";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data";
import { useYonwa } from "@/lib/store";

export const Route = createFileRoute("/profile")({ component: Profile });

function Profile() {
  const userName = useYonwa((s) => s.userName);
  const logout = useYonwa((s) => s.logout);
  const favorites = useYonwa((s) => s.favorites);
  const bookings = useYonwa((s) => s.bookings);
  const [login, setLogin] = useState(false);
  const [voice, setVoice] = useState(false);
  const loved = experiences.filter((item) => favorites.includes(item.id));

  return (
    <AppFrame footer={<BottomNav onVoice={() => setVoice(true)} />}>
      <div className="px-5 pt-5 pb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Profil</h1>
        <div className="mt-5 rounded-2xl bg-primary-soft p-4">
          {userName ? (
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-fg">
                {userName.slice(0, 1).toLowerCase()}
              </span>
              <div className="flex-1">
                <p className="font-semibold">{userName}</p>
                <p className="text-xs text-muted">
                  {bookings.length} réservation
                  {bookings.length > 1 ? "s" : ""} · {favorites.length} favori
                  {favorites.length > 1 ? "s" : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={logout}
                className="flex size-10 items-center justify-center rounded-full bg-bg"
                aria-label="Se déconnecter"
              >
                <LogOut className="size-4" />
              </button>
            </div>
          ) : (
            <div>
              <p className="font-semibold">Pas encore connecté</p>
              <p className="mt-1 text-sm text-muted">
                Un prénom pour garder tes ateliers.
              </p>
              <Button className="mt-3" size="sm" onClick={() => setLogin(true)}>
                Se connecter
              </Button>
            </div>
          )}
        </div>

        <h2 className="mt-8 flex items-center gap-2 text-base font-semibold">
          <Heart className="size-4 text-primary" />
          Favoris
        </h2>
        {loved.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            Touche le cœur sur une expérience pour la retenir.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {loved.map((item) => (
              <li key={item.id}>
                <Link
                  to="/experience/$id"
                  params={{ id: item.id }}
                  className="flex items-center gap-3"
                >
                  <img
                    src={item.images[0]}
                    alt=""
                    className="size-14 rounded-xl object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">
                      {item.title}
                    </span>
                    <span className="text-xs text-muted">{item.city}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <LoginOverlay open={login} onClose={() => setLogin(false)} />
      <VoiceOverlay open={voice} onClose={() => setVoice(false)} />
    </AppFrame>
  );
}
