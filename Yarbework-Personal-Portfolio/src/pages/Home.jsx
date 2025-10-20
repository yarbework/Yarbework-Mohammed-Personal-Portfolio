import { AboutMe } from "../component/AboutMe"
import { CertificatesSection } from "../component/CertificatesSection"
import { ContactSection } from "../component/ContactSection"
import { Footer } from "../component/Footer"
import { HeroSection } from "../component/HeroSections"
import { Navbar } from "../component/Navbar"
import { ProjectsSection } from "../component/ProjetcsSection"
import { SkillsSection } from "../component/SkillsSection"
import { StarBackground } from "../component/StarBackground"
import { ThemeToggle } from "../component/ThemeToggle"

export const Home = () => {

    return(
        <div className="min-h-screen bg-background text-foreground overflow-h-hidden">
            {/* Theme toggle */}
             <ThemeToggle />

            {/* Background effects */}
              <StarBackground />

            {/* Navbar */}
                <Navbar />
            {/* Main contents */}
                <main>
                    <HeroSection/>
                    <AboutMe />
                    <SkillsSection />
                    <CertificatesSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}