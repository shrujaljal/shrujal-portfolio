import { site } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-charcoal/10 px-5 py-8 text-center text-sm font-medium text-charcoal/56 sm:px-8">
      <p>
        {site.name} | {site.throughline}
      </p>
    </footer>
  );
}
