"use client";

import AboutSection from "../../components/AboutSection";
import EmailSection from "../../components/EmailSection";
import Footer from "../../components/Footer"
import HeroSection from "../../components/HeroSection"
import Nav from "../../components/Nav"
import ProjectsSection from "../../components/ProjectsSection";


export default function Home() {
 

  return (
    <main className = "flex min-h-screen flex-col bg-[#121212]">
      <Nav/>
     <div className="container  mx-auto pt-4 max-[920px]:pb-2 px-12">
      <HeroSection />
  
      <AboutSection />
  
      <ProjectsSection/>
  
      <EmailSection />
     </div>

      <Footer />

    </main>
  )
}
