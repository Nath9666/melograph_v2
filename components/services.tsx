import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Digital Illustration",
    description: "Custom illustrations for various purposes including books, magazines, and digital media.",
  },
  {
    title: "Brand Identity Design",
    description: "Comprehensive branding solutions including logo design, color palettes, and brand guidelines.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design for websites and applications, focusing on usability and aesthetics.",
  },
  {
    title: "3D Modeling and Rendering",
    description: "Creation of 3D models and photorealistic renders for product visualization and architectural presentations.",
  },
  {
    title: "Motion Graphics",
    description: "Animated graphics for video content, including intros, explainer videos, and social media content.",
  },
  {
    title: "Print Design",
    description: "Design for print media including brochures, posters, packaging, and other marketing materials.",
  },
]

export function Services() {
  return (
    <section id="services" className=" py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="bg-gray-900 border-blue-900/20">
            <CardHeader>
              <CardTitle className="text-blue-400">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

