// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
        Making Legal Services More Human-Centered
      </h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Explore design-driven approaches to improving access to justice and transforming the legal experience.
      </p>
      <div className="mt-6">
        <a
          href="#signup"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Join the movement
        </a>
      </div>
    </section>
  )
}
