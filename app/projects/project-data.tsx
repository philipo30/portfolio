export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  githubUrl?: string;
  image?: string;
  technologies?: string[];
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'maintained';
  category: string[];
}

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
    githubUrl: "https://github.com/example/project-one",
    image: "/photos/photo1.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    featured: true,
    status: 'completed',
    category: ['Web Development', 'React', 'TypeScript'],
  },
  {
    title: "Project Two",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
    status: 'in-progress',
    category: ['Web Development', 'React', 'TypeScript'],
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
    status: 'maintained',
    category: ['Web Development', 'React', 'TypeScript'],
  },
];
