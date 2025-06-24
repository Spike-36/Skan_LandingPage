import Hero from "@/components/Hero"
import FeatureCard from "@/components/FeatureCard"
import SignupForm from "@/components/SignupForm"

const features = [
  {
    title: "Design Thinking for Law",
    description: "Learn how legal services can be redesigned for better accessibility and user experience.",
  },
  {
    title: "Education & Workshops",
    description: "Join interactive sessions on legal design for students, lawyers, and innovators.",
  },
  {
    title: "Project Spotlights",
    description: "Explore real-world prototypes and tools making a difference in legal systems.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="max-w-4xl mx-auto py-16 px-4 grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </section>
      <SignupForm />
    </>
  )
}
