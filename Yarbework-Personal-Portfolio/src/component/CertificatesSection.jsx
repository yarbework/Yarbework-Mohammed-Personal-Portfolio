import { motion } from 'framer-motion';

const certificates = [
    { 
        id: 1, 
        title: "Introduction to Web Development", 
        description: "Completed a comprehensive course on the fundamentals of HTML, CSS, and JavaScript.", 
        image: "/projects/certificate-1.jpeg" 
    },
    { 
        id: 2, 
        title: "Front-End Development with React", 
        description: "Mastered building dynamic, responsive user interfaces with the React framework.", 
        image: "/projects/certificate-2.png" 
    },
    { 
        id: 3, 
        title: "Graphics Design Essentials", 
        description: "Gained proficiency in design principles and tools like Adobe Photoshop and Illustrator.", 
        image: "/projects/certificate-1.jpeg" 
    },
    { 
        id: 4, 
        title: "Professional Video Editing", 
        description: "Learned narrative and technical editing techniques using Adobe Premiere Pro.", 
        image: "/projects/certificate-1.jpeg" 
    },
];

const TimelineItem = ({ certificate, index }) => {
    const isOdd = index % 2 !== 0;

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            className="mb-8 flex justify-between items-center w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
        >
            {/* The empty spacer div */}
            <div className={`order-1 md:w-5/12 ${isOdd ? 'md:order-3' : ''}`}></div>

            {/* The central timeline axis point */}
            <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg ">{index + 1}</h1>
            </div>
            

            <div className={`order-1 bg-card rounded-lg shadow-lg w-10/12 md:w-5/12 px-6 py-4 ${isOdd ? 'md:order-1' : ''}`}>
                <div className="group overflow-hidden">
                    <div className="h-48 mb-4 overflow-hidden rounded-md">
                        <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="mb-3 font-bold text-primary text-xl">{certificate.title}</h3>
                    <p className="text-sm leading-snug tracking-wide text-prumary-foreground/90">
                        {certificate.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};


export const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold ">
                        My <span className="text-primary">Certificates & Milestones</span>
                    </h2>
                    <p className="mt-5 text-center max-w-2xl mx-auto">
                        Each certificate represents a milestone in my learning journey and professional development, building the skills necessary to create impactful applications.
                    </p>
                </div>

                <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">

                    <div className="absolute h-full border-2 border-blue-200 left-8 md:left-1/2"></div>
                    
                    {certificates.map((certificate, index) => (
                        <TimelineItem key={certificate.id} certificate={certificate} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};