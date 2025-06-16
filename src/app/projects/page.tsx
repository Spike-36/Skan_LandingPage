import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="mt-4 space-y-4">
        <li>
          <Link href="/projects/lime-mvp" className="text-blue-600 underline">
            LIME – React Native MVP for spaced rep learning
          </Link>
        </li>
        {/* Add more projects as you go */}
      </ul>
    </div>
  )
}
