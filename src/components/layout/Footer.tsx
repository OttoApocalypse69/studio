export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p className="text-sm text-muted-foreground font-inter">
          &copy; {new Date().getFullYear()} Luty-Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
