"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Calendar, Palette, Image, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/services/photography", icon: Camera, text: "Photography" },
    { href: "/services/events", icon: Calendar, text: "Events" },
    { href: "/services/branding", icon: Palette, text: "Branding" },
    { href: "/portfolio", icon: Image, text: "Portfolio" },
    { href: "/contact", icon: Mail, text: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-2 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 flex items-center"
        >
          <Camera className="mr-2" />
          Maphotos
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-2 md:text-sm lg:space-x-4 lg:text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  <item.icon className="mr-1 h-4 w-4" /> {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className="hidden md:flex">
          <Link href="/booking" className="flex items-center">
            <Calendar className="mr-2" /> Book Now
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <item.icon className="mr-2 h-4 w-4" /> {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild className="w-full">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    <Calendar className="mr-2" /> Book Now
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
