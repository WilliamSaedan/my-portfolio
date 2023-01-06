import { motion, useInView, useScroll, useVelocity } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import AnimatedText from './AnimatedText';
import FocusSection from './FocusSection';
import Alphabet from './thumbnail/Alphabet';
import Box from './thumbnail/Box';
import ColorlessGreen from './thumbnail/ColorlessGreen';
import ManeuVR from './thumbnail/ManeuVR';
import Sketches from './thumbnail/Sketches';
import Teacher from './thumbnail/Teacher';

export default function Porfolio() {
    const [sectionNames, setDefaultWords] = useState([
        ' UX designer',
        ' developer',
        'n illustrator',
    ]);
    const [sectionIdx, setSectionIdx] = useState(-1);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const sectionRef = useRef();
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 'some',
        margin: '50% 0px -50% 0px',
    });

    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef();
    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight);
    });

    const logoVariants = {
        here: {
            x: '0%',
            opacity: 1,
            transition: {
                delay: 0.25,
                duration: 0.5,
                ease: 'anticipate',
            },
        },
        away: {
            x: '-100%',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'anticipate',
            },
        },
    };

    const garnishVariants = {
        here: {
            y: '0%',
            opacity: 1,
            transition: {
                delay: 0.25,
                duration: 0.25,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
        away: {
            y: '25%',
            opacity: 0,
            transition: {
                duration: 0.25,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    const underlineVariants = {
        here: {
            x: '-20%',
            y: '0%',
            transition: {
                duration: 0.5,
                ease: 'anticipate',
            },
        },
        away: {
            x: '-100%',
            y: '0%',
            transition: {
                duration: 0.5,
                ease: 'anticipate',
            },
        },
    };

    return (
        <motion.div
            id='portfolio'
            className='p-8 sm:p-0 h-full'
            ref={sectionRef}>
            <header
                ref={headerRef}
                className='sticky z-10 top-0 md:h-fit md:mb-0'>
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={isInView ? 'here' : 'away'}
                    variants={logoVariants}
                    className='inline-block h-full'>
                    <Link href='/'>
                        <div className='text-[150px] md:text-[110px] leading-none z-10'>
                            <span className='text-blue'> I</span>
                            <span className='text-red'> AM</span>
                        </div>
                    </Link>
                </motion.div>
                <span className='whitespace-nowrap sm:block'>
                    <motion.div
                        initial={{ y: '25%', opacity: 0 }}
                        animate={isInView ? 'here' : 'away'}
                        variants={garnishVariants}
                        className='inline-block text-[110px] lg:text-[85px] md:text-[60px] pl-10 sm:pl-4'>
                        {' '}
                        a
                    </motion.div>
                    <AnimatedText
                        words={sectionNames}
                        idx={sectionIdx}
                        className='text-[110px] lg:text-[85px] md:text-[60px]'
                    />
                </span>
                <motion.div
                    className='h-[25px] bg-black w-1/3'
                    initial={{ x: '-100%', y: '0%' }}
                    animate={isInView ? 'here' : 'away'}
                    variants={underlineVariants}
                />
            </header>
            <div className='flex flex-col pb-28'>
                <motion.div
                    whileInView={() => {
                        if (scrollVelocity.getVelocity() < 0) setSectionIdx(0);
                        if (scrollVelocity.getVelocity() > 0) setSectionIdx(-1);
                    }}
                    viewport={{ margin: `${headerHeight}px 0px 0px 0px` }}
                />
                <FocusSection
                    title='ManeuVR'
                    subText='A virtual reality demo that explores various methodologies for VR locomotion.'
                    color='yellow'
                    direction='left'
                    href='/maneuvr'
                    offset={headerHeight}
                    width={60}>
                    <ManeuVR />
                </FocusSection>
                <FocusSection
                    title='Glow & Grow'
                    subText='A peer review platform for teachers to share and receive feedback on their lectures.'
                    color='yellow'
                    direction='right'
                    href='/teacher'
                    offset={headerHeight}
                    height={85}>
                    <Teacher />
                </FocusSection>
                <motion.div
                    whileInView={() => {
                        if (scrollVelocity.getVelocity() < 0) setSectionIdx(1);
                        if (scrollVelocity.getVelocity() > 0) setSectionIdx(0);
                    }}
                    viewport={{ margin: `${headerHeight}px 0px 0px 0px` }}
                />
                <FocusSection
                    title='Just Boxing'
                    subText='A fighting game about boxes that box.'
                    color='blue'
                    direction='top'
                    height={50}
                    width={75}
                    offset={headerHeight}
                    href='/box'>
                    <Box />
                </FocusSection>
                <FocusSection
                    title='Colorless Green'
                    subText='An API that produces sentences according to a randomly generated sentence structure populated by words randomly picked from a dictionary.'
                    color='blue'
                    direction='left'
                    offset={headerHeight}
                    href='/colorless-green'>
                    <ColorlessGreen />
                </FocusSection>
                <motion.div
                    whileInView={() => {
                        if (scrollVelocity.getVelocity() < 0) setSectionIdx(2);
                        if (scrollVelocity.getVelocity() > 0) setSectionIdx(1);
                    }}
                    viewport={{ margin: `${headerHeight}px 0px 0px 0px` }}
                />
                <FocusSection
                    title='Sketches'
                    subText='A collection of some of my sketches.'
                    color='red'
                    direction='right'
                    offset={headerHeight}
                    href='/sketches'>
                    <Sketches />
                </FocusSection>
                <FocusSection
                    title='Alphabet Soup'
                    subText='A font I designed taking inspiration from the architecture of the Art Nouveau movement.'
                    color='red'
                    direction='left'
                    offset={headerHeight}
                    width={60}
                    href='/alphabet'>
                    <Alphabet />
                </FocusSection>
            </div>
        </motion.div>
    );
}
