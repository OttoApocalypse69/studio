
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Rocket, Target, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-inter text-primary mb-6 animate-fade-in-down">
            Welcome to Luty-Web
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up">
            Schizo
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.3s]">
            <Button size="lg" asChild className="font-inter">
              <Link href="/projects">
                Browse Our Blunders <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" asChild className="font-inter" variant="secondary">
              <a href="https://discord.gg/RTdYYVenKD" target="_blank" rel="noopener noreferrer">
                Join Our Discord <MessageSquare className="ml-2 h-5 w-5" />
              </a>
            </Button>
            {/* "Complain Here" Button Removed */}
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-16">
        <div className="text-center mb-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-foreground mb-4">What We Subject You To</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            At Luty-Web, we specialize in making people suck.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-md w-fit mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-inter text-2xl">Highly Questionable Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We craft crap.
              </CardDescription>
              <Button variant="link" asChild className="px-0 mt-4 font-inter">
                <Link href="/projects">See the Evidence <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="p-3 bg-accent/10 rounded-md w-fit mb-4">
                 <Rocket className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-inter text-2xl">Dubious Software Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Download things. We dare you. Don&apos;t blame us if your computer starts crying.
              </CardDescription>
               <Button variant="link" asChild className="px-0 mt-4 font-inter">
                <Link href="/downloads">Risk Downloading <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-md w-fit mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-inter text-2xl">Distracting Media Attempts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Waste your precious time with our alleged &apos;media content&apos;. You might find tutorials, or just digital noise. Your guess is as good as ours.
              </CardDescription>
              <Button variant="link" asChild className="px-0 mt-4 font-inter">
                <Link href="/youtube">Stare Blankly <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-card rounded-xl shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-foreground mb-6">
            Got a Terrible Idea?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            If your project is doomed from the start, we&apos;re probably the right (or wrong) people for the job. Or don&apos;t contact us. We&apos;re probably napping. This section is purely decorative now.
          </p>
          {/* "Send Your Regrets" Button Removed
            Optionally, could link to projects or another page instead.
            For now, keeping the text but removing the button.
           */}
        </div>
      </section>
    </div>
  );
}
