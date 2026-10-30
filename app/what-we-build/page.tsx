import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Build | ALLWARD Labs",
  description: "ALLWARD Labs builds products in education, entertainment, communication, and confidence. Each one starts with a specific person and a specific need.",
};

const areas = [
  {
    title: "Education and learning",
    description:
      "Children learn through play, so we build learning experiences that meet students where they are and engage them the way they naturally engage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Entertainment and play",
    description:
      "Tools that let people take part in games and shared activities in the way that works for them.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Communication and connection",
    description:
      "Tools that make conversations clearer, from asking the hard questions to reading social cues.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Confidence and self-expression",
    description:
      "Tools that help people speak, present, and be heard, whatever their starting point.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
] as const;

export default function WhatWeBuildPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-cream" aria-labelledby="build-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 id="build-heading" className="text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
              What We Build
            </h1>
            <p className="text-xl text-slate leading-relaxed max-w-2xl">
              ALLWARD Labs builds products in a few areas. Each one starts with a specific person and a specific need.
            </p>
          </div>
        </div>
      </section>

      {/* Product areas */}
      <section className="py-16 sm:py-24 px-4 bg-white" aria-label="Product areas">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {areas.map((area) => (
              <article
                key={area.title}
                className="bg-cream rounded-2xl p-7 sm:p-8 border border-slate/8 hover:border-teal/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal/10 text-teal mb-5">
                  {area.icon}
                </div>
                <h2 className="text-xl font-bold text-navy mb-3">{area.title}</h2>
                <p className="text-slate leading-relaxed text-base">{area.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-2xl">
            <p className="text-slate leading-relaxed">
              Individual products will have their own pages as they launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 bg-navy" aria-label="Contact call to action">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-cream/85 text-lg sm:text-xl leading-relaxed mb-8">
              Interested in this work? We&apos;d like to hear from you.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cream hover:text-navy transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
