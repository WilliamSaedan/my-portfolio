import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Alphabet() {
    const [text, setText] = useState('');

    const validateText = (text) => {
        const regex = /[a-zA-Z0-9;:,?! ()<>.+=-]/g;
        const matches = text.match(regex);
        if (matches) {
            return matches.join('');
        }
        return '';
    };

    return (
        <>
            <Head>
                <title>William Saedan | Alphabet</title>
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
                <div className='mx-8 sm:mx-0 py-8 bg-white'>
                    <div className='p-8 sm:p-0 overflow-x-hidden'>
                        <textarea
                            className='bg-transparent text-[150px] xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl font-Wills resize-none focus:outline-none w-full h-screen p-8 overflow-x-auto overflow-y-hidden'
                            rows={5}
                            placeholder='The quick brown fox jumps over the lazy dog.'
                            value={text}
                            onChange={(e) =>
                                setText(validateText(e.target.value))
                            }
                        />
                    </div>
                </div>
                <Footer main={false} />
            </motion.div>
        </>
    );
}
