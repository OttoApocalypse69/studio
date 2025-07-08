import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-4">
        <a 
          href="https://discord.gg/RTdYYVenKD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-inter"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Join our chaotic Discord server</span>
        </a>
        <p className="text-sm text-muted-foreground font-inter">
          &copy; {new Date().getFullYear()} Luty-Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
