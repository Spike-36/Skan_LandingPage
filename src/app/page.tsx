// src/app/page.tsx
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import VideoBlock from "@/components/VideoBlock";

export default function LandingPage() {
  return (
    <main className="bg-offwhite text-charcoal min-h-screen flex flex-col justify-between">
      {/* Hero Banner */}
      <section className="flex flex-col md:flex-row min-h-screen bg-black text-white">
        {/* Left Text */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md text-center md:text-left space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              One in two women felt unsafe walking alone after dark in a busy public place,
              compared to one in five men.
            </h1>
            <p className="text-lg">
              Four out of five women felt unsafe walking alone after dark in a park or other open space.
            </p>
            <p className="text-sm opacity-60 leading-snug">
              Office for National Statistics, 2021<br />
              <span className="italic">
                Perceptions of personal safety and experiences of harassment,
                Great Britain: 2 to 27 June 2021
              </span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/hero-banner.jpg")' }}
        />
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-medium mb-6 leading-snug">
          Project Skån 1.1
        </h2>

        <p className="text-lg mb-8 leading-relaxed italic">
          Why, in my opinion, so many legal tech projects fail before a single line of code is written.
        </p>

        {/* Video */}
        <VideoBlock
          src="/video/SkanPlaceholderVideo-1.0.mp4"
          poster="/images/poster.jpg"
          className="my-8"
        />

        {/* Intro */}
        <div className="text-left text-base leading-relaxed space-y-4">
          <p>
            I’m a former litigation lawyer now working on the product and technology side of legal innovation...
          </p>
          {/* Extend as needed */}
        </div>

        {/* Article Teaser */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-12 text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-olive text-center">
            Article 1: Want Legal Tech That Works? Start With the Requirements
          </h2>
          <ul className="list-disc list-inside text-base space-y-2 leading-relaxed text-charcoal">
            <li>Why unclear requirements are the root cause of scope creep...</li>
            {/* Extend list */}
          </ul>
        </div>

        {/* Signup Form */}
        <SignupForm />

        {/* Contact */}
        <p className="mt-12 text-base">
          Got thoughts or questions?{" "}
          <a
            href="mailto:hello@agileadvocacy.co.uk"
            className="text-black underline hover:text-olive"
          >
            Get in touch.
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}
