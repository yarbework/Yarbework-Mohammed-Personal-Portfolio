import {ExternalLink, Github} from 'lucide-react';
const projects = [
    {
        id: 1,
        title: "E-commerce PLatform",
        description: " Full-featured e-commerce platform with user authentication.",
        image: "/projects/project-1.jpeg",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://ketemafarm.vercel.app/"
    },
    {
        id: 2,
        title: "Exam Website",
        description: " A beautiful and dynamic website for Quiz Taking with React and Tailwind.",
        image: "/projects/project-2.jpg",
        tags: ["React", "TailwindCSS", "NodeJs" ],
        demoUrl: "http://172.29.32.1:5173/"
    },
    {
        id: 3,
        title: "Freshman Application",
        description: " Educational Application for Ethopian Freshman Students with MERN stack with React native",
        image: "/projects/project-3.png",
        tags: ["React-Native", "TailwindCSS", "NodeJs" ],
        demoUrl: "https://sink-academy.vercel.app"
    },
    {
        id: 4,
        title: "Landing Page",
        description: " A beautiful landing page app using React and Tailwind.",
        image: "/projects/project-4.jpeg",
        tags: ["React", "TailwindCSS", "NodeJs" ],
        demoUrl: "https://sink-academy.vercel.app"
    }
]
export const ProjectsSection = () =>{
    return(
        <section id="projects" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. 
                    Each Project was carefully crafted with attention to detail,
                     performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
                    {projects.map((project, key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-110 " />
                            </div>
                            <div className="p-6">

                                <h3 className="text-xl text-primary font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=> (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border border-primary bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a 
                                        href={project.demoUrl}  
                                        target='_blank'
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <div className='text-center mt-12'>
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target='_blank'
                        href="https://github.com/yarbework">
                        Check My Github <Github size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}