import { leadership } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function Leadership() {
  return (
    <section id="leadership" className="section-shell relative z-10">
      <SectionHeader eyebrow={leadership.eyebrow} title={leadership.title} />
      <div className="grid gap-4 sm:grid-cols-2">
        {leadership.items.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn
              key={item.title}
              delay={index * 0.04}
              className="editorial-card p-5 transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/12 text-terracotta">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-[1.45rem] font-semibold leading-tight text-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.description}</p>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
