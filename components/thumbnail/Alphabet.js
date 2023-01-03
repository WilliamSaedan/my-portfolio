import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Alphabet() {
    const [isHovered, setIsHovered] = useState(false);

    const alphabetAddins = [
        '/assets/images/font/font-1.png',
        '/assets/images/font/font-2.png',
        '/assets/images/font/font-3.png',
        '/assets/images/font/font-4.png',
        '/assets/images/font/font-5.png',
        '/assets/images/font/font-6.png',
        '/assets/images/font/font-7.png',
        '/assets/images/font/font-8.png',
    ];

    const colorVariants = {
        hidden: {
            opacity: 0,
        },
        showing: {
            opacity: 1,
        },
    };

    return (
        <motion.div
            onHoverStart={() => {
                setIsHovered(true);
            }}
            onHoverEnd={() => {
                setIsHovered(false);
            }}
            className='relative h-full w-full'>
            <div className='flex justify-center items-center h-full flex-shrink-0'>
                <img
                    draggable='false'
                    src='/assets/images/font/font-empty.png'
                    className='absolute h-full w-full object-cover'
                />
                <motion.div
                    className='absolute w-full h-full'
                    initial='hidden'
                    animate={isHovered ? 'showing' : 'hidden'}
                    variants={{
                        hidden: {},
                        showing: {},
                    }}
                    transition={{
                        staggerChildren: 0.1,
                    }}>
                    {alphabetAddins.map((alphabetAddin, index) => (
                        <motion.img
                            key={index}
                            variants={colorVariants}
                            src={alphabetAddin}
                            transition={{ duration: 0 }}
                            className='absolute h-full w-full object-cover'
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
