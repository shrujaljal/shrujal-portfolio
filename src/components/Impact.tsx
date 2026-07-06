import { impact } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { WebsiteImage } from "./WebsiteImage";

export function Impact() {
  return (
    <section id="impact" className="section-shell relative z-10">
      <SectionHeader eyebrow={impact.eyebrow} title={impact.title} body={impact.intro} />
      <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <FadeIn className="image-frame relative lg:sticky lg:top-28">
          <WebsiteImage slot="projectHyundaiVisit" className="aspect-[4/5] h-full w-full bg-sage/10" imgClassName="object-contain" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/75 to-transparent p-6 text-porcelain">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Operations Consulting</p>
            <p className="mt-2 font-serif text-2xl font-semibold">Turning field context into clearer recommendations.</p>
          </div>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          {impact.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn
                key={card.title}
                delay={index * 0.035}
                className="group rounded-[8px] border border-charcoal/10 bg-porcelain/85 p-5 shadow-soft transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-card"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sage/14 text-sage">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-semibold text-charcoal">{card.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">{card.context}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-charcoal/70">{card.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
