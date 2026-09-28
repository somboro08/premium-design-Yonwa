import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,opacity] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        ink: "bg-ink text-bg",
        primary: "bg-primary text-primary-fg",
        ghost: "bg-transparent text-fg",
        soft: "bg-bg/90 text-fg backdrop-blur-md",
        line: "border border-line bg-bg text-fg",
      },
      size: {
        sm: "h-9 px-3.5 text-sm rounded-full",
        md: "h-11 px-5 text-sm rounded-full",
        lg: "h-12 px-6 text-[15px] rounded-full",
        icon: "size-11 rounded-full",
        iconSm: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "ink",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
