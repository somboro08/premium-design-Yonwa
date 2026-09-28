import {
  createContext,
  useContext,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

const StageContext = createContext<HTMLDivElement | null>(null);

export function AppFrame({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  const [stage, setStage] = useState<HTMLDivElement | null>(null);

  return (
    <div className="min-h-dvh bg-canvas">
      <div className="lg:grid lg:min-h-dvh lg:grid-cols-[minmax(0,1fr)_var(--width-app)]">
        <BrandPanel />
        <StageContext.Provider value={stage}>
          <div
            ref={setStage}
            className="relative mx-auto flex h-dvh w-full max-w-app flex-col overflow-hidden bg-bg lg:max-w-none lg:shadow-frame"
          >
            <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto scrollbar-none">
              {children}
            </div>
            {footer}
          </div>
        </StageContext.Provider>
      </div>
    </div>
  );
}

function BrandPanel() {
  return (
    <aside className="relative hidden overflow-hidden lg:flex">
      <img
        src="/images/stories.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover anim-kenburns"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/20" />
      <div className="relative z-10 flex w-full flex-col justify-between p-12 text-on-media">
        <Link to="/" className="text-3xl font-semibold tracking-tight">
          yonwa
        </Link>
        <div className="max-w-md space-y-5">
          <p className="text-4xl font-semibold leading-tight tracking-tight">
            Le Bénin, vécu.
            <br />
            Pas visité.
          </p>
          <p className="text-sm leading-relaxed text-on-media/75">
            Des ateliers chez l’artisan — cuisine, argile, contes, lagune.
            Certifiés, remboursables, tenus à taille humaine.
          </p>
          <div className="flex gap-8 pt-2 text-sm">
            <Stat value="48" label="artisans" />
            <Stat value="14" label="villes" />
            <Stat value="5.0" label="note moyenne" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-semibold tabular-nums">{value}</div>
      <div className="text-on-media/60">{label}</div>
    </div>
  );
}

export function Overlay({
  open,
  onClose,
  children,
  labelledBy,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy?: string;
}) {
  const stage = useContext(StageContext);
  if (!open) return null;
  const node = (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Fermer"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="anim-sheet relative max-h-[88%] overflow-y-auto rounded-t-3xl bg-bg p-5 shadow-float scrollbar-none"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-line" />
        {children}
      </div>
    </div>
  );
  if (stage) return createPortal(node, stage);
  return node;
}

export function Cover({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  const stage = useContext(StageContext);
  if (!open) return null;
  if (stage) return createPortal(children, stage);
  return children;
}

export function MediaButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "flex size-11 items-center justify-center rounded-full bg-bg/92 text-fg shadow-float backdrop-blur-md active:scale-[0.96]",
        className,
      )}
      {...props}
    />
  );
}
