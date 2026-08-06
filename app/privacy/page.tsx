import type { Metadata } from "next";
import { LegalShell } from "../components/LegalShell";
import { SUPPORT_EMAIL } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Echo handles your journal entries: what is stored, who can read it, and how to delete everything.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Echo",
    description:
      "How Echo handles your journal entries: what is stored, who can read it, and how to delete everything.",
    url: "/privacy",
  },
};

/* TODO before publishing: confirm the legal entity name, the governing
   jurisdiction, and the effective date with a lawyer. Google Play requires this
   page to be publicly reachable at a stable URL. */
const UPDATED = "6 August 2026";

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated={UPDATED}
      intro="Echo is a journal. What you write in it is the most private thing you own, so this page says plainly what we collect, what we don't, and what you can remove."
    >
      <h2>The short version</h2>
      <ul>
        <li>Your entries are stored encrypted and are readable only by your account.</li>
        <li>Nobody at Echo reads your journal. Access rules prevent it.</li>
        <li>Your entries are never used to train AI models.</li>
        <li>There are no ads, no third-party trackers, and no data sold to anyone.</li>
        <li>Deleting your account deletes your entries, permanently.</li>
      </ul>

      <h2>Who this covers</h2>
      <p>
        This policy applies to the Echo Android app (package{" "}
        <code>com.ajaytibre.echo</code>) and this website. It describes how
        information is handled when you use them.
      </p>

      <h2>What Echo collects</h2>
      <h3>Your journal content</h3>
      <p>
        The text you write, and the transcript of anything you speak, together
        with the reflection, stress score and mood label Echo generates from it.
        Voice recordings are transcribed on your device or in transit and the
        audio is not retained after transcription.
      </p>
      <h3>Your account</h3>
      <p>
        The email address or sign-in identifier you use to create your account,
        so that your journal can be tied to you and to nobody else.
      </p>
      <h3>Basic technical data</h3>
      <p>
        Crash reports and aggregate diagnostic information used to keep the app
        working. This does not include the contents of your entries.
      </p>

      <h2>What Echo does not collect</h2>
      <ul>
        <li>Contacts, photos, location, or the contents of other apps.</li>
        <li>Advertising identifiers. Echo shows no ads.</li>
        <li>Behavioural profiles for marketing or resale.</li>
      </ul>

      <h2>Where your journal is stored</h2>
      <p>
        Entries are stored in Google Cloud Firestore, encrypted in transit and at
        rest. Every document is written under your user account, and Firestore
        security rules allow read and write access only to the signed-in account
        that owns it. This is a technical restriction, not a promise about
        internal conduct: there is no console, dashboard or support tool through
        which Echo staff can read your entries.
      </p>

      <h2>How your reflection is generated</h2>
      <p>
        To write your daily reflection, the text of that entry is sent to Google
        Gemini through Firebase AI Logic, which returns the sentence, the stress
        score and the mood label. That content is used to produce your reflection
        and for no other purpose. Under the Firebase AI Logic terms, content sent
        through this service is not used to train Google&apos;s models.
      </p>
      <p>
        Only the entry being reflected on is sent. Your journal history is not
        transmitted for this purpose.
      </p>

      <h2>Who your data is shared with</h2>
      <p>
        Echo does not sell or rent your information, and does not share it with
        advertisers or data brokers. Information is processed by the following
        service providers strictly to make the app function:
      </p>
      <ul>
        <li>
          <strong>Google Cloud Firestore</strong> — storage of your entries and
          account record.
        </li>
        <li>
          <strong>Firebase Authentication</strong> — sign-in and account
          identity.
        </li>
        <li>
          <strong>Google Gemini via Firebase AI Logic</strong> — generating your
          daily reflection.
        </li>
      </ul>
      <p>
        Information may also be disclosed if required by law, but Echo cannot
        produce the contents of entries it has no ability to read.
      </p>

      <h2>How long it is kept</h2>
      <p>
        Your entries are kept for as long as your account exists, because a
        journal is only useful if it remembers. Diagnostic and crash data is
        retained for a limited period and then discarded.
      </p>

      <h2>Deleting your data</h2>
      <p>
        You can delete your account from inside the app, under Settings. Deletion
        removes your entries, reflections, scores and account record permanently.
        This cannot be undone, and there is no recovery window. Backups are
        rotated out on a routine schedule after deletion.
      </p>
      <p>
        You may also delete individual entries at any time without deleting your
        account.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        export or erase the personal information held about you, and to object to
        certain processing. You can exercise all of these directly in the app, or
        by writing to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>Children</h2>
      <p>
        Echo is not intended for children under 13, and accounts are not
        knowingly created for them. If you believe a child has created an
        account, contact us and it will be removed.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes in a way that affects how your journal is handled,
        the change will be noted here and, where the change is significant,
        surfaced in the app before it takes effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy, or a request about your data, go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalShell>
  );
}
