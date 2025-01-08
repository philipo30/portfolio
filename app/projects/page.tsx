"use client";

import React, { useState, useMemo } from "react";
import { projects } from "./project-data";
import { ProjectModal } from "app/components/ProjectModal";
import { PageTransition } from "app/components/PageTransition";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const categories = useMemo(() => 
    ['all', ...new Set(projects.flatMap(p => p.category))],
    []
  );

  const filteredProjects = projects.filter(project => {
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || project.category.includes(categoryFilter);
    return matchesStatus && matchesCategory;
  });

  const statuses = ['all', 'completed', 'in-progress', 'maintained'];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed':
        return 'bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400';
      case 'in-progress':
        return 'bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400';
      case 'maintained':
        return 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400';
      default:
        return 'bg-gray-500/10 text-gray-500 dark:bg-gray-500/20 dark:text-gray-400';
    }
  };

  return (
    <PageTransition>
      <section>
        <div className="flex flex-col space-y-8">
          <h1 className="text-2xl font-medium tracking-tight">Projects</h1>
          
          <div className="space-y-6">
            {/* Status Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</h3>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                      ${statusFilter === status 
                        ? 'bg-black dark:bg-white text-white dark:text-black' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    {status === 'all' ? 'All Projects' : status.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                      ${categoryFilter === category 
                        ? 'bg-black dark:bg-white text-white dark:text-black' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group px-4 py-3 rounded-xl border dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 cursor-pointer transition-all duration-200"
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 tabular-nums">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No projects found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject || projects[0]}
        />
      </section>
    </PageTransition>
  );
}
