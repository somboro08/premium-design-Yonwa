import { createFileRoute } from "@tanstack/react-router";
import { AppFrame } from "@/components/app-frame";
import { ImmersionFilm } from "@/components/home-extras";

export const Route = createFileRoute("/immersion")({ component: Immersion });

function Immersion() {
  return (
    <AppFrame>
      <ImmersionFilm />
    </AppFrame>
  );
}
