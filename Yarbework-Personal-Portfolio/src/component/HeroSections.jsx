import { ArrowDown } from "lucide-react"

export const HeroSection =  () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flec-col items-center justify-center px-4"
        > 
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            {/* <span className="animate-fade-in opacity-0" > Hi, I'm</span> */}
                            <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Yarbework</span>
                            <span className="opacity-0 animate-fade-in-delay-3"> Mohammed</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                           I build seamless Web and Mobile experiences with modern JavaScript technologies. 
                           Specializing in the React ecosystem, 
                           I create interfaces that are beautiful, functional, and performant.
                        </p>
                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Works
                            </a>
                        </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}