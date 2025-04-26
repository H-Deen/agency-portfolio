'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl md:text-2xl text-slate-900">DevStudio</span>
            <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-md">Agency</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-md md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium transition-colors ${isActive(link.path) 
                    ? "text-blue-600" 
                    : "text-gray-900"}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="button-primary bg"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 px-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-5 py-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-lg font-medium px-4 py-3 rounded-md ${isActive(link.path) 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-secondary"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="button-primary mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
