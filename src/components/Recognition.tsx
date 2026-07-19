import { recognition } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { WebsiteImage } from "./WebsiteImage";

const recognitionImages = [
  { slot: "recognitionCertificate", label: "Beta Gamma Sigma Honor Society" },
  { slot: "recognitionStudentAward", label: "Professional Development Lead Award" },
] as const;

export function Recognition() {
  return (
    <section id="recognition" className="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <SectionHeader eyebrow={recognition.eyebrow} title={recognition.title} body={recognition.body} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {recognition.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.04} className="editorial-card p-5 transition hover:-translate-y-1 hover:shadow-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/14 text-clay">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.description}</p>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn className="grid gap-3">
          {recognitionImages.map((image) => (
            <div key={image.slot} className="image-frame group relative">
              <WebsiteImage
                slot={image.slot}
                className="h-44 w-full bg-sand/35 sm:h-52 lg:h-56"
                imgClassName="object-contain transition duration-500 group-hover:scale-[1.02]"
                overlay={false}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-3 text-xs font-bold leading-4 text-porcelain sm:text-sm">
                {image.label}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
