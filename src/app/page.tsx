
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Rocket, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-inter text-primary mb-6 animate-fade-in-down">
            Welcome to LutySpace
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up">
            Discover innovative projects, powerful software solutions, and engaging media content. We turn ideas into reality.
          </p>
          <div className="space-x-4 animate-fade-in-up [animation-delay:0.3s]">
            <Button size="lg" asChild className="font-inter">
              <Link href="/projects">
                Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-inter">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-foreground mb-4">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            At LutySpace, we specialize in bringing creative visions to life through technology and design.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-md w-fit mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-inter text-2xl">Innovative Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We craft bespoke solutions and showcase a diverse portfolio of successful projects across various industries.
              </CardDescription>
              <Button variant="link" asChild className="px-0 mt-4 font-inter">
                <Link href="/projects">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="p-3 bg-accent/10 rounded-md w-fit mb-4">
                 <Rocket className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-inter text-2xl">Software Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access our suite of powerful and intuitive software designed to enhance productivity and creativity.
              </CardDescription>
               <Button variant="link" asChild className="px-0 mt-4 font-inter">
                <Link href="/downloads">Explore Software <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-md w-fit mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-inter text-2xl">Engaging Media</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Dive into our world of captivating media content, including tutorials, showcases, and insights on our YouTube channel.
              </CardDescription>
              <Button variant="link" asChild className="px-0 mt-4 font-inter">
                <Link href="/youtube">Watch Videos <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-card rounded-xl shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-foreground mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let LutySpace be your partner in innovation. Contact us today to discuss your ideas.
          </p>
          <Button size="lg" asChild className="font-inter">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
