import type { YouTubeVideo } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock data for YouTube videos
const mockVideos: YouTubeVideo[] = [
  {
    id: 'y8-3i1P9J50',
    title: 'Our Magnum Opus: A Deep Dive into Nothingness',
    description: "Ten hours of pure, unadulterated black screen. It's a metaphor for our development process. Or maybe we just forgot to turn the camera on.",
  },
  {
    id: 'Z0DO0sEjO_A',
    title: 'How It\'s Made: The Luty-Web Server',
    description: 'An exclusive look at the high-performance machine running our services. The soothing hum is the sound of progress... or impending failure.',
  },
  {
    id: '39h44b4wARc',
    title: 'Live Q&A with the Luty-Web CEO',
    description: 'Our founder answers your burning questions. The excitement is palpable. Please hold your applause until the end.',
  },
];

export default function YouTubePage() {
  return (
    <div className="space-y-12">
      <section className="text-center bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">Luty-Web on YouTube</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Our YouTube channel: a digital abyss of questionable content. Subscribe if you enjoy mild bewilderment.
        </p>
        <Button asChild className="font-inter bg-red-600 hover:bg-red-700 text-white">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5"/> Visit Our Den of Digital Despair
            </a>
        </Button>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="font-inter text-lg line-clamp-2">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{video.description || 'Stare at this video. Or don\'t.'}</CardDescription>
              </CardContent>
               <CardFooter>
                <Button asChild variant="link" className="px-0 font-inter">
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="mr-2 h-4 w-4" /> Waste Time on YouTube
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
