import { recognition } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { WebsiteImage } from "./WebsiteImage";

const recognitionImages = [
  { slot: "recognitionBGS", label: "Beta Gamma Sigma", featured: true },
  { slot: "recognitionCertificate", label: "BGS detail", featured: false },
  { slot: "recognitionStudentAward", label: "Professional resources", featured: false },
] as const;

export function Recognition() {
  return (
    <section id="recognition" className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <SectionHeader eyebrow={recognition.eyebrow} title={recognition.title} body={recognition.body} />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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
        <FadeIn className="grid gap-3 sm:grid-cols-2">
          {recognitionImages.map((image) => (
            <div key={image.slot} className={`image-frame group relative ${image.featured ? "sm:col-span-2" : ""}`}>
              <WebsiteImage
                slot={image.slot}
                className={`${image.featured ? "aspect-[16/9]" : "aspect-[5/3]"} w-full`}
                imgClassName="transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-sm font-bold text-porcelain">
                {image.label}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
