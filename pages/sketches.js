import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import SketchCard from '../components/SketchCard';

export default function Sketches() {
    const sketchURLs = [
        '/assets/images/sketches/sketch-1.png',
        '/assets/images/sketches/sketch-2.png',
        '/assets/images/sketches/sketch-3.png',
        '/assets/images/sketches/sketch-4.png',
        '/assets/images/sketches/sketch-5.png',
        '/assets/images/sketches/sketch-6.png',
        '/assets/images/sketches/sketch-7.png',
        '/assets/images/sketches/sketch-8.png',
        '/assets/images/sketches/sketch-9.png',
        '/assets/images/sketches/sketch-10.png',
        '/assets/images/sketches/sketch-11.png',
        '/assets/images/sketches/sketch-12.png',
        '/assets/images/sketches/sketch-13.png',
        '/assets/images/sketches/sketch-14.png',
        '/assets/images/sketches/sketch-15.png',
        '/assets/images/sketches/sketch-16.png',
        '/assets/images/sketches/sketch-17.png',
        '/assets/images/sketches/sketch-18.png',
    ];

    return (
        <>
            <Head>
                <title>William Saedan | Sketch</title>
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>
            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{
                    ease: 'anticipate',
                }}>
                <Nav />

                <div className='flex items-center justify-center flex-wrap'>
                    {sketchURLs.map((url, index) => (
                        <SketchCard
                            key={index}
                            src={url}
                        />
                    ))}
                </div>

                <Footer main={false} />
            </motion.div>
        </>
    );
}
