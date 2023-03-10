import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import {
    RiCheckboxCircleFill,
    RiErrorWarningFill,
    RiExternalLinkFill,
    RiFileCopyLine,
    RiTerminalFill,
} from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColoredText from '../components/coloredText';
import DisplayPage from '../components/DisplayPage';
import Footer from '../components/Footer';

export default function ColorlessGreen() {
    const subtitle =
        'A serverless API hosted on AWS Lambda that generates random text according to an algorithm designed to loosely follow the rules of English grammar';
    const description =
        'The API is powered by an algorithm written in Python which generates random sentences adhering to the basic rules of sentence structure (i.e., placing a noun before a verb and connecting adjectives with the nouns they modify). The output is reminiscent of the sentence "Colorless green ideas sleep furiously" coined by Noam Chomsky, with which he highlights that a grammatically correct sentence can still lack meaning.';
    const [colorlessSample, setColorlessSample] = useState('');
    const toastRef = useRef();

    const getText = async () => {
        fetch(
            'https://2tcsy75xbl.execute-api.us-east-1.amazonaws.com/default/colorlessGreen?length=1',
            { method: 'GET' }
        )
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                setColorlessSample(data);
            });
    };

    useEffect(() => {
        setColorlessSample('Colorless green ideas sleep furiously.');
    }, []);

    const links = [
        <>
            <a href='https://github.com/WilliamSaedan/colorless-green'>
                <SiGithub className='text-4xl sm:text-xl hover:text-yellow transition-colors duration-300' />
            </a>
        </>,
        <>
            <a href='https://2tcsy75xbl.execute-api.us-east-1.amazonaws.com/default/colorlessGreen'>
                <RiExternalLinkFill className='text-4xl sm:text-xl hover:text-red transition-colors duration-300' />
            </a>
        </>,
    ];

    return (
        <>
            <Head>
                <title>William Saedan | Colorless Green</title>
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
                    title='Colorless Green'
                    subtitle={subtitle}
                    desc={description}
                    icons={links}
                    color='bg-white'>
                    <div isDraggable={false}>
                        <p className='p-8 text-7xl sm:text-3xl'>
                            <ColoredText text={colorlessSample}></ColoredText>
                        </p>
                        <div className='absolute flex gap-4 bottom-0 right-0 p-8 text-4xl sm:text-xl bg-white'>
                            <button
                                className='hover:text-green focus:text-green transition-colors duration-200'
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        colorlessSample
                                    );
                                    if (!toast.isActive(toastRef.current)) {
                                        toastRef.current = toast(
                                            'Copied to clipboard!',
                                            {
                                                bodyClassName:
                                                    'text-lg font-Aux',
                                                className:
                                                    '!bg-transparent !text-black !rounded-none !shadow-none',
                                            }
                                        );
                                    }
                                }}>
                                <RiFileCopyLine />
                            </button>
                            <button
                                className='hover:text-green focus:text-green transition-colors duration-200'
                                onClick={() => {
                                    toastRef.current = toast.promise(
                                        getText,
                                        {
                                            pending: {
                                                render() {
                                                    return ' ';
                                                },
                                            },
                                            success: {
                                                render() {
                                                    return ' ';
                                                },
                                                icon: (
                                                    <RiCheckboxCircleFill className='text-green' />
                                                ),
                                            },
                                            error: {
                                                render() {
                                                    return 'Error generating text.';
                                                },
                                                icon: (
                                                    <RiErrorWarningFill className='text-red' />
                                                ),
                                            },
                                        },
                                        {
                                            bodyClassName: 'text-xl font-Aux',
                                            className:
                                                '!bg-transparent !text-black !rounded-none !shadow-none',
                                        }
                                    );
                                }}>
                                <RiTerminalFill />
                            </button>
                        </div>
                        <ToastContainer
                            limit={1}
                            position='bottom-left'
                            autoClose={300}
                            closeOnClick
                            newestOnTop={true}
                            pauseOnHover={false}
                            hideProgressBar
                            closeButton={false}
                            className='!translate-y-[25px]'
                        />
                    </div>
                </DisplayPage>
                <Footer main={false} />
            </motion.div>
        </>
    );
}
