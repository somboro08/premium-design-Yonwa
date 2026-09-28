import { Link } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";
import { artisanOf, type Experience } from "@/lib/data";
import { cn } from "@/lib/cn";

export function ExperienceCard({
  experience,
  className,
}: {
  experience: Experience;
  className?: string;
}) {
  const artisan = artisanOf(experience);
  return (
    <Link
      to="/experience/$id"
      params={{ id: experience.id }}
      className={cn(
        "relative block h-52 overflow-hidden rounded-2xl bg-ink text-on-media shadow-card",
        className,
      )}
    >
      <img
        src={experience.images[0]}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-ink/10" />
      <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-fg">
        <MapPin className="size-3" strokeWidth={2.4} />
        {experience.city}
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/35 px-2 py-1 text-[11px] font-medium backdrop-blur-sm">
        <Star className="size-3 fill-star text-star" />
        {experience.rating.toFixed(1)}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-[17px] font-semibold leading-snug">
          {experience.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-on-media/80">
          {experience.tagline}
        </p>
        {artisan ? (
          <div className="mt-3 flex items-center gap-2">
            <ArtisanDot artisanId={artisan.id} initial={artisan.initial} photo={artisan.photo} />
            <span className="text-xs text-on-media/80">{artisan.handle}</span>
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export function ArtisanDot({
  artisanId: _artisanId,
  initial,
  photo,
  size = "sm",
}: {
  artisanId: string;
  initial: string;
  photo?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim =
    size === "lg" ? "size-12" : size === "md" ? "size-11" : "size-7";
  if (photo) {
    return (
      <img
        src={photo}
        alt=""
        className={cn(dim, "rounded-full object-cover ring-2 ring-primary/80")}
      />
    );
  }
  return (
    <span
      className={cn(
        dim,
        "inline-flex items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-fg",
      )}
    >
      {initial}
    </span>
  );
}
