import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AnimatedText from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ main = true }) {
    const footerRef = useRef();
    const isInView = useInView(footerRef, {
        once: false,
        amount: 0.5,
    });

    const footerWords = [' say hi?', ' add more?', ' team up?'];
    const [footerIdx, setFooterIdx] = useState(0);
    useEffect(() => {
        if (!isInView) return;
        const footerInterval = setInterval(() => {
            setFooterIdx((prev) => (prev + 1) % footerWords.length);
        }, 2500);
        return () => clearInterval(footerInterval);
    }, [isInView]);

    const logoVariants = {
        here: {
            x: '0%',
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'backInOut',
            },
        },
        away: {
            x: '-100%',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'backInOut',
            },
        },
    };

    const garnishVariants = {
        here: {
            x: '0%',
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        away: {
            x: '100%',
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <footer
            ref={footerRef}
            className={`${
                main ? 'h-full snap-end sm:snap-none' : 'h-64'
            } flex flex-col justify-end overflow-hidden`}>
            {main ? (
                <div>
                    <div className='flex align-middle items-center h-screen'>
                        <span className='mx-10'>
                            <motion.span
                                initial={{ x: '-100%', opacity: 0 }}
                                animate={isInView ? 'here' : 'away'}
                                variants={logoVariants}
                                className='inline-block'>
                                <Link
                                    className='group inline-flex'
                                    href='/'>
                                    <span className='text-bottom font-ConstantiaBold text-[300px] xl:text-[220px] md:text-[11.5rem] sm:text-8xl hover:text-yellow group-focus:text-yellow transition-colors duration-200'>
                                        WiLL
                                    </span>
                                </Link>
                            </motion.span>
                            <motion.span
                                initial={{ x: '100%', opacity: 0 }}
                                animate={isInView ? 'here' : 'away'}
                                variants={garnishVariants}
                                className='text-[165px] xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl inline-block'>
                                <span className='xl:ml-8 sm:ml-2'>&nbsp;you</span>
                                <Link
                                    className='sm:block hover:text-red focus:text-red whitespace-pre-line transition-colors duration-200'
                                    href='/contact'>
                                    <AnimatedText
                                        words={footerWords}
                                        idx={footerIdx}
                                    />
                                </Link>
                            </motion.span>
                        </span>
                    </div>
                </div>
            ) : (
                ''
            )}
            <div>
                <ul className='flex w-full font-Constantia text-sm py-8 px-16 sm:px-8 md:flex-col md:gap-8 sm:gap-4'>
                    <li className='mr-20 sm:mr-0'>
                        <span className='mr-10 inline-block min-w-[50px] text-red'>
                            Social
                        </span>
                        <span className='group inline-block relative'>
                            <a href='https://www.linkedin.com/in/william-saedan/'>
                                LinkedIn
                                <div className='h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500' />
                            </a>
                        </span>
                    </li>
                    <li className='mr-20 sm:mr-0'>
                        <span className='mr-10 inline-block  min-w-[50px] text-yellow'>
                            Porfolio
                        </span>
                        <span className='group inline-block relative'>
                            <a href='https://github.com/WilliamSaedan'>
                                GitHub
                                <div className='h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500' />
                            </a>
                        </span>
                    </li>
                    <li className='mr-20 sm:mr-0'>
                        <span className='mr-10 inline-block  min-w-[50px] text-blue'>
                            Email
                        </span>
                        <span>
                            <button
                                className='group relative'
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        'saedanwilliam@gmail.com'
                                    )
                                }>
                                saedanwilliam@gmail.com
                                <div className='h-[2px] bg-black w-0 group-hover:w-full transition-all duration-500' />
                            </button>
                        </span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
