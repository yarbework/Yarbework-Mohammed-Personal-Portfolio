// src/components/landing/CertificateCard.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Animation variants for the card itself (fade in from bottom)
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const CertificateCard = ({ certificate }) => {
    const ref = useRef(null);

    // This hook tracks the scroll position relative to this component
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Animate when the card is in the viewport
    });

    // This creates the parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            className="group bg-secondary/90 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
        >
            <div className="h-48 overflow-hidden relative">
                <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ y }} // Apply the parallax animation
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl text-primary font-bold mb-2">{certificate.title}</h3>
                <p className="text-sm mb-4">{certificate.description}</p>
            </div>
        </motion.div>
    );
};