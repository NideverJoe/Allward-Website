import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlagsShot } from "@/components/flags/FlagsShot";
import SectionNav from "@/components/onpoint/SectionNav";

const TITLE = "Flags: Check dealbreakers, in person | ALLWARD Labs";
const DESCRIPTION =
  "Flags is a working product from ALLWARD Labs. Two people on a date answer a private interview, scan a code together and see four colors. Details stay private unless both agree.";

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
  { title: "Awkward to ask", text: "Nobody wants to open a first date with a list of questions." },
  { title: "Risky to share", text: "Reciting your history to a near stranger feels exposed, so many people hold back." },
  { title: "Costly to learn late", text: "A dealbreaker found months in costs both people time and goodwill." },
];

const steps = [
  {
    n: "1",
    title: "Answer privately",
    text: "Each person answers 17 questions about themselves and 15 about their dealbreakers, on their own phone. A quick setup covers only the factual questions.",
    shot: "interview-open",
    alt: "The interview screen: an open question asking about a real argument with a partner, with a text box to answer in.",
  },
  {
    n: "2",
    title: "Scan in person",
    text: "One phone shows a QR code. The other scans it or types the code. Codes last two minutes.",
    shot: "show-code",
    alt: "A phone screen showing a QR code and a short code for the other person to scan or type.",
  },
  {
    n: "3",
    title: "Rules plus AI",
    text: "Rules score the factual answers. A language model reads the open-ended ones. Neither person sees the other's answers.",
    shot: "comparing",
    alt: "A comparing screen with a spinner and a label reading AI-Powered Analysis In Progress.",
  },
  {
    n: "4",
    title: "Reveal together",
    text: "Nothing appears until both people tap Ready to reveal. Either can back out, and the other only sees that the session ended.",
    shot: "confirm-partner-ready",
    alt: "A screen reading Your results are ready, with a Ready to reveal button and an option to end the session.",
  },
];

const states = [
  { color: "#d64550", label: "Red.", text: "A stated dealbreaker conflicts here." },
  { color: "#e8a617", label: "Yellow.", text: "Worth talking about. Never an automatic dealbreaker." },
  { color: "#2a9163", label: "Green.", text: "No conflict found." },
  { color: "", label: "No data.", text: "One side skipped that category, so there is nothing to compare." },
];

const differences = [
  {
    title: "Both people must agree",
    text: "Nothing beyond the four colors is shown unless both people say yes. Asking is optional, and a no looks the same as “still thinking.”",
  },
  {
    title: "One flag at a time",
    text: "A yes shares only the two answers behind a single flag. The other categories stay closed.",
  },
  {
    title: "Built for in person",
    text: "You need the other person's phone to pair. Codes last two minutes, and results last ten minutes after both people reveal.",
  },
  {
    title: "Labels, not scores",
    text: "No blended score, no ranking, no verdict. Yellow means worth a conversation.",
  },
  {
    title: "Not a dating app",
    text: "There are no profiles to browse, no matching and no messaging. Flags is used during a date, not to find one.",
  },
  {
    title: "An AI that can only raise a flag",
    text: "A language model reads the open-ended answers and returns one label per category. It never returns the text, and it cannot soften what the rules found. The model and prompt are settings, so they can change without changing the app.",
  },
];

const built = [
  "The interview, 32 questions, resumable, with a quick setup",
  "QR pairing with short-lived codes",
  "Scoring by category from a rule table that can be retuned",
  "The AI pass over open-ended answers",
  "A mutual confirm step before any reveal",
  "The ask, approve or decline flow for one flag",
  "A ten minute timer that either person can end early",
  "Encrypted storage and a live web app",
  "An Android prototype from the same code, run on an emulator",
];

const notYet = [
  "Real users on real dates",
  "Rate limiting on sign-up",
  "Google sign-in and text message invites",
  "An iOS build. The project is set up but has not been built.",
  "A production domain",
];

const trust = [
  {
    title: "Encrypted before storage",
    text: "Answers, names and the contents of a session are encrypted by the server before they are written. The key is not kept in the database.",
  },
  { title: "Hashed identifiers", text: "Emails and login tokens are stored only as hashes, and so are passwords." },
  { title: "Closed database", text: "Direct public access to the stored data is blocked. Only the server can read it." },
  {
    title: "Short-lived results",
    text: "Results and anything shared stop being available ten minutes after both people reveal. Expired data is purged on a schedule.",
  },
  {
    title: "Both agree, or nothing",
    text: "Nothing beyond the four colors is shown unless both people agree. A person can back out before the reveal and end the session at any time.",
  },
  {
    title: "No scores, no matching",
    text: "There is no blended score, ranking, profile browsing or messaging, so there is less to leak and less to misuse.",
  },
];

const limits = [
  "Profile answers are stored, encrypted, so people do not repeat the interview. Only scan sessions are short-lived.",
  "Open-ended answers are decrypted on the server for the moment they are analyzed, and passed to the model.",
  "Someone who held both the database and the encryption key could read the data.",
  "Sign-up has no rate limiting yet, and no independent security review has been done.",
];

const proveFirst = [
  "Do people complete the interview honestly?",
  "Will they scan live on a date?",
  "Is the quick setup done in 5 to 10 minutes?",
  "Do people read red, yellow and green correctly?",
  "Do they trust the mutual opt-in?",
  "Does yellow start conversations, not fear?",
];

const buildNext = [
  "Text message invites through a texting provider",
  "Production hosting on a custom domain",
  "Google sign-in",
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${light ? "text-amber" : "text-[#0e6b61]"}`}>
      {children}
    </p>
  );
}

function TextAlt({ id, children, light = false }: { id: string; children: React.ReactNode; light?: boolean }) {
  return (
    <details className={`mt-3 text-sm ${light ? "text-cream/70" : "text-slate"}`}>
      <summary className={`cursor-pointer font-semibold ${light ? "text-amber" : "text-[#0e6b61]"}`}>
        Text description of this clip
      </summary>
      <p id={id} className="mt-2 leading-relaxed">
        {children}
      </p>
    </details>
  );
}

export default function FlagsPage() {
  return (
    <>
      {/* Snapshot */}
      <section className="bg-navy text-cream px-4 py-14 sm:py-20" aria-labelledby="flags-heading">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-sm text-cream/70">A product from ALLWARD Labs</span>
              <span className="rounded-full bg-amber text-navy text-xs font-semibold px-3 py-1">
                Working product · Pre-launch
              </span>
            </div>
            <h1 id="flags-heading" className="flex items-center gap-4 text-6xl sm:text-7xl font-bold text-white leading-none">
              <span className="flex gap-2" aria-hidden="true">
                <span className="h-5 w-5 rounded-full bg-[#d64550]" />
                <span className="h-5 w-5 rounded-full bg-[#e8a617]" />
                <span className="h-5 w-5 rounded-full bg-[#2a9163]" />
              </span>
              Flags
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl font-bold text-amber">Check dealbreakers, in person.</p>
            <p className="mt-6 text-xl text-cream/85 leading-relaxed max-w-xl">
              Two people on a date answer a private interview, then scan a code together. Both see the same four colors,
              red, yellow or green, for ten minutes. Anything more is shared only if both people agree.
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
                Get in touch
              </a>
            </div>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4 rounded-2xl border border-cream/15 bg-white/5 p-6 text-base">
              <div>
                <dt className="text-sm text-cream/60">Stage</dt>
                <dd className="text-cream">Working product. Not yet tested on real dates.</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Platform</dt>
                <dd className="text-cream">Mobile web app, in any phone browser</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Who it is for</dt>
                <dd className="text-cream">Two people on a date. Not yet tested with real users.</dd>
              </div>
              <div>
                <dt className="text-sm text-cream/60">Raise</dt>
                <dd className="text-cream">To be determined. Details on request.</dd>
              </div>
            </dl>
          </div>

          <figure className="w-full">
            <video
              className="block w-full aspect-video rounded-2xl bg-navy shadow-xl shadow-navy/25 ring-2 ring-slate/50"
              controls
              playsInline
              preload="none"
              poster="/flags/poster-hero.webp"
              aria-describedby="hero-alt"
            >
              <source src="/flags/hero-reveal.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-4 text-sm text-cream/60">
              12 seconds, no sound. Recorded from the working app with two demo accounts, Alex and Sam.
            </figcaption>
            <TextAlt id="hero-alt" light>
              Two phones sit side by side, one for Alex and one for Sam. Both show the same results screen: two yellow
              cards marked &ldquo;Worth talking about,&rdquo; one red card marked &ldquo;A stated dealbreaker conflicts
              here,&rdquo; and one green card. The screens scroll through all four cards. No answers are shown, only the
              colors.
            </TextAlt>
          </figure>
        </div>
      </section>

      <SectionNav />

      {/* Problem */}
      <section id="problem" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="problem-heading">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <h2 id="problem-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
              The conversations that matter most happen too late
            </h2>
            <p className="mt-5 text-lg text-slate max-w-2xl">
              Kids, exes, drinking, faith. The topics that decide the most are the hardest to raise on a date.
            </p>
            <div className="mt-8 grid gap-4">
              {problems.map((p) => (
                <article key={p.title} className="bg-white rounded-2xl p-6 border border-slate/10">
                  <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-base text-slate">{p.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-slate max-w-3xl">
              <span className="font-semibold text-navy">What is validated:</span> nothing yet. These points are our
              starting belief. We have not tested them with real users, and testing them is the first goal on the
              roadmap.
            </p>
          </div>
          <figure>
            <Image
              src="/flags/problem.webp"
              alt="Illustration of two people at a café table, each with a thought bubble of unspoken topics such as marriage, children and drinking."
              width={1280}
              height={720}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="block w-full h-auto rounded-2xl shadow-xl shadow-navy/15"
            />
            <figcaption className="mt-3 text-sm text-slate">Illustration from our explainer animation.</figcaption>
          </figure>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="scroll-mt-32 sm:scroll-mt-40 bg-white px-4 py-16 sm:py-24" aria-labelledby="product-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>The product</Eyebrow>
          <h2 id="product-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            See it work
          </h2>
          <p className="mt-5 text-lg text-slate max-w-2xl">
            Flags is a mobile web app. It is not a dating app: there is no matching, browsing or messaging.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <figure>
              <video
                className="block w-full aspect-video rounded-2xl bg-navy shadow-xl shadow-navy/20"
                controls
                playsInline
                preload="none"
                poster="/flags/poster-approval.webp"
                aria-describedby="approval-alt"
              >
                <source src="/flags/approval-flow.mp4" type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-slate">
                <span className="font-semibold text-navy">Recorded from the working app.</span> About one minute, no
                sound. Demo accounts Alex and Sam.
              </figcaption>
              <TextAlt id="approval-alt">
                Alex taps &ldquo;Ask them to share more about this&rdquo; on the red card. Sam&apos;s phone shows what
                approving means: Alex would see only the answers behind this flag. In the first take Sam taps &ldquo;Not
                now,&rdquo; and Alex&apos;s phone does not change. In the second take Sam taps &ldquo;Share,&rdquo; and
                Alex sees only the two answers behind that one flag. Every other card stays closed. Either person can
                then end the session, and the other phone shows that it ended.
              </TextAlt>
            </figure>
            <figure>
              <video
                className="block w-full aspect-video rounded-2xl bg-navy shadow-xl shadow-navy/20"
                controls
                playsInline
                preload="none"
                poster="/flags/poster-explainer.webp"
                aria-describedby="explainer-alt"
              >
                <source src="/flags/explainer.mp4" type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-slate">
                <span className="font-semibold text-navy">Animation.</span> 40 seconds, no sound. Not a recording of the
                app.
              </figcaption>
              <TextAlt id="explainer-alt">
                An animated explainer in four short scenes. Two people on a date both hold back questions. Each answers a
                private survey on their own phone. One shows a QR code and the other scans it. Both then see four colors
                and talk about what matters.
              </TextAlt>
            </figure>
          </div>

          <h3 className="mt-20 text-2xl font-bold text-navy">How it works</h3>
          <ol className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 list-none p-0">
            {steps.map((s) => (
              <li key={s.n}>
                <FlagsShot name={s.shot} alt={s.alt} crop className="max-w-[240px]" />
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
              <h3 className="text-2xl font-bold text-navy">What people see</h3>
              <p className="mt-4 text-slate leading-relaxed">
                Four categories: relationship history, family and kids, lifestyle, and core values. Each shows one state.
                Both phones show the same cards.
              </p>
              <ul className="mt-6 space-y-3 list-none p-0">
                {states.map((s) => (
                  <li key={s.label} className="flex items-start gap-3 text-slate">
                    <span
                      className="mt-1.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-navy"
                      style={
                        s.color
                          ? { backgroundColor: s.color }
                          : { backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 3px,#ddd 3px,#ddd 5px)" }
                      }
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-semibold text-navy">{s.label}</span> {s.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate">
                There is no blended score and no ranking. The state is always spelled out in words, not only color.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[260px]">
              <FlagsShot
                name="results"
                alt="The results screen: two yellow cards, a red lifestyle card and a green core values card, with a ten minute countdown at the top."
              />
              <p className="mt-3 text-sm text-slate text-center">The results screen, ten minutes on the clock.</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 max-w-2xl mx-auto items-start">
            <figure>
              <FlagsShot
                name="consent-request"
                alt="A card asking Sam whether to share more about the red flag, with the text that approving shows only the answers behind this flag and declining tells them nothing, and buttons Share and Not now."
              />
              <figcaption className="mt-3 text-sm text-slate text-center">Sam is asked, and can say no without a trace.</figcaption>
            </figure>
            <figure>
              <FlagsShot
                name="why-flag"
                alt="A sheet titled Why this flag showing two lines: what you said about smoking and what they said."
              />
              <figcaption className="mt-3 text-sm text-slate text-center">After a yes, only the two answers behind that one flag.</figcaption>
            </figure>
          </div>
          <p className="mt-6 text-sm text-slate text-center mx-auto">
            Screens are from the working app with demo accounts. The people and answers are simulated.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section id="different" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="different-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>What makes it different</Eyebrow>
          <h2 id="different-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            Consent, safety and security come first
          </h2>
          <p className="mt-5 text-lg text-slate max-w-2xl">
            Each one follows from how the product is built today. We describe what Flags does, not how it compares with
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
            Not set yet
          </h2>
          <p className="mt-5 text-lg text-slate max-w-2xl">
            Pricing is not set, and how Flags will make money is not decided. The current version has no paid features.
          </p>
        </div>
      </section>

      {/* Status */}
      <section id="status" className="scroll-mt-32 sm:scroll-mt-40 bg-cream px-4 py-16 sm:py-24" aria-labelledby="status-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Where we are</Eyebrow>
          <h2 id="status-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            What is built, what is tested, what is not
          </h2>
          <p className="mt-5 text-slate max-w-3xl">
            As of 2 November 2026. The first working version of the code was committed on 23 October 2026. It has not yet
            been tested on real dates.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl p-7 border border-slate/10">
              <h3 className="text-xl font-bold text-navy">Built</h3>
              <ul className="mt-4 space-y-2 text-slate list-disc pl-5">
                {built.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
            <article className="bg-white rounded-2xl p-7 border border-slate/10">
              <h3 className="text-xl font-bold text-navy">Tested</h3>
              <ul className="mt-4 space-y-2 text-slate list-disc pl-5">
                <li>7 automated tests for the encryption code are in the repository</li>
                <li>
                  The pairing, consent and expiry flows were run end to end by script and by hand while building. Those
                  scripts are not yet part of the repository.
                </li>
              </ul>
              <p className="mt-4 text-slate">Not tested: real users, load, or an independent security review.</p>
            </article>
            <article className="bg-white rounded-2xl p-7 border border-slate/10">
              <h3 className="text-xl font-bold text-navy">Not yet</h3>
              <ul className="mt-4 space-y-2 text-slate list-disc pl-5">
                {notYet.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="scroll-mt-32 sm:scroll-mt-40 bg-navy text-cream px-4 py-16 sm:py-24" aria-labelledby="trust-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow light>Trust and privacy</Eyebrow>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold text-white max-w-3xl">
            Flags handles sensitive answers, so it is built to hold little
          </h2>
          <p className="mt-5 text-lg text-cream/80 max-w-2xl">Every line here was checked against the code.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trust.map((t) => (
              <article key={t.title} className="rounded-2xl border border-cream/15 bg-white/5 p-7">
                <h3 className="text-xl font-bold text-white">{t.title}</h3>
                <p className="mt-3 text-base text-cream/80 leading-relaxed">{t.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border-2 border-dashed border-cream/30 p-7">
            <h3 className="text-xl font-bold text-white">Honest limits</h3>
            <ul className="mt-4 space-y-2 text-cream/80 list-disc pl-5">
              {limits.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="scroll-mt-32 sm:scroll-mt-40 bg-white px-4 py-16 sm:py-24" aria-labelledby="roadmap-heading">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>Roadmap</Eyebrow>
          <h2 id="roadmap-heading" className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl">
            Prove it works on real dates
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
            Not planned for now: matching, messaging, and health or identity checks. No dates are set.
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
            We would be glad to walk you through Flags live and share more. If it looks interesting, let&apos;s talk.
          </p>
          <div className="mt-8">
            {CONTACT_EMAIL ? (
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Flags`}
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
