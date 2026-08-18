import { Faq, type FaqEntry } from "./components/Faq";
import { PLAY_STORE_URL } from "./components/PlayBadge";
import { Orb, Ripple } from "./components/Orb";
import { PhoneFrame } from "./components/PhoneFrame";
import { PlayBadge } from "./components/PlayBadge";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import {
  EyeOffIcon,
  LockIcon,
  NoSignalIcon,
  SparkOffIcon,
  TrashIcon,
} from "./components/icons";

const STEPS = [
  {
    title: "Speak or write.",
    body: "However the day wants to come out. Voice notes transcribe as you talk, so you can say the thing before you've worked out how to phrase it.",
    alt: "Echo's entry screen, ready for a voice note or written entry.",
    ripple: true,
  },
  {
    title: "Echo reflects.",
    body: "One sentence naming what you're actually feeling — no advice, no scores to chase. A stress score and a mood label sit alongside it.",
    alt: "Echo's reflection card, showing one sentence with a stress score of 60 and a Calm Focus mood label.",
    ripple: false,
  },
  {
    title: "Watch the pattern.",
    body: "Your stress, your streak, your month — quietly assembled. A trend line appears once there's enough to say something honest.",
    alt: "Echo's seven-day stress trend and streak, showing two days recorded this week.",
    ripple: false,
  },
];

const PRINCIPLES = [
  {
    title: "One entry per day.",
    body: "Voice and writing are two ways into the same page. There's nothing to fill in twice.",
  },
  {
    title: "Reflection, not advice.",
    body: "Echo names what it notices. It never tells you what to do.",
  },
  {
    title: "No guilt.",
    body: "Miss a day and nothing breaks. There's no streak to defend.",
  },
];

const TRUST = [
  {
    icon: <LockIcon />,
    title: "Encrypted and private.",
    body: "Entries are stored encrypted in Google Cloud, readable only by your account.",
  },
  {
    icon: <SparkOffIcon />,
    title: "Never used to train AI.",
    body: "Your words are processed to write your reflection, and nothing else.",
  },
  {
    icon: <EyeOffIcon />,
    title: "Nobody reads your journal.",
    body: "Not us, not anyone. Access rules make it technically impossible.",
  },
  {
    icon: <TrashIcon />,
    title: "Yours to delete.",
    body: "Remove your account and everything goes with it, permanently, from inside the app.",
  },
  {
    icon: <NoSignalIcon />,
    title: "No ads, no tracking, no feed.",
    body: "Echo has nothing to sell and nowhere to share.",
  },
];

const FAQ: FaqEntry[] = [
  {
    q: "Is my journal private?",
    a: "Yes. Entries are stored encrypted in Google Cloud Firestore under your account, and access rules mean only your account can read them.",
  },
  {
    q: "Do you read my entries?",
    a: "No. We have no way to. The access rules that protect your entries apply to us the same way they apply to everyone else.",
  },
  {
    q: "Is Echo free?",
    a: "Yes. Echo is free to use, with no ads and nothing to unlock.",
  },
  {
    q: "What if I miss a day?",
    a: "Nothing happens. Your history stays as it is and you pick up whenever you come back. There's no penalty and no reminder to feel bad about.",
  },
  {
    q: "Can I journal by voice?",
    a: "Yes. Speak your entry and it transcribes as you talk. Some days want to be spoken, some want to be written — either one counts.",
  },
  {
    q: "How is this different from a notes app?",
    a: "A notes app keeps what you wrote. Echo reads it back and tells you what you were feeling, then builds that into a picture of your week.",
  },
  {
    q: "Can I delete everything?",
    a: "Yes. Delete your account from inside the app and every entry, reflection and score goes with it, permanently.",
  },
  {
    q: "Is it on iPhone?",
    a: "Not yet. Echo is on Android today and an iOS version is in progress.",
  },
];

/** Structured data. No ratings or review counts — there aren't any yet. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Echo",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      description:
        "An AI journal that reflects your emotional state back in one sentence, with a stress score and mood label. One entry a day, by voice or by writing.",
      url: PLAY_STORE_URL,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((entry) => ({
        "@type": "Question",
        name: entry.q,
        acceptedAnswer: { "@type": "Answer", text: entry.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Content is authored above, not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="hero" id="top">
          <div className="hero__wash" aria-hidden="true" />

          <div className="container hero__grid">
            <div className="hero__copy">
              <p
                className="eyebrow rise"
                style={{ "--rise-delay": "80ms" } as React.CSSProperties}
              >
                Echo
              </p>

              <h1
                className="display rise"
                style={{ "--rise-delay": "230ms" } as React.CSSProperties}
              >
                Some days want to be spoken.
              </h1>

              <p
                className="lede hero__lede rise"
                style={{ "--rise-delay": "380ms" } as React.CSSProperties}
              >
                Echo listens — then tells you what you were feeling. One entry a
                day, by voice or by writing.
              </p>

              <div
                className="hero__cta rise"
                style={{ "--rise-delay": "530ms" } as React.CSSProperties}
              >
                <PlayBadge />
                <p className="hero__trust">Free. Private. No ads.</p>
              </div>
            </div>

            <div className="hero__visual">
              <Orb className="hero__orb" />
              <PhoneFrame
                className="hero__phone rise-soft"
                alt="Echo's home screen: a reflection reading “You seem to be processing something meaningful — keep going,” a stress score of 60, a mood of Calm Focus, and a two-day streak."
                priority
              />
            </div>
          </div>

          <div
            id="hero-sentinel"
            aria-hidden="true"
            style={{ position: "absolute", bottom: 0, height: 1, width: "100%" }}
          />
        </section>

        <hr className="rule" />

        {/* ── How it works ─────────────────────────────────────────── */}
        <section className="section" id="how-it-works">
          <div className="container">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2 className="heading">
                Three things happen, and then it leaves you alone.
              </h2>
            </Reveal>

            <div style={{ marginTop: 24 }}>
              {STEPS.map((step, i) => (
                <Reveal
                  key={step.title}
                  as="article"
                  className={`step${i % 2 === 1 ? " step--flip" : ""}`}
                >
                  <div>
                    <span className="step__index" aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className="heading-sm">{step.title}</h3>
                    <p className="body step__body">{step.body}</p>
                  </div>

                  <div className="step__visual">
                    {step.ripple && <Ripple className="step__ripple" />}
                    <PhoneFrame className="step__phone" alt={step.alt} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Why Echo ─────────────────────────────────────────────── */}
        <section className="section" id="why-echo">
          <div className="container-narrow">
            <Reveal>
              <p className="eyebrow">Why Echo</p>
              <h2 className="heading">A journal that answers.</h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="lede" style={{ marginTop: 28, maxWidth: "none" }}>
                Most journaling apps are a blank text box. You write into it, and
                it gives you nothing back. The rest are dashboards that reduce
                your inner life to a chart you&apos;re expected to improve.
              </p>
              <p className="body" style={{ marginTop: 20 }}>
                Echo takes a third path. You say or write one thing about your
                day, and it answers — one sentence, in plain language, naming
                what it heard. The numbers are there if you want them, but they
                sit underneath the sentence, not in place of it.
              </p>
              <p className="quote" style={{ marginTop: 34, fontSize: "1.35rem" }}>
                “One honest word is enough to begin.”
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="principles">
                {PRINCIPLES.map((p) => (
                  <div className="principle" key={p.title}>
                    <h3 className="principle__title">{p.title}</h3>
                    <p className="body">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Founder note ─────────────────────────────────────────── */}
        <section className="section">
          <div className="container-narrow">
            <Reveal>
              <p className="eyebrow">A note</p>
              <h2 className="heading">Why we built Echo.</h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="card note" style={{ marginTop: 34 }}>
                {/* TODO — founder to replace the copy below with their own
                    80–120 words, first person, and remove this badge. */}
                <span className="note__placeholder">Placeholder copy</span>

                <p className="note__body">
                  I kept starting journals and stopping. The blank page always
                  asked me to know what I felt before I could write it down, and
                  most days I didn&apos;t. What I wanted was something that would
                  listen while I talked it out, then say the thing back to me
                  plainly — not advice, not a score to improve, just a sentence
                  that made the day legible. That app didn&apos;t exist, so I
                  spent a year building it. Echo is small on purpose. One entry,
                  one answer, and then it gets out of your way.
                </p>

                <p className="note__sign">
                  Ajay
                  <span className="note__role">Founder, Echo</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Trust ────────────────────────────────────────────────── */}
        <section className="section" id="privacy">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Privacy &amp; safety</p>
              <h2 className="heading">Your journal stays yours.</h2>
              <p className="lede" style={{ marginTop: 22 }}>
                What you write is the most private thing you own. Here is exactly
                what happens to it.
              </p>
            </Reveal>

            <div className="trust-grid">
              {TRUST.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="article"
                  delay={i * 90}
                  className="card card-pad"
                >
                  <span className="trust-card__icon">{item.icon}</span>
                  <h3 className="trust-card__title">{item.title}</h3>
                  <p className="body">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section" id="questions">
          <div className="container-narrow">
            <Reveal>
              <p className="eyebrow">Questions</p>
              <h2 className="heading">Answered plainly.</h2>
            </Reveal>

            <Reveal delay={100}>
              <Faq entries={FAQ} />
            </Reveal>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Closing ──────────────────────────────────────────────── */}
        <section className="section">
          <div className="container-narrow closing">
            <Reveal>
              <Orb className="closing-orb" />
              <h2 className="heading" style={{ marginTop: 40 }}>
                Some days want to be spoken. Some want to be written. Every day
                deserves to be heard.
              </h2>
              <div className="closing__cta">
                <PlayBadge />
                <p className="hero__trust">Free. Private. No ads.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
