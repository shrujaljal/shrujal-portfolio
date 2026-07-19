import { projects } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { WebsiteImage } from "./WebsiteImage";

const projectImageSlots = ["projectHyundaiPresentation", "recognitionCaseCompetition", "projectPodcast"] as const;

export function Projects() {
  return (
    <section id="projects" className="section-shell relative z-10">
      <SectionHeader eyebrow={projects.eyebrow} title={projects.title} />
      <FadeIn className="editorial-card paper-texture mb-4 grid gap-5 p-5 md:grid-cols-[0.38fr_0.62fr] md:items-center">
        <div>
          <p className="eyebrow">Project Lens</p>
          <p className="mt-4 font-serif text-2xl font-semibold leading-[1.12] text-charcoal sm:text-3xl">
            The work is not just finding the answer. It is making the path understandable enough for people to move.
          </p>
        </div>
        <p className="leading-7 text-charcoal/70">
          These selected projects are framed as business questions: clarify the decision, understand the room, and shape a recommendation that can survive real constraints.
        </p>
      </FadeIn>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.items.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.05} className="group editorial-card flex h-full flex-col p-4 transition hover:-translate-y-1 hover:shadow-card">
            <div className="image-frame">
              <WebsiteImage
                slot={projectImageSlots[index]}
                className="h-36 w-full bg-sand/35 sm:h-40"
                imgClassName="object-contain transition duration-500 group-hover:scale-[1.02]"
                overlay={false}
              />
            </div>
            <div className="mt-5">
              <h3 className="font-serif text-[1.55rem] font-semibold leading-tight text-charcoal">{project.title}</h3>
            </div>
            <div className="mt-4 grid gap-3">
              <div>
                <p className="eyebrow">Business Question</p>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">{project.question}</p>
              </div>
              <div>
                <p className="eyebrow">Approach</p>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">{project.approach}</p>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-sand/50 px-3 py-1 text-sm font-bold text-charcoal/70">
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
