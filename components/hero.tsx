"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'next-i18next';

export function Hero() {
  const { t } = useTranslation('common');
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <h1 className="lg:text-9xl font-custom tracking-tighter md:text-8xl text-7xl">
        Graphic &{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Digital Art
        </span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Bringing your ideas to life through stunning visuals and creative designs.
        Let&apos;s create something extraordinary together.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <Link href="#portfolio">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View Portfolio
          </Button>
        </Link>
        <Link href="#contact">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-200 hover:text-black">
            Get in Touch
          </Button>
        </Link>
        <Link href="/book">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {t('book')}
          </Button>
        </Link>
      </div>
    </section>
  );
}