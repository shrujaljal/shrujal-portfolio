import { howIWork } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function HowIWork() {
  return (
    <section id="how-i-work" className="section-shell relative z-10">
      <SectionHeader eyebrow={howIWork.eyebrow} title={howIWork.title} />
      <div className="editorial-card overflow-hidden">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {howIWork.steps.map((step, index) => (
            <FadeIn key={step} delay={index * 0.04} className="relative min-h-36 border-b border-charcoal/10 p-5 sm:border-r">
              <span className="font-serif text-4xl font-semibold text-terracotta/42">0{index + 1}</span>
              <p className="mt-5 font-semibold leading-7 text-charcoal">{step}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="flex flex-wrap gap-2 border-t border-charcoal/10 p-5">
          {howIWork.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-sand/55 px-3 py-1 text-sm font-bold text-charcoal/70">
              {skill}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
