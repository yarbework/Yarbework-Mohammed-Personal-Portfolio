import {cn} from '@/lib/utils';
import {Cable, Code, Cpu, PhoneIcon, Tangent, User} from 'lucide-react'

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
                      dolore distinctio, quos eos placeat illum quam 
                      dolore distinctio, quos eos placeat illum quam 
                      dolore distinctio, quos eos placeat illum quam 
                </p>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Sapiente debitis quidem
                      dolore distinctio, quos eos placeat illum quam 
                      dolore distinctio, quos eos placeat illum quam 
                      dolore distinctio, quos eos placeat illum quam 
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
            
            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover '>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Web Development</h4>
                            <p className='text-muted foreground'>
                                creating responsive websites and web applications with modern frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover '>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <PhoneIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Mobile App Development</h4>
                            <p className='text-muted foreground'>
                                creating responsive websites and web applications with modern frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover '>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Tangent className="h-6 w-6 text-primary"/>
                        </div>
                        <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Graphics Design</h4>
                            <p className='text-muted foreground'>
                                creating responsive websites and web applications with modern frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover '>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Cable className="h-6 w-6 text-primary"/>
                        </div>
                        <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Electrical and Computer Engineering Student</h4>
                            <p className='text-muted foreground'>
                                creating responsive websites and web applications with modern frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </div>
        </section>
    )
}