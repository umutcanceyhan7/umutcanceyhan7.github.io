import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Lightbulb, Award } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm a passionate Computer Engineer with extensive experience in delivering cost-effective, scalable
                solutions across global-scale e-procurement platforms and corporate innovation programs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                My expertise spans backend technologies, frontend frameworks, and modern architectural patterns
                including Vertical Slice architecture, Domain-Driven Design (DDD), and Microservices.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I thrive in collaborative environments, leading cross-functional teams and driving innovation through
                Agile methodologies and Design Thinking approaches.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800">Technical Excellence</h3>
                  <p className="text-sm text-slate-600 mt-2">Full-stack development expertise</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800">Team Leadership</h3>
                  <p className="text-sm text-slate-600 mt-2">Scrum Master & mentor</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800">Innovation</h3>
                  <p className="text-sm text-slate-600 mt-2">R&D and product development</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800">Recognition</h3>
                  <p className="text-sm text-slate-600 mt-2">Multiple first-place awards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
