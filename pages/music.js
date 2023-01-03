import DisplayPage from '../components/DisplayPage';
import Footer from '../components/Footer';
import { SiGithub } from 'react-icons/si';
import { RiVolumeMuteFill, RiVolumeUpFill } from 'react-icons/ri';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Music() {
    const description =
        'A virtual reality project developed in Unity for the SteamVR platform focused on different methodologies of locomotion.';

    const [muted, setMuted] = useState(true);

    return (
        <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{
                ease: 'anticipate',
            }}>
            <DisplayPage
                title='Sound Platformer'
                desc={description}
                icon={<SiGithub className='text-[150px]' />}
                href='https://github.com/WilliamSaedan/Sound-Platformer'
                color='bg-blue'>
                <video
                    playsInline
                    autoPlay
                    muted={muted}
                    loop
                    className='w-full h-full object-cover'>
                    <source
                        src='/assets/videos/moMusic.mp4'
                        type='video/mp4'
                    />
                </video>
                <div className='absolute bottom-0 right-0'>
                    <button
                        onClick={() => setMuted(!muted)}
                        className='hover:text-white p-4 m-4 text-2xl transition-color duration-200'>
                        {muted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />}
                    </button>
                </div>
            </DisplayPage>
            <Footer main={false} />
        </motion.div>
    );
}
