import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  children?: ReactNode;
  titleClassName?: string;
};

export function SectionHeader({ eyebrow, title, body, children, titleClassName }: SectionHeaderProps) {
  return (
    <FadeIn className="mb-6 max-w-6xl lg:mb-7">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 text-balance font-serif font-semibold leading-[1.06] text-charcoal ${
          titleClassName ?? "text-4xl sm:text-5xl"
        }`}
      >
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-charcoal/70 sm:text-lg">{body}</p> : null}
      {children}
    </FadeIn>
  );
}
