"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="p-4 sticky top-0 z-50 w-full border-b border-blue-900/10 bg-gray-950/80 backdrop-blur">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/Logo_alpha.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-16 h-16 rounded-md"
          />
        </Link>
        <LanguageSwitcher />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-950 text-gray-50">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="/portfolio"
                className="text-lg hover:text-blue-400"
                onClick={closeSheet}
              >
                {t("portfolio")}
              </Link>
              <Link
                href="/services"
                className="text-lg hover:text-blue-400"
                onClick={closeSheet}
              >
                {t("services")}
              </Link>
              <Link
                href="/contact"
                className="text-lg hover:text-blue-400"
                onClick={closeSheet}
              >
                {t("contact")}
              </Link>
              <Link
                href="/book"
                className="text-lg hover:text-blue-400"
                onClick={closeSheet}
              >
                {t("book")}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link href="/portfolio" className="text-sm hover:text-blue-400">
            {t("portfolio")}
          </Link>
          <Link href="/services" className="text-sm hover:text-blue-400">
            {t("services")}
          </Link>
          <Link href="/contact" className="text-sm hover:text-blue-400">
            {t("contact")}
          </Link>
          <Link href="/book" className="text-sm hover:text-blue-400">
            {t("book")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
