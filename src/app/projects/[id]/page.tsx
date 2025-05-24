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
    title: 'Alpha Platform "Redesign"',
    description: "Our attempt to 'overhaul' an enterprise SaaS platform. 'Focusing' is a strong word for what we did with UX and 'modern' tech.",
    longDescription: "The Alpha Platform 'Redesign'. We threw a bunch of people at it to 'enhance' UX and 'improve' performance. Buzzwords like 'microservices', 'user research', 'agile' were definitely uttered. The result? It's... a thing. It has modules. Maintenance is still a nightmare, probably.",
    imageUrl: 'https://placehold.co/800x500/2E3192/FFFFFF.png',
    images: [
      'https://placehold.co/1200x700/2E3192/FFFFFF.png', 
      'https://placehold.co/1200x700/8E44AD/FFFFFF.png',
      'https://placehold.co/1200x700/555555/FFFFFF.png'
    ],
    projectUrl: '#', 
    tags: ['UX-ish', 'SaaS-maybe', 'React-probably', 'Node.js-perhaps', 'Enterprise Misfire'],
    client: 'Alpha Corp (they survived)',
    date: 'May 15, 2023 (a Monday, probably)',
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker', 'Kubernetes', 'Regret']
  },
  {
    id: 'project-beta',
    title: 'Beta Mobile "App"',
    description: 'A mobile app for e-commerce. It exists. Allegedly cross-platform. Built with code and regret.',
    longDescription: "Beta Mobile App: an e-commerce app with 'features'. We aimed for 'seamless', landed somewhere near 'occasionally functional'. It has 'recommendations' (good luck with those), 'payments' (cross your fingers), and 'tracking' (mostly). React Native means we only had to write the bugs once for both platforms.",
    imageUrl: 'https://placehold.co/800x500/8E44AD/FFFFFF.png',
    images: [
        'https://placehold.co/1200x700/8E44AD/FFFFFF.png',
        'https://placehold.co/1200x700/2E3192/FFFFFF.png'
    ],
    tags: ['Mobile-ish App', 'E-commerce-adjacent', 'React Native (somehow)'],
    client: 'Beta Retail (still in business, surprisingly)',
    date: 'November 20, 2022 (or thereabouts)',
    technologies: ['React Native', 'Firebase', 'Stripe API', 'Redux', 'JavaScript', 'Hope (misplaced)']
  },
   {
    id: 'project-gamma',
    title: 'Gamma Analytics "Dashboard"',
    description: "A dashboard that shows data. Sometimes it's even real-time. 'Insights' and 'intelligence' sold separately.",
    longDescription: "Gamma Analytics Dashboard: it shows charts. 'Empowers' and 'actionable insights' are what the marketing team wanted. It connects to stuff, processes things, and you can customize reports, if you're patient. D3.js and Python were involved, for better or worse.",
    imageUrl: 'https://placehold.co/800x500/555555/FFFFFF.png',
    projectUrl: '#',
    tags: ['Data-ish Viz', 'BI-curious', 'D3.js (we think)', 'Python (allegedly)'],
    client: 'Gamma Insights (or lack thereof)',
    date: 'January 10, 2024 (a bleak day)',
    technologies: ['D3.js', 'Python (Flask)', 'PostgreSQL', 'Docker', 'JavaScript', 'Caffeine']
  },
  {
    id: 'project-delta',
    title: 'Delta IoT "Solution"',
    description: "An IoT platform for when you want your smart home to be a little dumber. Remote control? Maybe. Automation? If it feels like it.",
    imageUrl: 'https://placehold.co/800x500/2E3192/DDDDDD.png',
    longDescription: "Delta IoT: our take on 'smart' home tech. 'Robust' and 'scalable' sound good, right? It's got 'security' (wink), 'rules' (that sometimes work), and an interface that's... there. For controlling things. Or trying to.",
    tags: ['IoT-ish', 'Smart-ish Home', 'MQTT (maybe)', 'Embedded Nightmares'],
    client: 'Delta Innovations (questionable name)',
    date: 'March 05, 2023 (another day, another dollar... not really)',
    technologies: ['MQTT', 'Node-RED', 'Raspberry Pi', 'Python', 'Vue.js', 'Duct Tape']
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
        <h1 className="text-2xl font-bold font-inter">Project Not Found (Or We Lost It)</h1>
        <p className="text-muted-foreground">The project you are looking for does not exist. Or maybe it never did. Who knows?</p>
        <Button asChild className="mt-4 font-inter">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to More Disappointments
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <Button asChild variant="outline" className="mb-8 font-inter">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to the Pile
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
                Witness the "Live" Version <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </header>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-10">
          <Image
            src={project.imageUrl}
            alt={`Alleged image for ${project.title}`}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="technology project disaster"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-inter">"Client"</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-lora">{project.client || 'Victim Name Withheld'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-inter">"Completion" Date</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-lora">{project.date || 'Eventually'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-inter">"Technologies"</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-lora text-muted-foreground">
                {project.technologies?.slice(0,3).join(', ') || 'Random Buzzwords'}
                {project.technologies && project.technologies.length > 3 && '... and more questionable choices'}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none font-lora mb-10">
          <h2 className="font-inter text-2xl font-semibold text-foreground mb-4">Project "Overview"</h2>
          <p>{project.longDescription || project.description}</p>
        </div>

        {project.technologies && project.technologies.length > 0 && (
            <div className="mb-10">
                <h3 className="text-xl font-semibold font-inter text-foreground mb-3">Tools of Torture (Allegedly Used)</h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline" className="font-inter text-sm">{tech}</Badge>
                    ))}
                </div>
            </div>
        )}

        {project.images && project.images.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-inter text-foreground mb-6">Project "Gallery" (Evidence Locker)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((imgUrl, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={imgUrl}
                    alt={`${project.title} gallery image ${index + 1} (if it loads)`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                    data-ai-hint="design interface screenshot"
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
