import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to collaborate on your next project or discuss opportunities? I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-400" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">your.email@example.com</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-green-400" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
