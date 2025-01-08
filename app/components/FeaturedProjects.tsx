import Link from "next/link";
import Image from "next/image";
import { projects } from "../projects/project-data";

export function FeaturedProjects() {
  const featuredProjects = projects
    .filter(project => project.featured)
    .slice(0, 2);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {featuredProjects.map((project) => (
        <Link
          key={project.title}
          href={`/projects?selected=${encodeURIComponent(project.title)}`}
          className="group relative overflow-hidden rounded-lg border dark:border-gray-800"
        >
          {project.image && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-lg">{project.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
              }`}>
                {project.status.replace('-', ' ')}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}