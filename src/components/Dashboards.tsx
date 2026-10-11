import { ArrowUpRight, BarChart3, Github } from "lucide-react";
import { dashboards } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function Dashboards() {
  return (
    <section id="dashboards" className="section-shell relative z-10">
      <SectionHeader eyebrow={dashboards.eyebrow} title={dashboards.title} body={dashboards.body} />

      <div className="grid gap-6 lg:gap-8">
        {dashboards.items.map((item, index) => {
          const primary = item.links.find((link) => link.primary) ?? item.links[0];
          const flip = index % 2 === 1;

          return (
            <FadeIn
              key={item.title}
              delay={index * 0.05}
              className="editorial-card paper-texture grid min-w-0 grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8"
            >
              <a
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${primary.label}: ${item.title}`}
                className={`group relative block min-w-0 ${flip ? "lg:order-2" : ""}`}
              >
                <div className="absolute -inset-2 -z-10 rotate-[-1.2deg] rounded-[10px] bg-terracotta/10 transition duration-500 group-hover:rotate-0" />
                <div className="image-frame relative bg-white">
                  <div className="flex items-center gap-1.5 border-b border-charcoal/10 bg-porcelain px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-terracotta/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-sage/70" />
                    <span className="ml-3 truncate text-xs font-semibold text-charcoal/50">Tableau Public · {item.title}</span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-charcoal/55 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-porcelain px-4 py-2 text-sm font-bold text-charcoal shadow-card">
                      {primary.label}
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </a>

              <div className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>
                <p className="eyebrow inline-flex items-center gap-2">
                  <BarChart3 size={14} />
                  {item.subtitle}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-[2.1rem]">{item.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/70">{item.question}</p>

                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[8px] border border-charcoal/10 bg-ivory/80 p-3">
                      <p className="font-serif text-2xl font-semibold text-clay sm:text-3xl">{metric.value}</p>
                      <p className="mt-1 text-xs leading-5 text-charcoal/60">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 grid gap-2.5">
                  {item.findings.map((finding) => (
                    <li key={finding} className="flex gap-3 text-sm leading-6 text-charcoal/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      {finding}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-sand/50 px-3 py-1 text-xs font-bold text-charcoal/70">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.primary
                          ? "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-clay px-5 text-sm font-bold text-porcelain shadow-card transition hover:-translate-y-0.5 hover:bg-terracotta"
                          : "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-porcelain/70 px-5 text-sm font-bold text-charcoal transition hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
                      }
                    >
                      {link.label}
                      {link.href.includes("github.com") ? <Github size={16} /> : <ArrowUpRight size={16} />}
                    </a>
                  ))}
                </div>

                {item.note ? <p className="mt-4 text-xs italic text-charcoal/50">{item.note}</p> : null}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
