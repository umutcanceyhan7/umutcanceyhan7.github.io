import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Computer Engineer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
            Delivering scalable, user-centric solutions with 3+ years of hands-on experience in global e-procurement
            platforms and corporate innovation programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              Download CV
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </div>
    </section>
  )
}
