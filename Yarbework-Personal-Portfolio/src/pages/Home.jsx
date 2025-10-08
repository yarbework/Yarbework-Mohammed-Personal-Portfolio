import { HeroSection } from "../component/HeroSections"
import { Navbar } from "../component/Navbar"
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
                </main>
            {/* Footer */}
        </div>
    )
}