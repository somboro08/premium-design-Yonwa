import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Star } from "lucide-react";
import { AppFrame, MediaButton } from "@/components/app-frame";
import { ArtisanDot } from "@/components/experience-card";
import { ExperienceCard } from "@/components/experience-card";
import { Button } from "@/components/ui/button";
import { experiences, getArtisan } from "@/lib/data";
import { useYonwa } from "@/lib/store";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/artisan/$id")({ component: ArtisanPage });

function ArtisanPage() {
  const { id } = Route.useParams();
  const artisan = getArtisan(id);
  const ensureThread = useYonwa((s) => s.ensureThread);
  const navigate = useNavigate();
  const list = experiences.filter((item) => item.artisanId === id);

  if (!artisan) {
    return (
      <AppFrame>
        <p className="p-8 text-center text-sm">Artisan introuvable.</p>
      </AppFrame>
    );
  }

  return (
    <AppFrame>
      <div className="px-5 pt-4 pb-8">
        <MediaButton aria-label="Retour" onClick={() => window.history.back()}>
          <ChevronLeft className="size-5" />
        </MediaButton>
        <div className="mt-6 flex items-center gap-4">
          <ArtisanDot
            artisanId={artisan.id}
            initial={artisan.initial}
            photo={artisan.photo}
            size="lg"
          />
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{artisan.name}</h1>
            <p className="text-sm text-muted">
              {artisan.handle} · {artisan.city}
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
              <Star className="size-3.5 fill-star text-star" />
              {artisan.rating.toFixed(1)} · {artisan.reviews} avis · depuis{" "}
              {artisan.since}
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted">{artisan.bio}</p>
        <Button
          className="mt-5 w-full"
          onClick={() => {
            ensureThread(artisan.id);
            void navigate({
              to: "/messages/$threadId",
              params: { threadId: artisan.id },
            });
          }}
        >
          Écrire à {artisan.name.split(" ")[0]}
        </Button>
        <h2 className="mt-8 mb-3 text-base font-semibold">Ses expériences</h2>
        <div className="space-y-4">
          {list.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
        <Link to="/" className="mt-6 inline-block text-sm text-primary">
          Retour à l’accueil
        </Link>
      </div>
    </AppFrame>
  );
}
