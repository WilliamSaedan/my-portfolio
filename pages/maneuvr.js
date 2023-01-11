import { motion } from 'framer-motion';
import Head from 'next/head';
import { SiGithub } from 'react-icons/si';
import DisplayPage from '../components/DisplayPage';
import Footer from '../components/Footer';

export default function ManeuVR() {
    const subtitle =
        'A virtual reality project developed in Unity for the SteamVR and Oculus platform focused on different methodologies of locomotion';
    const description =
        "For my capstone project in the Center for Information Technology, I aimed to research and develop sensible, enjoyable, and comfortable methods of movement in VR. Each form of locomotion was carefully crafted to have a connection to the user's physical movement in order to reduce motion sickness and increase engagement.";
    const links = [
        <>
            <a href='https://github.com/WilliamSaedan/ManeuVR'>
                <SiGithub className='text-4xl sm:text-xl hover:text-yellow transition-colors duration-300' />
            </a>
        </>,
    ];

    return (
        <>
            <Head>
                <title>William Saedan | ManeuVR</title>
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
                <DisplayPage
                    title='ManeuVR'
                    subtitle={subtitle}
                    desc={description}
                    icons={links}
                    color='bg-yellow'>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className='w-full h-full object-cover'>
                        <source
                            src='https://d2pf2o8cr3c661.cloudfront.net/videos/maneuvr-showcase.mp4'
                            type='video/mp4'
                        />
                    </video>
                </DisplayPage>
                <Footer main={false} />
            </motion.div>
        </>
    );
}
