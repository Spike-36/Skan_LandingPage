import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import VideoBlock from "@/components/VideoBlock";
import FeatureCard from "@/components/FeatureCard";
import BioSection from "@/components/BioSection";

export default function LandingPage() {
  return (
    <main className="bg-offwhite text-charcoal min-h-screen flex flex-col justify-between">
      {/* Hero Section - Full width black background */}
      <section className="bg-black text-white mb-12">
        <div className="max-w-3xl mx-auto w-full px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center py-12">
            <div className="w-full text-center md:text-left space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                More than 25 million women in UK are scared to walk alone.
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                Skån is a simple device to help protect women from abuse, harassment and assault.
              </h1>
              <p className="text-lg">
                Four out of five women felt unsafe walking alone after dark in a park or other open space.
              </p>
              <p className="text-sm opacity-60 leading-snug">
                Office for National Statistics, 2021<br />
                <span className="italic">
                  Perceptions of personal safety and experiences of harassment, Great Britain: 2 to 27 June 2021
                </span>
              </p>
            </div>
          </div>
          <div
            className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/hero-banner.jpg")' }}
          />
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto w-full px-4">
        {/* Feature Cards */}
        <section className="space-y-6 mb-12">
          <FeatureCard title="Preventing incidents requires an effective deterrent." description="" />
          <FeatureCard title="The most powerful deterrent is perpetrators believing they will be caught." description="" />
          <FeatureCard title="Skån captures and secures evidence to identify and convict perpetrators." description="" />
        </section>

        {/* Video */}
        <VideoBlock
          src="/video/SkanPlaceholderVideo-1.0.mp4"
          poster="/images/poster.jpg"
          className="my-12"
        />

        {/* Signup Form */}
        <SignupForm />
      </div>

      {/* Bio Section - Full width background */}
      <div className="bg-gray-100 w-full">
        <BioSection />
      </div>

      {/* Contact */}
      <section className="text-center py-12">
        <p className="text-base">
          Got thoughts or questions?{" "}
          <a
            href="mailto:sarah@project-skan.org"
            className="text-black underline hover:text-olive"
          >
            Get in touch.
          </a>
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}