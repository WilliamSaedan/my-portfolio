import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ManeuVR() {
    const [isHovered, setIsHovered] = useState(false);

    const bgVariants = {
        unhovered: {
            scale: 1,
        },
        hovered: {
            scale: 1.2,
        },
    };
    const leftVariants = {
        unhovered: {
            scale: 1,
            rotate: 0,
        },
        hovered: {
            scale: 0.75,
            rotate: -5,
        },
    };
    const rightVariants = {
        unhovered: {
            scale: 1,
            rotate: 0,
        },
        hovered: {
            scale: 0.95,
            rotate: 5,
        },
    };

    return (
        <motion.div
            initial='unhovered'
            variants={{
                unhovered: {},
                hovered: {},
            }}
            onHoverStart={() => {
                setIsHovered(true);
            }}
            onHoverEnd={() => {
                setIsHovered(false);
            }}
            className='flex justify-center items-center h-full flex-shrink-0'>
            <motion.img
                initial='unhovered'
                animate={isHovered ? 'hovered' : 'unhovered'}
                variants={bgVariants}
                transition={{
                    duration: 1,
                    ease: 'anticipate',
                }}
                className='absolute h-[102%] w-[105%] object-cover overflow-visible'
                src='/assets/images/maneuvr/maneuvr-bg.png'
            />
            <motion.img
                initial='unhovered'
                animate={isHovered ? 'hovered' : 'unhovered'}
                variants={leftVariants}
                transition={{
                    duration: 0.5,
                }}
                className='absolute h-full w-full object-cover overflow-visible'
                src='/assets/images/maneuvr/maneuvr-1.png'
            />
            <motion.img
                initial='unhovered'
                animate={isHovered ? 'hovered' : 'unhovered'}
                variants={rightVariants}
                transition={{
                    duration: 0.75,
                }}
                className='absolute h-full w-full object-cover overflow-visible'
                src='/assets/images/maneuvr/maneuvr-2.png'
            />
        </motion.div>
    );
}
