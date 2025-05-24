import type { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, ExternalLink, Settings, Users } from 'lucide-react';

// Mock data - in a real app, this would be fetched based on params.id
const mockProjects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Alpha Platform Redesign',
    description: 'A complete overhaul of an enterprise SaaS platform, focusing on UX and modern technology stack.',
    longDescription: 'The Alpha Platform Redesign project involved a multi-disciplinary team working to enhance user experience, improve performance, and migrate to a microservices architecture. We conducted extensive user research, iterative prototyping, and agile development cycles to deliver a state-of-the-art solution that significantly improved user engagement and operational efficiency. The new platform boasts a modular design, enabling faster feature rollouts and easier maintenance.',
    imageUrl: 'https://placehold.co/800x500/2E3192/FFFFFF.png',
    images: [
      'https://placehold.co/1200x700/2E3192/FFFFFF.png', 
      'https://placehold.co/1200x700/8E44AD/FFFFFF.png',
      'https://placehold.co/1200x700/555555/FFFFFF.png'
    ],
    projectUrl: '#', // Replace with actual URL
    tags: ['UI/UX', 'SaaS', 'React', 'Node.js', 'Enterprise Software'],
    client: 'Alpha Corp',
    date: 'May 15, 2023',
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    id: 'project-beta',
    title: 'Beta Mobile App',
    description: 'Cross-platform mobile application for e-commerce, built with React Native for iOS and Android.',
    longDescription: 'Beta Mobile App is a feature-rich e-commerce application designed to provide a seamless shopping experience. Key features include personalized recommendations, secure payments, and real-time order tracking. Built using React Native, it targets both iOS and Android platforms with a single codebase, reducing development time and costs while ensuring a native look and feel.',
    imageUrl: 'https://placehold.co/800x500/8E44AD/FFFFFF.png',
    images: [
        'https://placehold.co/1200x700/8E44AD/FFFFFF.png',
        'https://placehold.co/1200x700/2E3192/FFFFFF.png'
    ],
    tags: ['Mobile App', 'E-commerce', 'React Native'],
    client: 'Beta Retail',
    date: 'November 20, 2022',
    technologies: ['React Native', 'Firebase', 'Stripe API', 'Redux', 'JavaScript']
  },
   {
    id: 'project-gamma',
    title: 'Gamma Analytics Dashboard',
    description: 'Data visualization dashboard for business intelligence, providing real-time insights and reporting.',
    longDescription: 'The Gamma Analytics Dashboard empowers businesses with actionable insights through intuitive data visualizations. It connects to multiple data sources, processes information in real-time, and offers customizable reports and alerts. Built with D3.js and a Python backend.',
    imageUrl: 'https://placehold.co/800x500/555555/FFFFFF.png',
    projectUrl: '#',
    tags: ['Data Viz', 'BI', 'D3.js', 'Python'],
    client: 'Gamma Insights',
    date: 'January 10, 2024',
    technologies: ['D3.js', 'Python (Flask)', 'PostgreSQL', 'Docker', 'JavaScript']
  },
  {
    id: 'project-delta',
    title: 'Delta IoT Solution',
    description: 'An end-to-end IoT platform for smart home devices, enabling remote control and automation.',
    imageUrl: 'https://placehold.co/800x500/2E3192/DDDDDD.png',
    longDescription: 'Delta IoT solution provides a robust and scalable platform for managing and interacting with smart home devices. It features secure communication, rule-based automation, and a user-friendly mobile interface for device control and monitoring.',
    tags: ['IoT', 'Smart Home', 'MQTT', 'Embedded Systems'],
    client: 'Delta Innovations',
    date: 'March 05, 2023',
    technologies: ['MQTT', 'Node-RED', 'Raspberry Pi', 'Python', 'Vue.js']
  },
];

// This function would typically fetch data from a database or API
async function getProjectData(id: string): Promise<Project | undefined> {
  return mockProjects.find(p => p.id === id);
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = await getProjectData(params.id);

  if (!project) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold font-inter">Project Not Found</h1>
        <p className="text-muted-foreground">The project you are looking for does not exist.</p>
        <Button asChild className="mt-4 font-inter">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <Button asChild variant="outline" className="mb-8 font-inter">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="default" className="font-inter bg-accent hover:bg-accent/90">{tag}</Badge>
            ))}
          </div>
          {project.projectUrl && (
            <Button asChild variant="secondary" className="font-inter">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                Visit Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </header>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-10">
          <Image
            src={project.imageUrl}
            alt={`Main image for ${project.title}`}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="technology project"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-inter">Client</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-lora">{project.client || 'N/A'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-inter">Completion Date</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-lora">{project.date || 'N/A'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-inter">Technologies</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-lora text-muted-foreground">
                {project.technologies?.slice(0,3).join(', ') || 'Key Technologies'}
                {project.technologies && project.technologies.length > 3 && '...'}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none font-lora mb-10">
          <h2 className="font-inter text-2xl font-semibold text-foreground mb-4">Project Overview</h2>
          <p>{project.longDescription || project.description}</p>
        </div>

        {project.technologies && project.technologies.length > 0 && (
            <div className="mb-10">
                <h3 className="text-xl font-semibold font-inter text-foreground mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline" className="font-inter text-sm">{tech}</Badge>
                    ))}
                </div>
            </div>
        )}

        {project.images && project.images.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-inter text-foreground mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((imgUrl, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={imgUrl}
                    alt={`${project.title} gallery image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                    data-ai-hint="design interface"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
