import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedText from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
    const [backIdx, setBackIdx] = useState(-1);

    const backVariants = {
        unhovered: {
            x: 0,
        },
        hovered: {
            x: 35,
        },
    };

    return (
        <nav className='flex w-full gap-8 p-8 place-content-between text-2xl'>
            <Link
                href='/'
                className='h-full'>
                <motion.div
                    onHoverStart={() => {
                        setBackIdx(0);
                    }}
                    onHoverEnd={() => {
                        setBackIdx(-1);
                    }}
                    whileHover='hovered'>
                    <AnimatedText
                        words={['<']}
                        idx={backIdx}
                        className='absolute'
                    />
                    <motion.div
                        initial='unhovered'
                        animate={backIdx >= 0 ? 'hovered' : 'unhovered'}
                        variants={backVariants}
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 20,
                        }}
                        className='inline-block'>
                        back
                    </motion.div>
                </motion.div>
            </Link>
        </nav>
    );
}
