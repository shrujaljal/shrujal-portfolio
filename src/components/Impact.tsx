import { impact } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function Impact() {
  return (
    <section id="impact" className="section-shell relative z-10">
      <SectionHeader eyebrow={impact.eyebrow} title={impact.title} body={impact.intro} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {impact.cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <FadeIn
              key={card.title}
              delay={index * 0.035}
              className="group rounded-[8px] border border-charcoal/10 bg-porcelain/85 p-5 shadow-soft transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage/14 text-sage">
                <Icon size={20} />
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
    </section>
  );
}
