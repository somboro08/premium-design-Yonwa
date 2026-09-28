import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Send } from "lucide-react";
import { AppFrame } from "@/components/app-frame";
import { ArtisanDot } from "@/components/experience-card";
import { getArtisan } from "@/lib/data";
import { useYonwa } from "@/lib/store";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/messages/$threadId")({
  component: Thread,
});

function Thread() {
  const { threadId } = Route.useParams();
  const artisan = getArtisan(threadId);
  const ensureThread = useYonwa((s) => s.ensureThread);
  const sendMessage = useYonwa((s) => s.sendMessage);
  const messages = useYonwa((s) => s.threads[threadId] ?? []);
  const [text, setText] = useState("");
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureThread(threadId);
  }, [ensureThread, threadId]);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (!artisan) {
    return (
      <AppFrame>
        <p className="p-8 text-center text-sm">Conversation introuvable.</p>
      </AppFrame>
    );
  }

  return (
    <AppFrame
      footer={
        <form
          className="flex items-center gap-2 border-t border-line px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(threadId, text);
            setText("");
          }}
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Écrire un message…"
            className="h-11 flex-1 rounded-full bg-primary-soft px-4 text-sm outline-none"
          />
          <button
            type="submit"
            className="flex size-11 items-center justify-center rounded-full bg-ink text-bg"
            aria-label="Envoyer"
          >
            <Send className="size-4" />
          </button>
        </form>
      }
    >
      <div className="flex items-center gap-3 border-b border-line px-3 py-3">
        <Link
          to="/messages"
          className="flex size-10 items-center justify-center"
          aria-label="Retour"
        >
          <ChevronLeft className="size-5" />
        </Link>
        <ArtisanDot
          artisanId={artisan.id}
          initial={artisan.initial}
          photo={artisan.photo}
        />
        <div>
          <p className="text-sm font-semibold">{artisan.name}</p>
          <p className="text-xs text-muted">{artisan.city}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 py-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
              message.from === "me"
                ? "self-end bg-ink text-bg"
                : "self-start bg-primary-soft",
            )}
          >
            {message.text}
          </div>
        ))}
        <div ref={end} />
      </div>
    </AppFrame>
  );
}
