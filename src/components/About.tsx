import { about, valueSnapshot } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { WebsiteImage } from "./WebsiteImage";

export function About() {
  return (
    <section id="about" className="section-shell relative z-10">
      <div className="grid items-center gap-9 lg:grid-cols-[0.82fr_1.18fr]">
        <FadeIn className="image-frame">
          <WebsiteImage slot="aboutPhoto" className="aspect-[5/6] w-full" imgClassName="object-[50%_34%]" />
        </FadeIn>
        <div>
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <div className="space-y-4 text-base leading-8 text-charcoal/70 sm:text-lg">
            {about.body.map((paragraph) => (
              <FadeIn key={paragraph}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-7 grid gap-3 sm:grid-cols-3">
            {about.notes.map((note) => (
              <div key={note} className="editorial-card px-5 py-4 text-sm font-bold text-charcoal/70">
                {note}
              </div>
            ))}
          </FadeIn>
          <FadeIn className="mt-5 grid gap-3 lg:grid-cols-3">
            {valueSnapshot.items.map((item) => (
              <article key={item.title} className="rounded-[8px] border border-terracotta/15 bg-porcelain/70 p-4">
                <h3 className="font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/68">{item.text}</p>
              </article>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
