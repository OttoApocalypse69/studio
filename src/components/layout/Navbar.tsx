'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Briefcase, Download, PlaySquare, Feather, MessageSquare } from 'lucide-react'; // Removed UserCircle
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '/', label: 'Home', icon: Feather },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/downloads', label: 'Downloads', icon: Download },
  { href: '/youtube', label: 'YouTube', icon: PlaySquare },
  { href: 'https://discord.gg/RTdYYVenKD', label: 'Discord', icon: MessageSquare, external: true },
];

// Auth items removed

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Feather className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-inter text-foreground">Luty-Web</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-inter text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
            {/* Auth items buttons removed */}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-6">
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center space-x-2 mb-6" onClick={() => setMobileMenuOpen(false)}>
                    <Feather className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold font-inter text-foreground">Luty-Web</span>
                  </Link>
                  {navItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 py-2 font-inter text-lg text-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-3 py-2 font-inter text-lg text-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  )}
                  {/* Auth items buttons removed from mobile menu */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
