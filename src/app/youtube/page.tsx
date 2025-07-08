import type { YouTubeVideo } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock data for YouTube videos - REPLACE THESE WITH YOUR VIDEOS
// The 'id' is the part of the YouTube URL after 'v='. For example, in 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', the ID is 'dQw4w9WgXcQ'.
const mockVideos: YouTubeVideo[] = [
  {
    id: 'your-video-id-1',
    title: 'Your First Awesome Video Title',
    description: "Replace this with your video's description. It's a good idea to keep it brief and engaging here.",
  },
  {
    id: 'your-video-id-2',
    title: 'Another Masterpiece',
    description: "Don't forget to replace this one too! Your viewers are waiting.",
  },
  {
    id: 'your-video-id-3',
    title: 'The Grand Finale (or just another video)',
    description: 'You know the drill. Swap this out with your actual content.',
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
            <a href="https://www.youtube.com/@UnknownCyberiaink" target="_blank" rel="noopener noreferrer">
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
