import ProjectCard from '@/components/projects/ProjectCard';
import type { Project } from '@/types';

// Mock data for projects
const mockProjects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Alpha Platform "Redesign"',
    description: "Our attempt to 'overhaul' an enterprise SaaS platform. 'Focusing' is a strong word for what we did with UX and 'modern' tech.",
    longDescription: "The Alpha Platform 'Redesign'. We threw a bunch of people at it to 'enhance' UX and 'improve' performance. Buzzwords like 'microservices', 'user research', 'agile' were definitely uttered. The result? It's... a thing. It has modules. Maintenance is still a nightmare, probably.",
    imageUrl: 'https://placehold.co/600x400/2E3192/FFFFFF.png',
    images: ['https://placehold.co/800x600/2E3192/FFFFFF.png', 'https://placehold.co/800x600/8E44AD/FFFFFF.png'],
    projectUrl: '#',
    tags: ['UX-ish', 'SaaS-maybe', 'React-probably', 'Node.js-perhaps'],
    client: 'Alpha Corp (they survived)',
    date: 'Sometime in 2023',
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS']
  },
  {
    id: 'project-beta',
    title: 'Beta Mobile "App"',
    description: 'A mobile app for e-commerce. It exists. Allegedly cross-platform. Built with code and regret.',
    longDescription: "Beta Mobile App: an e-commerce app with 'features'. We aimed for 'seamless', landed somewhere near 'occasionally functional'. It has 'recommendations' (good luck with those), 'payments' (cross your fingers), and 'tracking' (mostly). React Native means we only had to write the bugs once for both platforms.",
    imageUrl: 'https://placehold.co/600x400/8E44AD/FFFFFF.png',
    projectUrl: '#',
    tags: ['Mobile-ish App', 'E-commerce-adjacent', 'React Native (somehow)'],
    client: 'Beta Retail (still in business, surprisingly)',
    date: 'Late 2022, probably',
    technologies: ['React Native', 'Firebase', 'Stripe API', 'Redux']
  },
  {
    id: 'project-gamma',
    title: 'Gamma Analytics "Dashboard"',
    description: "A dashboard that shows data. Sometimes it's even real-time. 'Insights' and 'intelligence' sold separately.",
    longDescription: "Gamma Analytics Dashboard: it shows charts. 'Empowers' and 'actionable insights' are what the marketing team wanted. It connects to stuff, processes things, and you can customize reports, if you're patient. D3.js and Python were involved, for better or worse.",
    imageUrl: 'https://placehold.co/600x400/555555/FFFFFF.png',
    projectUrl: '#',
    tags: ['Data-ish Viz', 'BI-curious', 'D3.js (we think)', 'Python (allegedly)'],
    client: 'Gamma Insights (or lack thereof)',
    date: 'Early 2024, a dark time',
    technologies: ['D3.js', 'Python (Flask)', 'PostgreSQL', 'Docker']
  },
  {
    id: 'project-delta',
    title: 'Delta IoT "Solution"',
    description: "An IoT platform for when you want your smart home to be a little dumber. Remote control? Maybe. Automation? If it feels like it.",
    longDescription: "Delta IoT: our take on 'smart' home tech. 'Robust' and 'scalable' sound good, right? It's got 'security' (wink), 'rules' (that sometimes work), and an interface that's... there. For controlling things. Or trying to.",
    imageUrl: 'https://placehold.co/600x400/2E3192/DDDDDD.png',
    tags: ['IoT-ish', 'Smart-ish Home', 'MQTT (maybe)'],
    client: 'Delta Innovations (questionable name)',
    date: 'A forgettable day in 2023',
    technologies: ['MQTT', 'Node-RED', 'Raspberry Pi', 'Python', 'Vue.js']
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">Exhibit A: Our "Projects"</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of our past endeavors. If you&apos;re looking for &apos;expertise&apos; or &apos;innovation&apos;, you might be in the wrong place.
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
