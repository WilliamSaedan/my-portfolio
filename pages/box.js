import { motion } from 'framer-motion';
import Head from 'next/head';
import DisplayPage from '../components/DisplayPage';
import Footer from '../components/Footer';

export default function Boxing() {
    const subtitle =
        'A fighting game built in the Unity game engine about boxes that box.';

    const description =
        'A passion project of mine to develop a fighting game that makes sense. I\'ve noticed that many fighting games can often be challenging for new players to learn due to a lack of visual clarity. "Just Boxing" aims to solve this problem by strictly adhering to simple, visually clear mechanics. All damage in the game is solely determined by the relative speed and angle of the boxes on impact. By adhering to these mechanics, it leads to a natural emergence of mechanics commonly found in fighting games such as blocking and countering. This results in a visually clear and easily understandable fighting game that still allows for creative gameplay.'
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
