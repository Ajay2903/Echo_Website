import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../components/LegalShell";
import { SUPPORT_EMAIL } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms you agree to when you use Echo, written in plain language.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Echo",
    description:
      "The terms you agree to when you use Echo, written in plain language.",
    url: "/terms",
  },
};

/* TODO before publishing: confirm the legal entity name, the governing
   jurisdiction, and the effective date with a lawyer. */
const UPDATED = "16 August 2026";

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      updated={UPDATED}
      intro="These are the terms you agree to when you use Echo. They are written to be read, not to be skipped."
    >
      <h2>Agreeing to these terms</h2>
      <p>
        By creating an account or using the Echo Android app (package{" "}
        <code>com.ajaytibre.echo</code>) or this website, you agree to these
        terms. If you do not agree with them, please don&apos;t use Echo.
      </p>

      <h2>Who can use Echo</h2>
      <p>
        You need to be at least 13 years old to use Echo. If you are under the
        age of majority where you live, you need permission from a parent or
        guardian.
      </p>

      <h2>Your account</h2>
      <p>
        You are responsible for keeping access to your account secure, because
        your journal is readable only through it. If you lose access to the
        sign-in method tied to your account, your entries may not be
        recoverable — that is a consequence of the same access rules that keep
        them private.
      </p>

      <h2>What Echo costs</h2>
      <p>
        Echo is currently free to use. If paid features are introduced later,
        anything you can do today will be described clearly before it changes,
        and you will not be charged without agreeing first.
      </p>

      <h2>Reflections have a daily limit</h2>
      <p>
        Generating a reflection costs real money to run, so the number each
        account can generate per day is capped, as is the total Echo generates
        across everyone. These limits live on Echo&apos;s server and may be
        adjusted, up or down, without an app update.
      </p>
      <p>
        Reaching a limit never costs you an entry. Your writing is saved either
        way — only the reflection is held back, and Echo will tell you when that
        is why.
      </p>

      <h2>Your content belongs to you</h2>
      <p>
        Your entries are yours. You keep all rights to what you write and say.
        You grant Echo only the narrow permission needed to run the service —
        storing your entries so you can read them back, and sending the text of
        an entry to Google&apos;s Gemini API, by way of Echo&apos;s own server, to
        generate your reflection. That permission ends when you delete the
        content or your account.
      </p>
      <p>
        If you record an entry by voice, your device&apos;s own speech
        recognition turns it into text first. Echo stores only that text, never
        the audio. The{" "}
        <Link href="/privacy">Privacy Policy</Link> explains what that means for
        your device and its speech service.
      </p>
      <p>
        Echo does not use your entries to train AI models and does not publish,
        share or sell them. See the{" "}
        <Link href="/privacy">Privacy Policy</Link> for the full detail.
      </p>

      <h2>What Echo is not</h2>
      <p>
        Echo is a journaling tool. It is not a medical device, and the
        reflections, stress scores and mood labels it produces are not a
        diagnosis, therapy, or medical, psychological or crisis advice. They are
        a description of what a language model noticed in your words, and they
        can be wrong.
      </p>
      <p>
        If you are struggling, please talk to a qualified professional. If you
        are in immediate danger, contact your local emergency services.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use Echo to break the law or to harm someone else.</li>
        <li>
          Attempt to access another person&apos;s account, entries or data.
        </li>
        <li>
          Probe, disrupt or overload the service, or work around its security
          rules or rate limits.
        </li>
        <li>
          Reverse engineer, resell or redistribute the app except where the law
          gives you that right.
        </li>
      </ul>

      <h2>Availability</h2>
      <p>
        Echo is offered as it is. We work to keep it running, but the service may
        be interrupted for maintenance, may change over time, and depends on
        third-party providers including Google Cloud. Features may be added,
        altered or withdrawn.
      </p>

      <h2>Ending your use</h2>
      <p>
        You can stop using Echo at any time and delete your account from inside
        the app, which permanently removes your entries. Accounts may be
        suspended or removed if these terms are seriously or repeatedly broken.
      </p>

      <h2>Liability</h2>
      <p>
        To the fullest extent permitted by law, Echo is provided without
        warranties of any kind, and Echo is not liable for indirect, incidental
        or consequential losses, or for loss of data, arising from your use of
        the service. Nothing here limits liability that cannot be limited by law.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        These terms may change as Echo develops. Material changes will be noted
        here with an updated date and, where the change matters, surfaced in the
        app. Continuing to use Echo after a change means you accept it.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which Echo
        operates, without regard to conflict-of-law rules.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalShell>
  );
}
