import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import Logo from './Logo';
import SubLogo from './SubLogo';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Header() {
    const headerRef = useRef();
    const isInView = useInView(headerRef, {
        once: false,
        amount: 'some',
        margin: '-50% 0px -50% 0px',
    });

    const [rowHeight, setRowHeight] = useState(400);

    const lgLayout = [
        { i: 'mainLogo', x: 0, y: 0, w: 2, h: 1, static: true },
        { i: 'nav', x: 2, y: 0, w: 1, h: 1, static: true },
        { i: 'cathphrase', x: 0, y: 1, w: 1, h: 1, static: true },
        { i: 'subLogo', x: 1, y: 1, w: 2, h: 1, static: true },
    ];

    const mdLayout = [
        { i: 'mainLogo', x: 0, y: 0, w: 2, h: 1, static: true },
        { i: 'cathphrase', x: 0, y: 2, w: 2, h: 1, static: true },
        { i: 'subLogo', x: 0, y: 1, w: 2, h: 1, static: true },
        { i: 'nav', x: 0, y: 0, w: 2, h: 1, static: false },
    ];

    const smLayout = [
        { i: 'mainLogo', x: 0, y: 0, w: 2, h: 1, static: true },
        { i: 'cathphrase', x: 0, y: 2, w: 2, h: 1, static: true },
        { i: 'subLogo', x: 0, y: 1, w: 2, h: 1, static: true },
        { i: 'nav', x: 0, y: 0, w: 2, h: 1, static: false },
    ];

    const logoVariants = {
        here: {
            x: '0%',
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: 'anticipate',
            },
        },
        away: {
            x: '-100%',
            opacity: 0,
            transition: {
                duration: 0.75,
                ease: 'anticipate',
            },
        },
    };

    const garnishVariants = {
        here: {
            x: '-15%',
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: 'backInOut',
            },
        },
        away: {
            x: '-100%',
            opacity: 0,
            transition: {
                duration: 0.75,
                ease: 'backInOut',
            },
        },
    };

    const subLogoVariants = {
        here: {
            x: '0%',
            opacity: 1,
            transition: {
                delay: 0.15,
                duration: 0.75,
                ease: 'anticipate',
            },
        },
        away: {
            x: '100%',
            opacity: 0,
            transition: {
                duration: 0.75,
                ease: 'anticipate',
            },
        },
    };

    const navVariants = {
        here: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'backInOut',
            },
        },
        away: {
            y: '-100%',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'backInOut',
            },
        },
    };

    const catchphraseVariants = {
        here: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.85,
                ease: 'backInOut',
            },
        },
        away: {
            y: '200%',
            opacity: 0,
            transition: {
                duration: 0.85,
                ease: 'backInOut',
            },
        },
    };

    const socialVariants = {
        here: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        away: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const socialItem = {
        here: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
            },
        },
        away: {
            x: -200,
            opacity: 0,
        },
    };

    return (
        <header
            className='h-[120%] w-full overflow-hidden snap-start lg:snap-none'
            ref={headerRef}>
            <motion.div>
                <ResponsiveGridLayout
                    className='sticky'
                    layouts={{ lg: lgLayout, sm: mdLayout, xs: smLayout }}
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 767,
                        xs: 480,
                        xxs: 0,
                    }}
                    cols={{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 2 }}
                    allowOverlap={true}
                    onBreakpointChange={(breakpoint, cols) => {
                        switch (breakpoint) {
                            case 'xs':
                                setRowHeight(300);
                                break;
                            case 'xxs':
                                setRowHeight(200);
                                break;
                            default:
                                setRowHeight(400);
                        }
                    }}
                    rowHeight={rowHeight}
                    margin={[25, 25]}>
                    <div
                        key='mainLogo'
                        className='w-full h-full'>
                        <motion.div
                            className='pb-8 h-full'
                            animate={!isInView ? 'away' : 'here'}
                            variants={logoVariants}>
                            <Link
                                href='/'
                                className='w-full h-full'>
                                <Logo className='w-full h-full' />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial='here'
                            animate={!isInView ? 'away' : 'here'}
                            variants={garnishVariants}
                            className='h-[25px] bg-black absolute -bottom-6 w-[135%]'></motion.div>
                    </div>
                    <div
                        key='nav'
                        className='w-full h-full lg:hidden lg:pointer-events-none'>
                        <motion.div
                            animate={!isInView ? 'away' : 'here'}
                            variants={navVariants}
                            className='absolute right-[15%] xl:right-0 p-10 flex flex-col justify-center items-end'>
                            <a
                                className='inline-block text-2xl sm:text-sm p-2 mx-2 hover:text-blue focus:text-blue transition-colors duration-200'
                                href='/#portfolio'>
                                see my work
                            </a>
                            <Link
                                className='inline-block text-2xl sm:text-sm p-2 mx-2 hover:text-red focus:text-red transition-colors duration-200'
                                href='/contact'>
                                say hi
                            </Link>
                        </motion.div>
                    </div>
                    <div
                        key='cathphrase'
                        className='w-full h-full text-2xl'>
                        <div className='h-full w-full'>
                            <motion.div
                                animate={!isInView ? 'away' : 'here'}
                                variants={catchphraseVariants}
                                className='absolute p-10 left-0'>
                                Hi there! I'm{' '}
                                <span className='text-yellow'>Will</span>
                                <span className='text-blue'>i</span>
                                <span className='text-red'>am</span> Saedan, a{' '}
                                <span className='text-blue'>designer</span> from{' '}
                                <span className='text-red'>Richmond, VA</span>.
                            </motion.div>
                            <motion.ul
                                initial='away'
                                animate={!isInView ? 'away' : 'here'}
                                variants={socialVariants}
                                className='pl-10 absolute bottom-0 flex gap-6 text-xl'>
                                <motion.li variants={socialItem}>
                                    <a
                                        className='hover:text-yellow focus:text-yellow transition-colors duration-200'
                                        href='https://www.linkedin.com/in/william-saedan/'>
                                        <SiLinkedin />
                                    </a>
                                </motion.li>
                                <motion.li variants={socialItem}>
                                    <a
                                        className='hover:text-blue focus:text-blue transition-colors duration-200'
                                        href='https://github.com/WilliamSaedan'>
                                        <SiGithub />
                                    </a>
                                </motion.li>
                                <motion.li variants={socialItem}>
                                    <a
                                        className='hover:text-red focus:text-red transition-colors duration-200'
                                        href='mailto:saedanwilliam@gmail.com'>
                                        <SiGmail />
                                    </a>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </div>
                    <div
                        key='subLogo'
                        className='w-full h-full'>
                        <motion.div
                            className='pt-8 h-full'
                            animate={!isInView ? 'away' : 'here'}
                            variants={subLogoVariants}>
                            <a
                                href='/#portfolio'
                                className='w-full h-full'>
                                <SubLogo className='w-full h-full' />
                            </a>
                        </motion.div>
                    </div>
                </ResponsiveGridLayout>
            </motion.div>
        </header>
    );
}
