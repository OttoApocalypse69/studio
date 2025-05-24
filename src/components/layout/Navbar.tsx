'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Briefcase, Download, PlaySquare, UserCircle, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '/', label: 'Home', icon: Feather },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/downloads', label: 'Downloads', icon: Download },
  { href: '/youtube', label: 'YouTube', icon: PlaySquare },
];

const authItems = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Sign Up' },
];

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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-inter text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              {authItems.map((item) => (
                 <Button key={item.label} variant={item.label === 'Sign Up' ? "default" : "outline"} size="sm" asChild>
                    <Link href={item.href} className="font-inter">
                      {item.label === 'Login' && <UserCircle className="mr-2 h-4 w-4" />}
                      {item.label}
                    </Link>
                 </Button>
              ))}
            </div>
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
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-3 py-2 font-inter text-lg text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <hr className="border-border my-4" />
                  {authItems.map((item) => (
                    <Button key={item.label} variant={item.label === 'Sign Up' ? "default" : "outline"} className="w-full justify-start" asChild onClick={() => setMobileMenuOpen(false)}>
                        <Link href={item.href} className="font-inter text-lg">
                          {item.label === 'Login' && <UserCircle className="mr-2 h-5 w-5" />}
                          {item.label}
                        </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
