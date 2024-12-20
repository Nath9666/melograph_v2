import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Digital Illustration",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Brand Identity",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "3D Modeling",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Motion Graphics",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Print Design",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className=" py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-2">
        {portfolioItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden bg-gray-900 border-blue-900/20"
          >
            <CardContent className="p-0">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover transition-all hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-400">
                  {item.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
