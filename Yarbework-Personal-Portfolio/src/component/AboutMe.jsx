import {cn} from '@/lib/utils';
import {Cable, Code, PhoneIcon, Tangent} from 'lucide-react'
import image from '../assets/yarbeworkMohammed.jpeg'

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
            <img src={image} alt="yarbework-Mohammed" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg" />

                <h3 className="text-2xl font-semibold">Passionate Web and Mobile App developer</h3>
                <p className="text-muted-foreground text-justify mt-4">
                    I am a passionate and mission-driven Full-Stack Developer 
                    with a specialization in the JavaScript ecosystem, 
                    including React, React Native, and Node.js. 
                    
                </p>
                <p className="text-muted-foreground text-justify mt-4">
                   My focus is on architecting and building seamless 
                    digital experiences that are not only beautiful and 
                    intuitive but are also engineered for performance and 
                    scalability. For me, technology is a powerful tool for
                     problem-solving, and I am dedicated to using my 
                     skills to create applications that provide tangible, 
                     real-world value.
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
                                Developing cross-platform mobile applications for both iOS and Android using React Native. 
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
                            <h4 className='font-semibold text-lg'>Graphics Design and Video Editing</h4>
                            <p className='text-muted foreground'>
                                Bringing ideas to life through compelling visual media. 
                                Skilled in graphic design and video editing to create engaging content.
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
                            <h4 className='font-bold text-md'>Electrical and Computer Engineering Student</h4>
                            <p className='text-muted foreground'>
                                Grounded in a rigorous academic foundation from AASTU. 
                                Applying engineering principles to software development for innovative solutions.
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