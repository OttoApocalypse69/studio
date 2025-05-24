import ProjectCard from '@/components/projects/ProjectCard';
import type { Project } from '@/types';

// Mock data for projects
const mockProjects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Alpha Platform Redesign',
    description: 'A complete overhaul of an enterprise SaaS platform, focusing on UX and modern technology stack.',
    longDescription: 'The Alpha Platform Redesign project involved a multi-disciplinary team working to enhance user experience, improve performance, and migrate to a microservices architecture. We conducted extensive user research, iterative prototyping, and agile development cycles to deliver a state-of-the-art solution.',
    imageUrl: 'https://placehold.co/600x400/2E3192/FFFFFF.png',
    images: ['https://placehold.co/800x600/2E3192/FFFFFF.png', 'https://placehold.co/800x600/8E44AD/FFFFFF.png'],
    projectUrl: '#',
    tags: ['UI/UX', 'SaaS', 'React', 'Node.js'],
    client: 'Alpha Corp',
    date: '2023-05-15',
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS']
  },
  {
    id: 'project-beta',
    title: 'Beta Mobile App',
    description: 'Cross-platform mobile application for e-commerce, built with React Native for iOS and Android.',
    longDescription: 'Beta Mobile App is a feature-rich e-commerce application designed to provide a seamless shopping experience. Key features include personalized recommendations, secure payments, and real-time order tracking. Built using React Native, it targets both iOS and Android platforms with a single codebase.',
    imageUrl: 'https://placehold.co/600x400/8E44AD/FFFFFF.png',
    projectUrl: '#',
    tags: ['Mobile App', 'E-commerce', 'React Native'],
    client: 'Beta Retail',
    date: '2022-11-20',
    technologies: ['React Native', 'Firebase', 'Stripe API', 'Redux']
  },
  {
    id: 'project-gamma',
    title: 'Gamma Analytics Dashboard',
    description: 'Data visualization dashboard for business intelligence, providing real-time insights and reporting.',
    longDescription: 'The Gamma Analytics Dashboard empowers businesses with actionable insights through intuitive data visualizations. It connects to multiple data sources, processes information in real-time, and offers customizable reports and alerts. Built with D3.js and a Python backend.',
    imageUrl: 'https://placehold.co/600x400/555555/FFFFFF.png',
    projectUrl: '#',
    tags: ['Data Viz', 'BI', 'D3.js', 'Python'],
    client: 'Gamma Insights',
    date: '2024-01-10',
    technologies: ['D3.js', 'Python (Flask)', 'PostgreSQL', 'Docker']
  },
  {
    id: 'project-delta',
    title: 'Delta IoT Solution',
    description: 'An end-to-end IoT platform for smart home devices, enabling remote control and automation.',
    imageUrl: 'https://placehold.co/600x400/2E3192/DDDDDD.png',
    tags: ['IoT', 'Smart Home', 'MQTT'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">Our Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a selection of our finest work, showcasing our expertise in design, development, and innovation.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
