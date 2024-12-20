import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className=" py-24">
      <Card className="mx-auto max-w-lg bg-gray-900 border-blue-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-50">Get in Touch</CardTitle>
          <CardDescription className="text-center">
            Have a project in mind? Let&apos;s bring your vision to life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 text-gray-100">
            <div className="space-y-2">
              <Input
                className="bg-gray-950 border-blue-900/20"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Input
                className="bg-gray-950 border-blue-900/20"
                id="email"
                placeholder="Your email"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                className="bg-gray-950 border-blue-900/20"
                id="message"
                placeholder="Tell me about your project"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

