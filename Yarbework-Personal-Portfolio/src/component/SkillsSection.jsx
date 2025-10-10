import { useState } from "react";
import {cn} from '@/lib/utils'

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Bootstarp", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Midea Query", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "MySQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "Canva", level: 65, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Adobe Photoshop", level: 80, category: "tools" },
  { name: "Capcut", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const  filteredSkills = skills.filter(
        (skill) => activeCategory === 'all' || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key)=>(
                        <button 
                            key={key} 
                            onClick={()=> setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-color duration-300 capitalize ",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="flex">                                          
                                <div className="w-full mt-2 h-2 rounded-full overflow-hidden">
                                    <div 
                                            className="bg-primary pt-2 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                            style={{width: skill.level + "%"}}
                                    />
                                </div>
                                <div className="text-right">
                                        <span className="text-sm text-muted-foreground">{ skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    ) 
}