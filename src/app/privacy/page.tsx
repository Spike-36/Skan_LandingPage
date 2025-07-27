// app/privacy/page.tsx
export const metadata = {
  title: 'Privacy Policy – Project Skån',
  description: 'How we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-white text-charcoal px-6 py-12 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy – Project Skån</h1>
      <p className="text-sm text-gray-500">Last updated: 27 July 2025</p>

      <section>
        <h2 className="text-xl font-semibold mb-2">What we collect</h2>
        <p>
          When you fill out a form on our website, we may collect:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your message or enquiry</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Why we collect it</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Send you the resources or updates you’ve requested</li>
          <li>Occasionally follow up with relevant news or updates about Project Skån</li>
          <li>Respond to any messages or enquiries you’ve submitted</li>
        </ul>
        <p className="mt-2">We do <strong>not</strong> sell, rent, or share your personal information with third parties.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Analytics and tracking</h2>
        <p>
          We use basic analytics tools (such as Google Analytics) to understand how people use our website. These tools collect anonymised data and do <strong>not</strong> track or identify you personally.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your rights</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Ask us to correct or delete your data</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p className="mt-2">
          To do any of the above, email us at <a href="mailto:sarah@project-skan.org" className="underline text-olive">sarah@project-skan.org</a>. Every email we send includes an unsubscribe link.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">How we store your data</h2>
        <p>
          We store your data securely and only for as long as necessary to provide the services you've requested.
          We do <strong>not</strong> use third-party platforms (like Formspree or Airtable) to store personal data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Who we are</h2>
        <p>
          Project Skån is operated by Sarah Hamilton as an individual, based in the UK.<br />
          Contact: <a href="mailto:sarah@project-skan.org" className="underline text-olive">sarah@project-skan.org</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Updates to this policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted here.
        </p>
      </section>
    </main>
  )
}
