import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export default function AnimatedText({
    words = [],
    idx = 0,
    className,
    ...props
}) {
    const selectedWord = words[idx] ? words[idx] : '';
    const twClasses = twMerge(`
        inline-block
        ${className ?? ''}
    `);

    const test = {
        hidden: {},
        visible: {},
        exit: {},
    };

    const wordAnimation = {
        hidden: {
            opacity: 0,
            y: '25%',
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
        exit: {
            opacity: 0,
            y: '-25%',
            transition: {
                duration: 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <div className={twClasses}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={selectedWord ? selectedWord : 'empty'}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    {...props}>
                    {selectedWord.split(' ').map((word, i) => {
                        return (
                            <motion.span
                                key={i}
                                variants={test}
                                transition={{
                                    delayChildren: i * 0.15,
                                    staggerChildren: 0.025,
                                }}
                                className='inline-block mr-8 md:mr-4'>
                                {word.split('').map((letter, j) => {
                                    return (
                                        <motion.span
                                            key={j}
                                            variants={wordAnimation}
                                            transition={{
                                                duration: 1,
                                                ease: [0.2, 0.65, 0.3, 0.9],
                                            }}
                                            className='inline-block'>
                                            {letter}
                                        </motion.span>
                                    );
                                })}
                            </motion.span>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
