import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4 text-gray-700">{project.summary}</p>
      <ul className="list-disc ml-6 text-gray-700">
        {project.details.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
