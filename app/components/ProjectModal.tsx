import React, { useEffect } from "react";
import Image from "next/image";
import { FaXmark, FaGithub, FaLink } from "react-icons/fa6";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiJavascript } from "react-icons/si";

const techIcons = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  python: SiPython,
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    year: number;
    url: string;
    githubUrl?: string;
    image?: string;
    technologies?: string[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white dark:bg-[#1C1C1C] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-50 flex justify-end p-4 bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <FaXmark className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {project.image && (
          <div className="relative w-full h-48 sm:h-64 -mt-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="p-6 pt-0">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {project.title}
            </h2>
            <span className="text-gray-600 dark:text-gray-400 ml-4">
              {project.year}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>

          {project.technologies && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const Icon = techIcons[tech.toLowerCase()];
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span className="text-sm">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
            >
              <FaLink className="w-4 h-4" />
              Visit Project
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:opacity-90 transition-opacity"
              >
                <FaGithub className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}