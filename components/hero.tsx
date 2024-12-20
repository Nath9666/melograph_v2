import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className=" flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Graphic &{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Digital Art
        </span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Bringing your ideas to life through stunning visuals and creative designs.
        Let&apos;s create something extraordinary together.
      </p>
      <div className="flex gap-4">
        <Link href="#portfolio">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View Portfolio
          </Button>
        </Link>
        <Link href="#contact">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
            Get in Touch
          </Button>
        </Link>
        <Link href="/book">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Book a Session
          </Button>
        </Link>
      </div>
    </section>
  )
}

