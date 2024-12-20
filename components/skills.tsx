import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
]

export function Skills() {
  return (
    <section id="skills" className=" py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Skills & Technologies</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill} className="bg-gray-900 border-blue-900/20">
            <CardContent className="flex items-center justify-center p-6">
              <span className="text-lg font-medium text-blue-400">{skill}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

