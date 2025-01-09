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
    title: "This Blog!",
    year: 2025,
    description:
      "Hey! Thank you for visiting my portfolio and blog! Do you want to modify your own version of this? Go to ",
    url: "https://example.com/",
    githubUrl: "https://github.com/philipo30/portfolio",
    image: "/photos/photo1.jpg",
    technologies: ["Nextjs", "TypeScript", "Javascript", "Tailwind"],
    featured: true,
    status: 'completed',
    category: ['Web Development', 'Nextjs', 'TypeScript', 'Javascript'],
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
