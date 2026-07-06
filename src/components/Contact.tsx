import { Mail, SquareArrowOutUpRight } from "lucide-react";
import { contact, site } from "@/content/siteContent";
import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 py-14 sm:px-8 lg:py-20">
      <FadeIn className="mx-auto max-w-5xl rounded-[8px] border border-terracotta/20 bg-gradient-to-br from-clay via-terracotta to-gold p-7 text-porcelain shadow-editorial sm:p-10 lg:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-porcelain/80">{contact.eyebrow}</p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.06] sm:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-porcelain/70">{contact.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.requestResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-porcelain px-6 text-sm font-bold text-charcoal transition hover:-translate-y-0.5"
          >
            <Mail size={17} />
            Request Resume
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-porcelain/30 px-6 text-sm font-bold text-porcelain transition hover:-translate-y-0.5 hover:bg-porcelain/10"
          >
            LinkedIn
            <SquareArrowOutUpRight size={16} />
          </a>
          <a
            href={site.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-porcelain/30 px-6 text-sm font-bold text-porcelain transition hover:-translate-y-0.5 hover:bg-porcelain/10"
          >
            Email Me
            <Mail size={16} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
