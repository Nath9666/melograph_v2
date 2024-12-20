"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="p-2 sticky top-0 z-50 w-full border-b border-blue-900/10 bg-gray-950/80 backdrop-blur">
      <div className=" flex h-16 items-center">
        <Link href="/" className="mr-6 text-xl font-bold text-blue-500">
          <Image
            src="/image/Logo_alpha.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-1/6 rounded-md mt-4"
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetHeader className="hidden md:flex md:items-center md:gap-8">
            <VisuallyHidden>
              <p>Menu</p>
            </VisuallyHidden>
          </SheetHeader>
          <SheetContent side="left" className="bg-gray-950 text-gray-50">
            <nav className="flex flex-col gap-4">
              <Link href="/portfolio" className="text-lg hover:text-blue-400">
                Portfolio
              </Link>
              <Link href="/services" className="text-lg hover:text-blue-400">
                Services
              </Link>
              <Link href="/contact" className="text-lg hover:text-blue-400">
                Contact
              </Link>
              <Link href="/book" className="text-lg hover:text-blue-400">
                Book a Session
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-8">
          <Link href="/portfolio" className="text-sm hover:text-blue-400">
            Portfolio
          </Link>
          <Link href="/services" className="text-sm hover:text-blue-400">
            Services
          </Link>
          <Link href="/contact" className="text-sm hover:text-blue-400">
            Contact
          </Link>
          <Link href="/book" className="text-sm hover:text-blue-400">
            Book a Session
          </Link>
        </nav>
      </div>
    </header>
  );
}
