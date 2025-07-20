import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, Presentation, DollarSign } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Global E-Procurement Platforms",
      description:
        "Delivered scalable solutions for enterprise-level procurement systems, handling complex business logic and high-volume transactions.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Training & Leadership",
      description:
        "Led in-house training sessions for 150+ employees on Blockchain technologies and served as Scrum Master for cross-functional teams.",
    },
    {
      icon: <Presentation className="h-8 w-8 text-purple-600" />,
      title: "Executive Presentations",
      description:
        "Delivered high-impact demos and strategic presentations to C-level executives, driving digital transformation initiatives.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-600" />,
      title: "Entrepreneurship Program",
      description:
        "Led an entrepreneurship program that was awarded $30K in funding, demonstrating innovation and business acumen.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Experience Highlights</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {exp.icon}
                    <CardTitle className="text-xl text-slate-800">{exp.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
