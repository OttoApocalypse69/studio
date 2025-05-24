import type { Software } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Server, MonitorSmartphone, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Mock data for software
const mockSoftware: Software[] = [
  {
    id: 'sw-luty-suite',
    name: 'Luty Productivity Suite',
    description: 'A comprehensive suite of tools to boost your daily productivity and streamline workflows.',
    downloadUrl: '#', // Replace with actual download link
    iconUrl: 'https://placehold.co/128x128/2E3192/FFFFFF.png?text=LS',
    platform: 'Windows, macOS, Linux',
    version: '2.5.0',
    releaseDate: '2024-03-15',
  },
  {
    id: 'sw-photon-editor',
    name: 'Photon Image Editor',
    description: 'Powerful yet intuitive image editing software for professionals and hobbyists alike.',
    downloadUrl: '#',
    iconUrl: 'https://placehold.co/128x128/8E44AD/FFFFFF.png?text=PE',
    platform: 'Windows, macOS',
    version: '1.8.2',
    releaseDate: '2023-12-01',
  },
  {
    id: 'sw-connect-vpn',
    name: 'Connect Secure VPN',
    description: 'Ensure your online privacy and security with our high-speed VPN service.',
    downloadUrl: '#',
    iconUrl: 'https://placehold.co/128x128/555555/FFFFFF.png?text=CV',
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
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-inter text-primary mb-4">Software Downloads</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get the latest versions of our powerful and innovative software applications.
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
                    <p className="text-xs text-muted-foreground mt-2">Released: {software.releaseDate}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full md:w-auto font-inter">
                    <a href={software.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" /> Download
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
