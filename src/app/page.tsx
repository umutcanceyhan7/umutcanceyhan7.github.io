import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Accomplishments from "@/components/Accomplishments";
import ProjectGallery from "@/components/ProjectGallery";
import BlogSection from "@/components/BlogSection";
import MediaGallery from "@/components/MediaGallery";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechnicalSkills />
      {/* <Experience /> */}
      {/* <Accomplishments /> */}
      {/* <ProjectGallery /> */}
      {/* <BlogSection /> */}
      {/* <MediaGallery /> */}
      <Hobbies />
      <Contact />
    </main>
  );
}
