import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  children?: ReactNode;
};

export function SectionHeader({ eyebrow, title, body, children }: SectionHeaderProps) {
  return (
    <FadeIn className="mb-8 max-w-3xl lg:mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-serif text-4xl font-semibold leading-[1.06] text-charcoal sm:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-charcoal/70 sm:text-lg">{body}</p> : null}
      {children}
    </FadeIn>
  );
}
