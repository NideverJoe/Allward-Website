const LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#product", label: "Product" },
  { href: "#different", label: "Differentiators" },
  { href: "#model", label: "Business model" },
  { href: "#status", label: "Status" },
  { href: "#trust", label: "Trust" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

/** Jump links for skimming. Sits just under the site header. */
export default function SectionNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate/10"
    >
      <ul className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-1 overflow-x-auto py-2 text-sm">
        {LINKS.map((l) => (
          <li key={l.href} className="flex-shrink-0">
            <a
              href={l.href}
              className="block rounded-lg px-3 py-2 font-medium text-slate hover:bg-cream hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
