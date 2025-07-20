import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [".NET Core", "C#", "PHP 7.0/8.0", "Node.js"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Frontend Frameworks",
      skills: ["Vue.js", "Nuxt.js", "Laravel", "Statamic", "HTML/CSS", "Vue Native"],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Elasticsearch"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Architecture & Patterns",
      skills: ["Vertical Slice", "DDD", "Microservices", "CQRS", "Mediator", "BFF"],
      color: "bg-orange-100 text-orange-800",
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "Design Thinking", "Sprint Development"],
      color: "bg-pink-100 text-pink-800",
    },
    {
      title: "Languages & Certifications",
      skills: ["English (Advanced)", "German (Elementary)", "Google Project Management", "21st Century Competency"],
      color: "bg-indigo-100 text-indigo-800",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
