
import type { Software } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Server, MonitorSmartphone } from 'lucide-react';
import Image from 'next/image';

// =======================================================================
// EDIT YOUR SOFTWARE DOWNLOADS HERE
// To add a new software item, copy one of the objects below and
// paste it as a new item in the 'mockSoftware' array.
//
// - id: A unique identifier for the item (e.g., 'sw-my-app').
// - name: The name of your software.
// - description: A brief, sarcastic description.
// - downloadUrl: The link to the download file (or '#' if none).
// - iconUrl: A URL for the software icon (e.g., 'https://placehold.co/128x128.png').
// - platform: The operating systems it runs on (e.g., 'Windows, macOS').
// - version: The current version number (e.g., '1.0.0').
// - releaseDate: When it was unleashed upon the world (e.g., '2024-01-01').
// =======================================================================
const mockSoftware: Software[] = [
  {
    id: 'sw-luty-suite',
    name: 'Luty "Productivity" Suite',
    description: 'A collection of "tools" that might occasionally not crash. "Productivity" and "streamline" are used loosely here.',
    downloadUrl: '#', // Replace with actual download link
    iconUrl: 'https://placehold.co/128x128.png',
    platform: 'Windows, macOS, Linux',
    version: '2.5.0',
    releaseDate: '2024-03-15',
  },
  {
    id: 'sw-photon-editor',
    name: 'Photon "Image" Mangler',
    description: '"Powerful"? "Intuitive"? We just strung some code together. It makes pixels change. Sometimes.',
    downloadUrl: '#',
    iconUrl: 'https://placehold.co/128x128.png',
    platform: 'Windows, macOS',
    version: '1.8.2',
    releaseDate: '2023-12-01',
  },
  {
    id: 'sw-connect-vpn',
    name: 'Connect "Secure-ish" VPN',
    description: 'Our VPN. It connects... usually. Privacy and security are nice concepts we read about once.',
    downloadUrl: '#',
    iconUrl: 'https://placehold.co/128x128.png',
    platform: 'Windows, macOS, Android, iOS',
    version: '3.1.5',
    releaseDate: '2024-02-20',
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform.toLowerCase().includes('windows')) return <Server className="h-5 w-5 text-blue-500" />;
  if (platform.toLowerCase().includes('macos')) return <MonitorSmartphone className="h-5 w-5 text-gray-700" />;
  if (platform.toLowerCase().includes('linux')) return <Server className="h-5 w-5 text-yellow-500" />;
  if (platform.toLowerCase().includes('android')) return <MonitorSmartphone className="h-5 w-5 text-green-500" />;
  if (platform.toLowerCase().includes('ios')) return <MonitorSmartphone className="h-5 w-5 text-gray-500" />;
  return <MonitorSmartphone className="h-5 w-5 text-muted-foreground" />;
};


export default function DownloadsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">Downloads (At Your Own Peril)</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Behold, our software "creations". They might work. They might also summon a minor demon. Good luck.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {mockSoftware.map((software) => (
            <Card key={software.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {software.iconUrl && (
                <div className="md:w-1/3 p-6 flex items-center justify-center bg-muted/50">
                  <Image
                    src={software.iconUrl}
                    alt={`${software.name} icon`}
                    width={96}
                    height={96}
                    className="rounded-lg object-contain"
                    data-ai-hint="software logo"
                  />
                </div>
              )}
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-inter text-xl">{software.name}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <PlatformIcon platform={software.platform} />
                    <span>{software.platform}</span>
                    {software.version && <span>| v{software.version}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{software.description}</CardDescription>
                  {software.releaseDate && (
                    <p className="text-xs text-muted-foreground mt-2">Unleashed: {software.releaseDate}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full md:w-auto font-inter">
                    <a href={software.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" /> Download (If You Must)
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
