// src/components/BioSection.tsx
import Image from 'next/image'

export default function BioSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-charcoal">
        {/* Image - reduced to ~66% */}
        <div className="w-full md:w-auto md:flex-shrink-0">
          <Image
            src="/images/sarah.jpg"
            alt="Sarah"
            width={213}    // 320 * 0.66
            height={320}   // 480 * 0.66
            className="rounded-md shadow-lg object-cover"
            style={{ width: '213px', height: 'auto' }}
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-left space-y-4">
          <h2 className="text-xl font-semibold">Sarah Hamilton</h2>
          <p className="text-base leading-relaxed">
            Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces. Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces. Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces. Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces.
          </p>
           <p className="text-base leading-relaxed">
            Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces. Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces. Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces. Sarah is massive trouble. She’s now focused on eating lots of Ramen — especially in public spaces.
          </p>
        </div>
      </div>
    </section>
  )
}
