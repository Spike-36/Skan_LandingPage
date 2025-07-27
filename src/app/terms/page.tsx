// app/terms/page.tsx
export const metadata = {
  title: 'Terms of Use – Project Skån',
  description: 'The terms and conditions for using this website.',
}

export default function TermsPage() {
  return (
    <main className="bg-white text-charcoal px-6 py-12 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Terms of Use – Project Skån</h1>
      <p className="text-sm text-gray-500">Last updated: 27 July 2025</p>

      <section>
        <h2 className="text-xl font-semibold mb-2">About this site</h2>
        <p>
          Project Skån is a UK-based initiative developing tools to help women feel and stay safer in public spaces.
          This website provides information about the project, including articles, videos, and updates.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Acceptable use</h2>
        <p>
          By using this website, you agree not to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Misuse, disrupt, or try to interfere with the site or its content</li>
          <li>Upload harmful or unlawful material</li>
          <li>Copy or reuse our content for commercial purposes without permission</li>
          <li>Attempt to access restricted parts of the site or reverse-engineer any part of it</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Intellectual property</h2>
        <p>
          All content on this site — including text, images, video, and design — is protected by copyright.
          You may not reproduce or use this content without written permission from the site owner.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">No guarantees</h2>
        <p>
          We do our best to keep the information on this website accurate and up to date.
          However, we can’t guarantee that everything will always be correct, complete, or available.
        </p>
        <p className="mt-2">
          Project Skån does not accept responsibility for any loss, damage, or inconvenience arising from the use of this website or reliance on its content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Changes to these terms</h2>
        <p>
          We may update these terms occasionally. Any changes will be posted on this page with an updated date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact and ownership</h2>
        <p>
          Project Skån is operated by Sarah Hamilton as an individual, based in the UK.<br />
          For any questions, contact: <a href="mailto:sarah@project-skan.org" className="underline text-olive">sarah@project-skan.org</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales.
        </p>
      </section>
    </main>
  )
}
