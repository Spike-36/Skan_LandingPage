'use client'
import { projects } from "@/lib/projects"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Selected Projects</h1>
      <div className="space-y-6">
        {projects.map((proj) => (
          <div key={proj.slug}>
            <Link href={`/projects/${proj.slug}`}>
              <h2 className="text-xl font-bold text-blue-600 hover:underline">
                {proj.title}
              </h2>
            </Link>
            <p className="text-gray-700">{proj.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
