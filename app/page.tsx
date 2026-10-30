import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              When you build first to include, everyone benefits.
            </h1>
            <p className="text-xl sm:text-2xl text-slate max-w-2xl leading-relaxed mb-10">
              ALLWARD Labs builds tools that start with one person who is excluded, and grow into something more people can choose.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-navy transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* The Idea */}
      <section className="py-16 sm:py-24 px-4 bg-white" aria-labelledby="idea-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 id="idea-heading" className="text-2xl sm:text-3xl font-bold text-navy mb-6">
              The idea
            </h2>
            <p className="text-slate leading-relaxed">
              Every great accommodation starts as a fix for one person. Then it turns out to help everyone. We call this the curb-cut effect, and it&apos;s the thesis behind everything we make. Solve the problem for the person who needs it most, and you raise the floor for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Where it Started */}
      <section className="py-16 sm:py-24 px-4 bg-cream" aria-labelledby="origin-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 id="origin-heading" className="text-2xl sm:text-3xl font-bold text-navy mb-6">
              Where it started
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              ALLWARD began in education, where students with special needs are supported. Inside the classroom, those needs have a solution: accommodations.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              Outside the classroom, it&apos;s a different story. The same needs exist in games and entertainment, in conversations, in how people speak and connect, and far fewer answers are waiting for them.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-teal pl-6 py-2">
              <p
                className="text-xl sm:text-2xl text-navy leading-relaxed"
                style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
              >
                That gap is where we work. We build the accommodations the real world is missing, for the people who need them. And because the best of these ideas make things better for anyone, we build them so everyone has the opportunity to choose them too.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 px-4 bg-navy" aria-labelledby="mission-heading">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 id="mission-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Mission
            </h2>
            <p className="text-cream/85 text-lg sm:text-xl leading-relaxed mb-8">
              ALLWARD Labs builds the accommodations the real world is missing. We start with one person and one problem, and we build outward from there, so that more people have the chance to benefit.
            </p>
            <p className="text-amber font-semibold text-lg sm:text-xl">
              Accommodations for the real world. Available to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 px-4 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                Get in touch
              </h2>
              <p className="text-slate leading-relaxed max-w-sm">
                ALLWARD Labs is building products that start with one person and one problem. If that&apos;s the kind of work you want to hear more about, we&apos;d like to talk.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
