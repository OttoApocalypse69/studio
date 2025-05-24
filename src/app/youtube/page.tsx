import type { YouTubeVideo } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock data for YouTube videos
const mockVideos: YouTubeVideo[] = [
  {
    id: 'dQw4w9WgXcQ', // Example: Rick Astley - Never Gonna Give You Up
    title: 'Luty-Web "Product" Demo (Viewer Discretion Advised)',
    description: 'Watch us try to explain what this thing allegedly does. Popcorn not included, probably for the best.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
  },
  {
    id: 'JGwWNGJdvx8', // Example: Creative Commons video
    title: 'The Unfiltered Chaos: Luty-Web "Behind the Scenes"',
    description: 'A terrifying glimpse into how the sausage (or lack thereof) is made. You\'ve been warned.',
    thumbnailUrl: 'https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg',
  },
  {
    id: 'L1QOh-n-D2o', // Example: Another Creative Commons video
    title: 'Tutorial: Attempting to Navigate LutySuite (Good Luck)',
    description: 'Follow along as we stumble through our own "productivity" suite. May the odds be ever in your favor.',
    thumbnailUrl: 'https://img.youtube.com/vi/L1QOh-n-D2o/hqdefault.jpg',
  },
];

export default function YouTubePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">Luty-Web on YouTube</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Our YouTube channel: a digital abyss of questionable content. Subscribe if you enjoy mild bewilderment.
        </p>
        <Button asChild className="font-inter bg-red-600 hover:bg-red-700 text-white">
            <a href="https://www.youtube.com/@yourchannelname" target="_blank" rel="noopener noreferrer">
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
