import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Sketches() {
    const sketchURLs = [
        '/assets/images/sketches/sketch-1.png',
        '/assets/images/sketches/sketch-2.png',
        '/assets/images/sketches/sketch-3.png',
        '/assets/images/sketches/sketch-7.png',
        '/assets/images/sketches/sketch-9.png',
        '/assets/images/sketches/sketch-13.png',
    ];

    const [sketchIdx, setSketchIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const draw = {
        hidden: {
            pathLength: 1,
            transition: {
                duration: 0.85,
            },
        },
        visible: {
            pathLength: 0,
            opacity: 1,
            transition: {
                duration: 0.85,
                pathLength: {
                    type: 'spring',
                    bounce: 0,
                },
            },
        },
    };

    useEffect(() => {
        if (!isHovered) return;
        const interval = setInterval(() => {
            setIsHovered(false);
            setSketchIdx((sketchIdx + 1) % sketchURLs.length);
        }, 850);
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <motion.div
            onHoverStart={() => {
                setIsHovered(true);
            }}
            onHoverEnd={() => {
                setIsHovered(false);
            }}
            className='flex items-center justify-center w-full h-full'>
            <motion.img
                className='absolute w-full h-full object-cover object-top'
                src={sketchURLs[sketchIdx]}
            />
            <motion.svg
                initial='visible'
                animate={isHovered ? 'hidden' : 'visible'}
                viewBox='0 5 373.45 580.04'
                preserveAspectRatio={'none'}
                width={'100%'}
                height={'100%'}
                className='stroke-[#fff] stroke-[100] fill-none z-[5]'>
                <motion.polyline
                    variants={draw}
                    points='401.3 560.04 -50 530.26 377.56 459.05 -60.29 447.19 396.55 363.32 -58.7 344.33 423.45 254.13 -54.75 246.22 383.89 159.98 -64.24 142.57 402.09 54.75 -57.12 25'
                />
            </motion.svg>
        </motion.div>
    );
}
