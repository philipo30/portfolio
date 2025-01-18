import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./config";
import { FaGithub, FaDiscord } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiJavascript } from "react-icons/si";
import { FeaturedProjects } from "app/components/FeaturedProjects";
import { PageTransition } from "app/components/PageTransition";

const TechStack = () => {
  const technologies = [
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiPython, name: "Python" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 my-8">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center group">
          <tech.icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <PageTransition>
      <section>
        <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
          <div className="flex items-center gap-4 sm:sticky sm:top-4">
            <Image
              src="/profile.png"
              alt="Profile"
              width={150}
              height={150}
              priority
              className="rounded-full border-2 border-gray-200 dark:border-gray-800 transition-transform hover:scale-105"
            />
            <div className="flex flex-col gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href={socialLinks.email}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <TbMailFilled size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-gray-700 dark:text-gray-200 mb-4 text-lg">
              Fullstack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I like to develop full-stack and discord bots and drink coffee.
            </p>

            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Tech Stack</h3>
            <TechStack />

            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Featured Projects</h3>
            <FeaturedProjects />
            
            <div className="mt-8">
              <Link 
                href="/projects"
                className="inline-block px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
