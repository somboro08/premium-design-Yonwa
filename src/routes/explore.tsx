import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { AppFrame } from "@/components/app-frame";
import { BottomNav } from "@/components/bottom-nav";
import { ExperienceCard } from "@/components/experience-card";
import { VoiceOverlay } from "@/components/home-extras";
import { categories, experiences, type Category } from "@/lib/data";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/explore")({ component: Explore });

function Explore() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const [voice, setVoice] = useState(false);
  const list = useMemo(() => {
    return experiences.filter((item) => {
      if (filter !== "all" && item.category !== filter) return false;
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  return (
    <AppFrame footer={<BottomNav onVoice={() => setVoice(true)} />}>
      <div className="px-5 pt-5">
        <h1 className="text-2xl font-semibold tracking-tight">Explorer</h1>
        <p className="mt-1 text-sm text-muted">
          Cuisine, argile, contes, eau, palais.
        </p>
        <label className="mt-4 flex items-center gap-2 rounded-full bg-primary-soft px-4 py-3">
          <Search className="size-4 text-primary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Une ville, un geste…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-faint"
          />
        </label>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "h-9 shrink-0 rounded-full px-4 text-sm font-medium",
                filter === cat.id
                  ? "bg-ink text-bg"
                  : "bg-primary-soft text-fg",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 px-5 pt-5 pb-8">
        {list.map((item) => (
          <ExperienceCard key={item.id} experience={item} />
        ))}
        {list.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted">
            Rien pour cette recherche. Essaie « cuisine » ou « Ouidah ».
          </p>
        ) : null}
      </div>
      <VoiceOverlay open={voice} onClose={() => setVoice(false)} />
    </AppFrame>
  );
}
