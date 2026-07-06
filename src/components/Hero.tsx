"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Mail, Sparkle, SquareArrowOutUpRight } from "lucide-react";
import { hero, site } from "@/content/siteContent";
import { WebsiteImage } from "./WebsiteImage";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 720], [0, shouldReduceMotion ? 0 : 52]);

  return (
    <section id="home" className="relative z-10 flex min-h-[86vh] items-center px-5 pb-12 pt-28 sm:px-8 lg:min-h-[92vh] lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{hero.kicker}</p>
          <h1 className="mt-4 max-w-4xl text-balance font-serif text-5xl font-semibold leading-[1.02] text-charcoal sm:text-6xl lg:text-[4.55rem]">
            <span className="block">Curiosity into clarity.</span>
            <span className="block">Ideas into impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/70 sm:text-xl">{hero.body}</p>

          <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
            {hero.roleFit.map((role) => (
              <span key={role} className="rounded-full border border-charcoal/10 bg-porcelain/75 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-charcoal/70">
                {role}
              </span>
            ))}
          </div>

          <div className="mt-6 flex max-w-3xl flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-charcoal/60">
            {hero.proof.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Sparkle size={14} className="text-terracotta" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.requestResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-clay px-6 text-sm font-bold text-porcelain shadow-card transition hover:-translate-y-0.5 hover:bg-terracotta"
            >
              {hero.secondaryCta}
              <Mail size={17} />
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-porcelain/70 px-6 text-sm font-bold text-charcoal transition hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
            >
              {hero.tertiaryCta}
              <SquareArrowOutUpRight size={16} />
            </a>
            <a
              href={site.emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-porcelain/70 px-6 text-sm font-bold text-charcoal transition hover:-translate-y-0.5 hover:border-sage hover:text-sage"
            >
              Email Me
              <Mail size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y: portraitY }} className="relative mx-auto w-full max-w-[33rem]">
          <div className="absolute -left-5 top-8 h-[82%] w-[82%] rotate-[-5deg] rounded-[8px] bg-sage/18" />
          <div className="absolute -right-4 bottom-8 h-[76%] w-[78%] rotate-[4deg] rounded-[8px] bg-terracotta/16" />
          <div className="image-frame relative">
            <WebsiteImage slot="heroPhoto" className="aspect-[4/5] w-full" imgClassName="object-[50%_38%]" eager />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-7 text-porcelain">
              <p className="font-serif text-3xl font-semibold sm:text-4xl">{site.name}</p>
              <p className="mt-2 max-w-md text-sm font-semibold leading-6 text-porcelain/75">{site.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
