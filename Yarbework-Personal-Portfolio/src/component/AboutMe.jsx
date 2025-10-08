import {cn} from '@/lib/utils';

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-semibold">Passionate Web and Mobile App developer</h3>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Sapiente debitis quidem
                      dolore distinctio, quos eos placeat illum quam 
                </p>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Sapiente debitis quidem
                      dolore distinctio, quos eos placeat illum quam 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>
                    <a href="#cv from google derive " className={cn(
                        "px-6 py-2 rounded-full border border-primary text-primary font-medium ",
                        "transition-colors duration-300 hover:bg-primary/10",
                        "hover:scale-105 active:scale-95")}>
                        Download CV
                    </a>
                </div>
                
            </div>
            <div>

            </div>
         </div>
         </div>
        </section>
    )
}