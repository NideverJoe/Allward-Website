import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoopVideo from "@/components/onpoint/LoopVideo";
import { PhoneFrame, PhoneShot } from "@/components/onpoint/Phone";
import SectionNav from "@/components/onpoint/SectionNav";

const TITLE = "OnPoint: Speaking and Teaching Coach | ALLWARD Labs";
const DESCRIPTION =
  "OnPoint listens through your AirPods and shows your pace, vocabulary level, habit phrases and agenda progress while you speak. A working product from ALLWARD Labs, now pre-launch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Shared by link, not listed: keep this page out of search results until it is ready to be public.
  robots: { index: false, follow: false },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website" },
};

/** Shown in the contact section. Leave empty and the page says details are available on request. */
const CONTACT_EMAIL = "";

const problems = [
  {
    title: "No live view of pace or habits",
    text: "Talking too fast, or leaning on the same filler phrase, is hard to notice from the inside.",
  },
  {
    title: "Key points get missed",
    text: "A teacher skips the announcement, a presenter skips a section, and nobody notices until later.",
  },
  {
    title: "Advice arrives too late",
    text: "Feedback after the talk cannot change the talk. By then the audience has already gone home.",
  },
];

const steps = [
  { n: "1", title: "Choose", text: "Pick your metrics and set your goals.", shot: "choose-metrics", alt: "Setup screen listing the metrics you can watch, such as words per minute and reading grade level" },
  { n: "2", title: "Add an agenda", text: "Paste notes and the AI makes a checklist you can edit.", shot: "agenda-built", alt: "An agenda of four items built from pasted notes" },
  { n: "3", title: "Speak", text: "Your phone listens through AirPods and the tiles update live.", shot: "live", alt: "Live screen with four tiles for pace, reading grade, phrase watch list and agenda, and the running transcript" },
  { n: "4", title: "Review", text: "End the session and see how it went.", shot: "summary", alt: "Session summary with duration, words spoken and a pace timeline" },
];

const differences = [
  {
    title: "Feedback while you speak, not after",
    text: "Glanceable tiles on a phone stand and quiet cues in your ear, so you can change course in the middle of a talk instead of reading a report afterwards.",
  },
  {
    title: "Your goals, your metrics",
    text: "Choose up to four tiles from six: pace, reading grade, a watch list of your own phrases, agenda progress, confidence and elapsed time. You set the targets.",
  },
  {
    title: "Tuned to your audience",
    text: "Set the reading grade of the people in the room and see, live, whether your words fit them. A third grade class and a conference need different language.",
  },
  {
    title: "An agenda that checks itself",
    text: "Paste an outline or lesson plan and the AI turns it into a checklist. It ticks points off as you cover them, and one tap on any item overrides it.",
  },
  {
    title: "Quiet by design",
    text: "Pace and vocabulary cues arrive as short, soft tones in your headphones, so nothing is spoken over your talk and your audience hears nothing.",
  },
  {
    title: "Cautious on purpose",
    text: "A false tick is worse than a miss. A point only counts as covered when it was clearly said, and the app checks the AI's supporting quote against the real transcript before it accepts it.",
  },
];

const channels = [
  {
    title: "School districts",
    text: "A license for a district, so its teachers can practice and teach with live feedback.",
  },
  {
    title: "Universities",
    text: "A license for a university, so education majors can rehearse lessons and presentations with feedback while they learn to teach.",
  },
  {
    title: "Individuals",
    text: "A public App Store offering for teachers, speakers and professionals who want it for themselves.",
  },
];

const status = [
  {
    title: "Built",
    text: "Live tiles, soft audio cues, the Agenda, a session summary, a guided welcome and setup, and email sign-in with saved data.",
  },
  {
    title: "Tested",
    text: "Automated tests for the math and the server, a live AI test on demo speech, and an iPhone with AirPods run that covered speech and pace.",
  },
  {
    title: "Not yet",
    text: "A public launch, a full 30-minute real-voice talk on iPhone, and pilots with teachers.",
  },
];

const trust = [
  {
    title: "No audio saved",
    text: "OnPoint has no recording code. Saved sessions hold numbers and counts, nothing you said.",
  },
  {
    title: "No transcripts saved",
    text: "Your words are used live and then dropped. A saved session keeps totals, charts, your agenda and the watch-list phrases you hit, not a transcript.",
  },
  {
    title: "Audio never reaches our servers",
    text: "Your phone's own browser turns speech into text. OnPoint's servers never receive your audio, and only text is used from then on.",
  },
  {
    title: "The AI sees very little",
    text: "Only your agenda and the last few minutes of text go to the AI, and only for signed-in users. The AI key stays on the server, and logs never record words.",
  },
  {
    title: "Your data is yours",
    text: "Sign in with a verified email. Database rules let each person read only their own saved data.",
  },
  {
    title: "Safe failure",
    text: "If the AI is unavailable the app says so, and the tiles and a manual agenda keep working.",
  },
];

const proveFirst = [
  "A 30-minute real talk runs on iPhone and AirPods without dropped speech.",
  "Pace, reading grade and phrase counts read sensibly on real voices.",
  "Speakers trust and act on agenda ticks.",
  "Early pilots with teachers and education students show who values it and who pays.",
];

const buildNext = [
  "A native app for the App Store.",
  "Production speech and hosted AI services built for scale.",
  "Must-cover agenda items and announcements, listed first if missed.",
  "Time budgets per agenda item, and named, saved agendas.",
  "Suggested habit phrases after a session.",
  "A privacy review for schools that include minors.",
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${light ? "text-amber" : "text-teal"}`}>
      {children}
    </p>
  );
}

export default function OnPointPage() {
  return (
    <>
      {/* Snapshot */}
      <section className="bg-navy text-cream px-4 py-14 sm:py-20" aria-labelledby="onpoint-heading">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-sm text-cream/70">A product from ALLWARD Labs</span>
              <span className="rounded-full bg-amber text-navy text-xs font-semibold px-3 py-1">
                Working product · Pre-launch
              </span>
            </div>
            <Image
              src="/onpoint/logo-lockup-reversed.svg"
              alt="OnPoint"
              width={459}
              height={194}
              priority
              className="h-24 sm:h-28 w-auto -ml-4"
            />
            <p className="mt-2 text-sm font-semibold tracking-widest uppercase text-cream/70">
              Speaking and Teaching Coach
            </p>
            <h1 id="onpoint-heading" className="mt-8 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Live feedback while you speak or teach.
            </h1>
            <p className="mt-6 text-xl text-cream/85 leading-relaxed max-w-xl">
              OnPoint listens through your AirPods and shows your pace, your vocabulary level, your habit phrases and
              your agenda progress as you speak. You fix the talk while you are still giving it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#product"
                className="inline-block bg-teal text-navy px-7 py-4 rounded-xl font-semibold text-lg hover:bg-cream transition-colors"
              >
                Watch the demo
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-cream/40 text-cream px-7 py-4 rounded-xl font-semibold text-lg hover:bg-cream hover:text-navy transition-colors"
              >
                Talk to us
              </a>
            </div>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4 rounded-2xl border border-cream/15 bg-white/5 p-6 text-base">
              <div>
                <dt className="text-sm text-cream/60">Stage</dt>
                <dd className="text-cream">Working product, pre-launch</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Platform</dt>
                <dd className="text-cream">Mobile web app on iPhone now, App Store app planned</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Customers</dt>
                <dd className="text-cream">School districts, universities and individual speakers</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Raise</dt>
                <dd className="text-cream">To be determined. Details on request.</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px]">
            <PhoneFrame>
              <LoopVideo
                src="/onpoint/hero-loop.mp4"
                poster="/onpoint/hero-poster.webp"
                label="A looping clip of the OnPoint live screen: tiles for pace, reading grade, phrase watch list and agenda update as a speaker talks"
              />
            </PhoneFrame>
            <p className="mt-4 text-sm text-cream/60 text-center">The live screen, recorded from the working app.</p>
          </div>
        </div>
      </section>

      <SectionNav />

      {/* Problem */}
      <section id="problem" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="problem-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>The problem</Eyebrow>
          <h2 id="problem-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            Speakers can&apos;t see how they are doing while they speak
          </h2>
          <p className="mt-5 text-lg text-slate max-w-2xl">
            When you are speaking, you are busy speaking. Three things go wrong, and nobody notices until it is too late
            to fix them.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <article key={p.title} className="bg-white rounded-2xl p-7 border border-slate/10">
                <p className="text-3xl font-bold text-teal" aria-hidden="true">{i + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-base text-slate">{p.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-slate max-w-3xl">
            <span className="font-semibold text-navy">Who has it:</span> teachers, presenters, trainers and anyone who
            speaks to a room, including education students who are still learning to teach. These pain points come from
            our own product research. Next we confirm them with real speakers.
          </p>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="scroll-mt-32 sm:scroll-mt-40 bg-white px-4 py-16 sm:py-24" aria-labelledby="product-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>The product</Eyebrow>
          <h2 id="product-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            See a full session in two minutes
          </h2>

          <div className="mt-10 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
            <div className="mx-auto w-full max-w-[300px]">
              <PhoneFrame>
                <video
                  className="block w-full h-auto rounded-[1.75rem] bg-navy"
                  controls
                  playsInline
                  preload="none"
                  poster="/onpoint/demo-poster.webp"
                  aria-label="A two minute walkthrough of an OnPoint session, from setup to summary. The clip has no sound."
                >
                  <source src="/onpoint/demo.mp4" type="video/mp4" />
                </video>
              </PhoneFrame>
            </div>
            <div className="max-w-xl">
              <p className="text-lg text-slate leading-relaxed">
                The walkthrough covers setup, the live screen, the agenda and the summary. It was recorded from the
                working app with a simulated voice, so the numbers are repeatable. It has no sound.
              </p>
              <ul className="mt-6 space-y-4 text-slate">
                <li className="border-l-4 border-teal pl-4"><span className="font-semibold text-navy">Setup in a few taps.</span> Pick what to watch and set your goals.</li>
                <li className="border-l-4 border-teal pl-4"><span className="font-semibold text-navy">Live tiles.</span> Green, yellow or red against your own targets.</li>
                <li className="border-l-4 border-teal pl-4"><span className="font-semibold text-navy">An agenda that ticks itself.</span> The AI checks points off as you cover them.</li>
                <li className="border-l-4 border-teal pl-4"><span className="font-semibold text-navy">A summary when you finish.</span> Pace chart, phrase counts and what was missed.</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-20 text-2xl font-bold text-navy">How it works</h3>
          <ol className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 list-none p-0">
            {steps.map((s) => (
              <li key={s.n}>
                <PhoneShot name={s.shot} alt={s.alt} className="max-w-[240px]" />
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-navy font-bold" aria-hidden="true">
                    {s.n}
                  </span>
                  <span className="text-lg font-bold text-navy">{s.title}</span>
                </div>
                <p className="mt-2 text-base text-slate max-w-[240px]">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center rounded-3xl bg-cream p-8 sm:p-12">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-navy">Clear at a glance, in light and dark</h3>
              <p className="mt-4 text-slate leading-relaxed">
                Tiles turn green, yellow or red against goals you set. Color is never the only signal: every tile also
                shows an icon and a short label, such as &ldquo;On pace&rdquo; or &ldquo;Too fast&rdquo;. The app follows
                your phone&apos;s light or dark setting.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-[600px]">
              <PhoneShot name="live" alt="Live tiles with pace on target, shown in light mode" />
              <PhoneShot name="live-too-fast" alt="Live tiles with the pace tile red and marked too fast" />
              <PhoneShot name="live-dark" alt="Live tiles in dark mode" />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section id="different" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="different-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>What makes it different</Eyebrow>
          <h2 id="different-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            Six choices that shape the product
          </h2>
          <p className="mt-5 text-lg text-slate max-w-2xl">
            Each one follows from how the product is built today. We describe what OnPoint does, not how it compares with
            other products.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((d) => (
              <article key={d.title} className="bg-white rounded-2xl p-7 border border-slate/10">
                <h3 className="text-xl font-bold text-navy">{d.title}</h3>
                <p className="mt-3 text-base text-slate leading-relaxed">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business model */}
      <section id="model" className="scroll-mt-32 sm:scroll-mt-40 bg-white px-4 py-16 sm:py-24" aria-labelledby="model-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Business model</Eyebrow>
          <h2 id="model-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            Three ways to reach speakers
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <article key={c.title} className="bg-cream rounded-2xl p-7 border border-slate/10">
                <h3 className="text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-base text-slate leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-slate max-w-3xl">
            Pricing is not set. We are validating who pays first. The App Store offering needs a native app, which is on
            the roadmap below.
          </p>
        </div>
      </section>

      {/* Status */}
      <section id="status" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="status-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Where we are</Eyebrow>
          <h2 id="status-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            Built and tested, not yet launched
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {status.map((s) => (
              <article key={s.title} className="bg-white rounded-2xl p-7 border border-slate/10">
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-base text-slate leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-slate max-w-3xl">
            From first requirements to this working product took about a week, built with AI assistance. Decisions on
            scope, privacy and providers stayed with the founder. We have no users yet, and we say so on purpose.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="scroll-mt-32 sm:scroll-mt-40 bg-navy text-cream px-4 py-16 sm:py-24" aria-labelledby="trust-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow light>Trust and privacy</Eyebrow>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold text-white max-w-3xl">
            What OnPoint does with your voice
          </h2>
          <p className="mt-5 text-lg text-cream/80 max-w-2xl">
            Every line here was checked against the code.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trust.map((t) => (
              <article key={t.title} className="rounded-2xl border border-cream/15 bg-white/5 p-7">
                <h3 className="text-xl font-bold text-white">{t.title}</h3>
                <p className="mt-3 text-base text-cream/80 leading-relaxed">{t.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-cream/70 max-w-3xl">
            Using OnPoint in schools that include minors needs a privacy review before any district pilot, for example
            under COPPA and FERPA. That review is on our roadmap.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="scroll-mt-32 sm:scroll-mt-40 bg-white px-4 py-16 sm:py-24" aria-labelledby="roadmap-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Roadmap</Eyebrow>
          <h2 id="roadmap-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            What we prove first, then what we build
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <article className="bg-cream rounded-2xl p-8 border border-slate/10">
              <h3 className="text-xl font-bold text-navy">Prove first</h3>
              <ul className="mt-4 space-y-3 text-slate list-disc pl-5">
                {proveFirst.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
            <article className="bg-cream rounded-2xl p-8 border border-slate/10">
              <h3 className="text-xl font-bold text-navy">Build next</h3>
              <ul className="mt-4 space-y-3 text-slate list-disc pl-5">
                {buildNext.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-8 text-slate max-w-3xl">
            Not planned for now: languages other than English, recording while the phone is locked, and vibration alerts.
            No dates are set.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Who is building it</Eyebrow>
          <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            ALLWARD Labs
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-slate leading-relaxed">
            <p>
              ALLWARD Labs builds the accommodations the real world is missing. We start with one person and one real
              problem, then build outward so more people can benefit.
            </p>
            <p>
              OnPoint follows that path. A tool built to help someone who struggles with pace or vocabulary turns out to
              help every speaker, from a first-year teacher to an experienced presenter.
            </p>
            <p>
              <span className="font-semibold text-navy">Joe Nidever, founder.</span> Joe came to this work from
              education, and he has a passion for helping others grow and improve. He later moved into technology, where
              he brings a background in full stack development, AI, and automation, and leads product creation.
            </p>
            <p>
              <Link href="/about" className="font-semibold underline underline-offset-4 decoration-teal text-navy hover:text-teal">
                More about ALLWARD Labs
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* The ask and contact */}
      <section id="contact" className="scroll-mt-32 sm:scroll-mt-40 bg-amber text-navy px-4 py-16 sm:py-24" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3">The ask</p>
          <h2 id="contact-heading" className="text-3xl sm:text-5xl font-bold text-navy max-w-3xl leading-tight">
            Raise details to be determined
          </h2>
          <p className="mt-6 text-xl text-navy max-w-2xl leading-relaxed">
            We would be glad to walk you through the product live and share more. If OnPoint looks interesting, let&apos;s
            talk.
          </p>
          <div className="mt-8">
            {CONTACT_EMAIL ? (
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=OnPoint`}
                className="inline-block bg-navy text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal hover:text-navy transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            ) : (
              <p className="text-lg font-semibold">Contact details on request from whoever sent you this page.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
