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
   page to be publicly reachable at a stable URL.

   Note: the "does not use them to train or improve its models" statement in the
   reflection section holds because the server's GEMINI_API_KEY runs on the paid
   Gemini API tier, where content is not used for product improvement. If that
   key is ever moved to an unbilled project, this claim stops being true and the
   wording must change with it. */
const UPDATED = "16 August 2026";

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
        <li>Voice entries are transcribed to text. Echo never stores the audio.</li>
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
      </p>
      <h3>Your account</h3>
      <p>
        The email address or sign-in identifier you use to create your account,
        so that your journal can be tied to you and to nobody else.
      </p>
      <h3>Basic technical data</h3>
      <p>
        If the app stops unexpectedly, Google Play collects the standard crash
        diagnostics that Android reports for every app. Echo does not include a
        separate analytics or crash-reporting library of its own, and none of
        this contains the contents of your entries.
      </p>
      <p>
        Echo also uses Google Play Integrity to confirm that requests come from a
        genuine, unmodified copy of the app rather than an impostor. This checks
        the app and the device, not you, and is what prevents a modified client
        from reaching Echo&apos;s servers on your behalf.
      </p>

      <h2>What Echo does not collect</h2>
      <ul>
        <li>Contacts, photos, location, or the contents of other apps.</li>
        <li>Advertising identifiers. Echo shows no ads.</li>
        <li>Behavioural profiles for marketing or resale.</li>
      </ul>

      <h2>Microphone and voice entries</h2>
      <p>
        Echo can record a journal entry by voice. The microphone is active only
        while you are recording an entry, and only after you start one.
      </p>
      <p>
        To turn speech into text, Echo uses your device&apos;s built-in speech
        recognition rather than its own. Depending on your device and its
        settings, that recognition may run entirely on the device, or your
        device&apos;s speech service — on most Android phones, Google&apos;s —
        may receive the audio in order to transcribe it, under that
        service&apos;s own privacy policy. This behaviour is controlled by your
        device, not by Echo.
      </p>
      <p>
        Echo never stores audio recordings. Only the resulting text is saved, as
        your entry, and it is treated exactly like anything you typed.
      </p>

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
        When you save an entry, the text of that entry is sent to Echo&apos;s own
        server, which passes it to Google&apos;s Gemini API and returns the
        sentence, the stress score and the mood label. Your entry is never sent
        to Gemini directly from your device, and the key used to reach it is held
        on the server, never in the app.
      </p>
      <p>
        Only the entry being reflected on is sent. Your journal history is not
        transmitted for this purpose, and the text is used to produce your
        reflection and for no other purpose. Echo does not use your entries to
        train any AI model, and under the Gemini API terms Echo operates under,
        Google does not use them to train or improve its models.
      </p>
      <p>
        Echo&apos;s server keeps a count of how many reflections each account has
        generated per day, so that daily limits can be enforced. This is a number
        only — it holds no part of what you wrote.
      </p>

      <h2>Where your data is processed</h2>
      <p>
        Echo&apos;s database and server run on Google Cloud infrastructure
        located in the United States. If you use Echo from another country, your
        information is transferred to and processed there.
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
          <strong>Google Cloud Functions</strong> — Echo&apos;s own server, which
          generates reflections and enforces daily limits.
        </li>
        <li>
          <strong>Google Gemini API</strong> — generating the sentence, stress
          score and mood label for your reflection.
        </li>
        <li>
          <strong>Your device&apos;s speech recognition service</strong> — on
          most Android phones, Google&apos;s — transcribing voice entries, where
          your device performs that step off-device.
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
      <p>
        If you tell us why you are leaving on the way out, that reason is stored
        on its own, with no name, email or account identifier attached to it, and
        cannot be traced back to you or your journal.
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
