import { skillsSection } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section-shell relative z-10">
      <SectionHeader eyebrow={skillsSection.eyebrow} title={skillsSection.title} body={skillsSection.body} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillsSection.groups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.04} className="editorial-card p-5 transition hover:-translate-y-1 hover:shadow-card">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/12 font-serif text-lg font-semibold text-terracotta">
                {index + 1}
              </span>
              <h3 className="font-serif text-2xl font-semibold leading-tight text-charcoal">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-charcoal/10 bg-porcelain/72 px-3 py-2 text-sm font-bold text-charcoal/70">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
