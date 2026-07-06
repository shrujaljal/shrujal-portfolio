import { gallery, leadership } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { WebsiteImage } from "./WebsiteImage";

const leadershipImages = ["leadershipModeration", "leadershipProfessionalLead"] as const;
const galleryImages = [
  { slot: "galleryGraduation", caption: "Graduation milestone" },
  { slot: "galleryCityNight", caption: "Personal ambition" },
  { slot: "galleryWomenInBusiness", caption: "Women in Business" },
  { slot: "galleryCommunity", caption: "Student leadership" },
  { slot: "galleryUcrBanner", caption: "UCR milestone", contain: true },
] as const;

export function Leadership() {
  return (
    <section id="leadership" className="section-shell relative z-10">
      <SectionHeader eyebrow={leadership.eyebrow} title={leadership.title} />
      <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
        <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {leadershipImages.map((slot) => (
            <div key={slot} className="image-frame">
              <WebsiteImage slot={slot} className="aspect-[16/10] w-full" />
            </div>
          ))}
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {leadership.items.map((item, index) => {
            const Icon = item.icon;
            const isFeature = item.title === "Professional Development Lead";
            return (
              <FadeIn
                key={item.title}
                delay={index * 0.04}
                className={`editorial-card p-5 transition hover:-translate-y-1 hover:shadow-card ${isFeature ? "sm:col-span-2" : ""}`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/12 text-terracotta">
                  <Icon size={22} />
                </div>
                <h3 className={`font-serif font-semibold leading-tight text-charcoal ${isFeature ? "text-3xl" : "text-2xl"}`}>{item.title}</h3>
                <p className={`mt-3 leading-7 text-charcoal/70 ${isFeature ? "max-w-3xl" : "text-sm leading-6"}`}>{item.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
      <div id="gallery" className="mt-8">
        <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} body={gallery.body} />
        <div className="grid auto-rows-[9rem] gap-3 sm:grid-cols-5 lg:auto-rows-[10rem]">
          {galleryImages.map((image, index) => (
            <FadeIn
              key={image.slot}
              delay={index * 0.04}
              className={`image-frame group relative ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              {(() => {
                const shouldContain = "contain" in image && image.contain;
                return (
              <WebsiteImage
                slot={image.slot}
                    className={`h-full w-full ${shouldContain ? "bg-sand/50" : ""}`}
                    imgClassName={`transition duration-500 group-hover:scale-[1.04] ${shouldContain ? "object-contain" : ""}`}
              />
                );
              })()}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-sm font-bold text-porcelain opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {image.caption}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
