import { createFileRoute, Link } from "@tanstack/react-router";
import { AppFrame } from "@/components/app-frame";
import { BottomNav } from "@/components/bottom-nav";
import { ArtisanDot } from "@/components/experience-card";
import { VoiceOverlay } from "@/components/home-extras";
import { artisans } from "@/lib/data";
import { useYonwa } from "@/lib/store";
import { useState } from "react";

export const Route = createFileRoute("/messages")({ component: Messages });

function Messages() {
  const threads = useYonwa((s) => s.threads);
  const ensureThread = useYonwa((s) => s.ensureThread);
  const [voice, setVoice] = useState(false);
  const list = artisans.filter(
    (artisan) => (threads[artisan.id]?.length ?? 0) > 0,
  );

  return (
    <AppFrame footer={<BottomNav onVoice={() => setVoice(true)} />}>
      <div className="px-5 pt-5 pb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Messages</h1>
        <p className="mt-1 text-sm text-muted">Écris directement à l’artisan.</p>
        {list.length === 0 ? (
          <div className="mt-10">
            <p className="text-sm text-muted">
              Aucune conversation. Choisis un artisan pour dire bonjour.
            </p>
            <ul className="mt-4 space-y-2">
              {artisans.map((artisan) => (
                <li key={artisan.id}>
                  <Link
                    to="/messages/$threadId"
                    params={{ threadId: artisan.id }}
                    onClick={() => ensureThread(artisan.id)}
                    className="flex items-center gap-3 rounded-2xl border border-line p-3"
                  >
                    <ArtisanDot
                      artisanId={artisan.id}
                      initial={artisan.initial}
                      photo={artisan.photo}
                      size="md"
                    />
                    <span>
                      <span className="block text-sm font-semibold">
                        {artisan.name}
                      </span>
                      <span className="text-xs text-muted">{artisan.city}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="mt-5 space-y-2">
            {list.map((artisan) => {
              const last = threads[artisan.id]?.at(-1);
              return (
                <li key={artisan.id}>
                  <Link
                    to="/messages/$threadId"
                    params={{ threadId: artisan.id }}
                    className="flex items-center gap-3 rounded-2xl p-2 hover:bg-primary-soft"
                  >
                    <ArtisanDot
                      artisanId={artisan.id}
                      initial={artisan.initial}
                      photo={artisan.photo}
                      size="md"
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">
                        {artisan.handle}
                      </span>
                      <span className="block truncate text-xs text-muted">
                        {last?.text}
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
