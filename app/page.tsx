import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Accomplishments from "@/components/accomplishments"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Accomplishments />
      <Contact />
    </main>
  )
}
