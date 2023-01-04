import { motion } from 'framer-motion';
import Head from 'next/head';
import DisplayPage from '../components/DisplayPage';
import Footer from '../components/Footer';

export default function Boxing() {
    const subtitle =
        'A fighting game built in the Unity game engine about boxes that box.';

    const description =
        'A passion project of mine to develop a fighting game that makes sense. In my personal experience, I have found that, for beginners, fighting games struggle with visual clarity. "Just Boxing" aims to solve this problem by strictly adhering to simple, visually clear mechanics. All damage in the game is determined by the relative speed and angle of the boxes on impact and nothing else. Common mechanics in fighting games such as blocking and countering natually emerge from these rules. For example, blocking is achieved by matching the angle of your opponents attack such that their corner does not hit one of your sides. The result is a visually clear fighting game that is easy to learn yet allows for creativity.';

    return (
        <>
            <Head>
                <title>William Saedan | Boxing</title>
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
                    title='Just Boxing'
                    subtitle={subtitle}
                    desc={description}
                    icon={<h1 className='text-[150px] cursor-default'>tbd</h1>}
                    color='bg-blue'>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className='w-full h-full object-cover'>
                        <source
                            src='https://d2pf2o8cr3c661.cloudfront.net/videos/box.mp4'
                            type='video/mp4'
                        />
                    </video>
                </DisplayPage>
                <Footer main={false} />
            </motion.div>
        </>
    );
}
