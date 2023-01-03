import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Box() {
    const [isHovered, setIsHovered] = useState(false);

    const screenVariants = {
        unhovered: {
            scale: 1,
        },
        hovered: {
            scale: 1.2,
        },
    };
    const leftVariants = {
        unhovered: {
            x: -40,
            y: -20,
            transition: {
                ease: 'easeOut',
            },
        },
        hovered: {
            x: 0,
            y: 0,
            transition: {
                ease: 'backInOut',
            },
        },
    };
    const rightVariants = {
        unhovered: {
            x: 40,
            y: 40,
            transition: {
                ease: 'easeOut',
            },
        },
        hovered: {
            x: 0,
            y: 0,
            transition: {
                ease: 'backInOut',
            },
        },
    };

    return (
        <motion.div
            initial='unhovered'
            animate={isHovered ? 'hovered' : 'unhovered'}
            variants={screenVariants}
            transition={{
                ease: 'anticipate',
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
                className='absolute h-full w-full object-cover overflow-visible'
                src='/assets/images/boxing/box-bg.png'
            />
            <motion.img
                initial='unhovered'
                animate={isHovered ? 'hovered' : 'unhovered'}
                variants={leftVariants}
                className='absolute h-full w-full object-cover overflow-visible'
                src='/assets/images/boxing/box-1.png'
            />
            <motion.img
                initial='unhovered'
                animate={isHovered ? 'hovered' : 'unhovered'}
                variants={rightVariants}
                className='absolute h-full w-full object-cover overflow-visible'
                src='/assets/images/boxing/box-2.png'
            />
        </motion.div>
    );
}
