"use client";

import { useEffect, useMemo, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { navItems, site } from "@/content/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#about");
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-full border border-charcoal/10 bg-ivory/80 px-4 shadow-soft backdrop-blur-xl sm:px-5">
        <a href="#home" className="min-w-fit font-serif text-xl font-semibold text-charcoal sm:text-2xl">
          Shrujal Agarwal
        </a>

        <div className="nav-scroll hidden max-w-[46rem] items-center gap-1 overflow-x-auto whitespace-nowrap rounded-full border border-charcoal/10 bg-porcelain/60 p-1 text-sm font-semibold text-charcoal/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-3 py-2 transition hover:text-charcoal ${
                activeHref === item.href ? "bg-ivory text-charcoal shadow-soft" : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-1 bottom-1 mx-auto h-1 w-1 rounded-full bg-terracotta transition ${
                  activeHref === item.href ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.requestResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center justify-center gap-2 rounded-full bg-clay px-4 text-sm font-bold text-porcelain shadow-soft transition hover:-translate-y-0.5 hover:bg-terracotta sm:inline-flex"
          >
            <Mail size={16} />
            Request Resume
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-porcelain text-charcoal shadow-soft lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-[8px] border border-charcoal/10 bg-ivory/95 px-5 py-4 shadow-card backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-4 py-3 text-sm font-bold text-charcoal/75 transition hover:bg-porcelain hover:text-charcoal"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.requestResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-clay px-5 text-sm font-bold text-porcelain"
            >
              <Mail size={16} />
              Request Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
