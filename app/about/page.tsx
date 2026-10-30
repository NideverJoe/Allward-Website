import type { Metadata } from "next";
import AllwardMethod from "@/components/AllwardMethod";

export const metadata: Metadata = {
  title: "About | ALLWARD Labs",
  description: "ALLWARD Labs is a product company built around a simple starting point: begin with one person and one real problem.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 bg-cream" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 id="about-heading" className="text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
              About ALLWARD Labs
            </h1>
            <p className="text-xl text-slate leading-relaxed max-w-2xl">
              A product company built around a simple starting point: begin with one person and one real problem.
            </p>
          </div>
        </div>
      </section>

      {/* About copy */}
      <section className="py-16 sm:py-24 px-4 bg-white" aria-label="Company background">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-6 text-slate leading-relaxed">
            <p>
              ALLWARD Labs is a product company built around a simple starting point: begin with one person and one real problem.
            </p>
            <p>
              Our founder, Joe Nidever, came to this work from education, and he has a passion for it: for helping others grow and improve. He later moved into technology, where he brings a background in full stack development, AI, and automation, and leads product creation.
            </p>
            <p>
              That path shaped how we work. We solve a specific problem for a specific individual first. Then we look for others who share it, and for other problems that same person faces. Over time, a solution built for a few can grow into something more people can use.
            </p>
            <p className="font-semibold text-navy text-lg">
              The name says it plainly: all, and forward.
            </p>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-16 sm:py-24 px-4 bg-cream" aria-labelledby="method-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 id="method-heading" className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              How we work: the ALLWARD Method
            </h2>
            <p className="text-slate max-w-2xl">
              We start with one person and one problem. From there, both sides grow together.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate/8">
            <AllwardMethod />
          </div>

          {/* Accessible version of the full text */}
          <details className="mt-6 md:hidden">
            <summary className="text-teal font-medium text-sm cursor-pointer">View as text</summary>
            <ol className="mt-4 space-y-3 list-decimal list-inside text-slate text-sm">
              <li>Identify a specific problem for a specific individual.</li>
              <li>Expand to additional individuals who share that problem.</li>
              <li>Expand the solution to address more problems for that individual.</li>
              <li>Grow to more individuals, solving more problems for more people.</li>
              <li>Move beyond solving problems to enhancing standard use.</li>
              <li>Open it up to the general population.</li>
            </ol>
          </details>
        </div>
      </section>
    </>
  );
}
