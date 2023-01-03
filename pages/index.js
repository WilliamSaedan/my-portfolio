import Head from 'next/head';
import Header from '../components/Header';
import Porfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
                ease: 'anticipate',
            }}>
            <Head>
                <title>William Saedan</title>
                <meta
                    name='description'
                    content='I am Will'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>

            <Header />
            <Porfolio />
            <Footer main={true} />
        </motion.div>
    );
}
