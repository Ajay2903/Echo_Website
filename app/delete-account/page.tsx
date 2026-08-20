import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../components/LegalShell";
import { SUPPORT_EMAIL } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your Echo account and everything in it, from inside the app or by email if you no longer have it installed.",
  alternates: { canonical: "/delete-account" },
  openGraph: {
    title: "Delete Your Account — Echo",
    description:
      "How to delete your Echo account and everything in it, from inside the app or by email if you no longer have it installed.",
    url: "/delete-account",
  },
};

/* This page exists to satisfy Google Play's data deletion policy, which
   requires a publicly reachable URL where deletion can be requested without
   the app installed. Keep it at this stable path — it is submitted in the
   Play Console Data safety form, and a broken link there is a policy issue. */
const UPDATED = "16 August 2026";

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete Your Account"
      updated={UPDATED}
      intro="You can remove your Echo account and everything in it at any time. This page explains how to do it from inside the app, and how to request it if you no longer have Echo installed."
    >
      <h2>Deleting from inside the app</h2>
      <p>This is the fastest route, and it happens immediately.</p>
      <ol>
        <li>Open Echo and make sure you are signed in.</li>
        <li>
          Go to <strong>Settings</strong>.
        </li>
        <li>
          Choose <strong>Delete account</strong>.
        </li>
        <li>
          Confirm. You will be asked, optionally, why you are leaving — you can
          skip this.
        </li>
      </ol>
      <p>
        If you signed in a while ago, Echo may ask you to sign in once more
        before it will proceed. That is a deliberate safeguard: it makes sure the
        person deleting a journal is the person who wrote it.
      </p>

      <h2>If you no longer have the app</h2>
      <p>
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the
        subject <strong>Delete my account</strong>.
      </p>
      <p>
        Send it <strong>from the email address your Echo account uses</strong>.
        That address is how the account is identified, and requiring the request
        to come from it is what stops someone else from deleting your journal.
        Requests from any other address cannot be actioned.
      </p>
      <p>
        Requests are handled within 30 days, and usually much sooner. You will
        get a reply confirming when it is done.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>
          Every journal entry — the text, the transcript of anything you spoke,
          and the word counts.
        </li>
        <li>
          Every reflection, stress score and mood label generated from those
          entries.
        </li>
        <li>Your profile record, including your name and email address.</li>
        <li>Your sign-in account itself.</li>
        <li>Any reminders scheduled on your device.</li>
      </ul>
      <p>
        This is permanent. There is no recovery window, no archive and no undo —
        once it is done, Echo has nothing left to restore, including for you.
        Export or copy anything you want to keep before you start.
      </p>

      <h2>What is kept</h2>
      <p>
        If you choose to say why you are leaving, that reason is stored on its
        own, with no name, email address or account identifier attached. It
        cannot be traced back to you or to anything you wrote, and it exists only
        so that Echo can be made better for the people still using it. You can
        skip the question entirely.
      </p>
      <p>
        Nothing else is retained. Routine infrastructure backups are rotated out
        on their normal schedule after deletion.
      </p>

      <h2>Deleting individual entries instead</h2>
      <p>
        If you only want to remove particular entries rather than your whole
        account, you can delete them one at a time inside the app and keep
        everything else.
      </p>

      <h2>Questions</h2>
      <p>
        Anything about deletion, or about what is held on your behalf, goes to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. The{" "}
        <Link href="/privacy">Privacy Policy</Link> covers what Echo stores and
        why.
      </p>
    </LegalShell>
  );
}
