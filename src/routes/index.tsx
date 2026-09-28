import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AppFrame } from "@/components/app-frame";
import { BottomNav } from "@/components/bottom-nav";
import { ExperienceCard } from "@/components/experience-card";
import {
  HeroCarousel,
  HomeHeader,
  ImmersionCard,
  LoginOverlay,
  NotifOverlay,
  SearchOverlay,
  VoiceOverlay,
} from "@/components/home-extras";
import { experiences, recommendedIds } from "@/lib/data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [notif, setNotif] = useState(false);
  const [voice, setVoice] = useState(false);
  const recommended = recommendedIds
    .map((id) => experiences.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <AppFrame footer={<BottomNav onVoice={() => setVoice(true)} />}>
      <HomeHeader
        onSearch={() => setSearch(true)}
        onLogin={() => setLogin(true)}
        onNotif={() => setNotif(true)}
      />
      <HeroCarousel />
      <ImmersionCard />
      <section className="mt-7 px-5 pb-8 anim-rise stagger-4">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Recommandé pour toi
          </h2>
          <Link
            to="/explore"
            className="flex items-center gap-0.5 text-sm font-semibold text-primary"
          >
            Voir plus
            <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="space-y-4 pb-6">
          {recommended.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </section>
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
      <LoginOverlay open={login} onClose={() => setLogin(false)} />
      <NotifOverlay open={notif} onClose={() => setNotif(false)} />
      <VoiceOverlay open={voice} onClose={() => setVoice(false)} />
    </AppFrame>
  );
}
