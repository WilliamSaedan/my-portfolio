import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Contact() {
    const [post, setPost] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
    });

    const [triedSubmit, setTriedSubmit] = useState(false);
    const [errorState, setErrorState] = useState({
        emailLength: false,
        emailFormat: false,
        nameLength: false,
        subjectLength: false,
        messageLength: false,
        good: false,
    });

    const sendEmail = async (e) => {
        e.preventDefault();

        setTriedSubmit(true);

        if (verifyInput()) return;

        // ! This is where we send the email
        await emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                post,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setPost({
                        user_name: '',
                        user_email: '',
                        subject: '',
                        message: '',
                    });
                    setTriedSubmit(false);
                    setErrorState({
                        emailLength: false,
                        emailFormat: false,
                        nameLength: false,
                        subjectLength: false,
                        messageLength: false,
                        good: false,
                    });
                    console.log('Email has been sent 🚀');
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const verifyInput = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        let hasIssues =
            post.user_email.length <= 0 ||
            !post.user_email.match(emailRegex) ||
            post.user_name.length <= 0 ||
            post.subject.length <= 0 ||
            post.message.length <= 0;

        setErrorState({
            emailLength: post.user_email.length <= 0,
            emailFormat: !post.user_email.match(emailRegex),
            nameLength: post.user_name.length <= 0,
            subjectLength: post.subject.length <= 0,
            messageLength: post.message.length <= 0,
            good: !hasIssues,
        });

        return hasIssues;
    };

    useEffect(() => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let hasIssues =
            post.user_email.length <= 0 ||
            !post.user_email.match(emailRegex) ||
            post.user_name.length <= 0 ||
            post.subject.length <= 0 ||
            post.message.length <= 0;
        setErrorState({ ...errorState, good: !hasIssues });
        if (triedSubmit) verifyInput();
    }, [post]);

    const [rowHeight, setRowHeight] = useState(125);

    const lgLayout = [
        { i: 'name', x: 0, y: 0, w: 1, h: 1.5, static: true },
        { i: 'subject', x: 1, y: 0, w: 2, h: 1, static: true },
        { i: 'email', x: 0, y: 1.5, w: 1, h: 1, static: true },
        { i: 'message', x: 1, y: 1, w: 2, h: 3, static: true },
        { i: 'submit', x: 2, y: 4, w: 1, h: 1, static: true },
    ];

    const smLayout = [
        { i: 'name', x: 0, y: 0, w: 1, h: 1, static: true },
        { i: 'subject', x: 0, y: 1, w: 2, h: 1, static: true },
        { i: 'email', x: 1, y: 0, w: 1, h: 1, static: true },
        { i: 'message', x: 0, y: 2, w: 2, h: 4, static: true },
        { i: 'submit', x: 1, y: 6, w: 1, h: 1, static: true },
    ];

    const xsLayout = [
        { i: 'name', x: 0, y: 0, w: 2, h: 1, static: true },
        { i: 'subject', x: 0, y: 2, w: 2, h: 1, static: true },
        { i: 'email', x: 0, y: 1, w: 2, h: 1, static: true },
        { i: 'message', x: 0, y: 3, w: 2, h: 4, static: true },
        { i: 'submit', x: 0, y: 7, w: 2, h: 1, static: true },
    ];

    return (
        <>
            <Head>
                <title>William Saedan | contact</title>
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
                <header className='font-ConstantiaBold ml-8 text-6xl sm:text-3xl'>
                    say hi
                </header>
                <form onSubmit={sendEmail}>
                    <ResponsiveGridLayout
                        layouts={{ lg: lgLayout, sm: smLayout, xs: xsLayout }}
                        breakpoints={{
                            lg: 1200,
                            md: 996,
                            sm: 767,
                            xs: 480,
                            xxs: 0,
                        }}
                        onBreakpointChange={(breakpoint, cols) => {
                            switch (breakpoint) {
                                case 'xxs':
                                    setRowHeight(75);
                                    break;
                                default:
                                    setRowHeight(125);
                            }
                        }}
                        cols={{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 2 }}
                        rowHeight={rowHeight}
                        margin={[25, 25]}>
                        <div key='name'>
                            <input
                                type='text'
                                name='user_name'
                                value={post.user_name}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        user_name: e.target.value,
                                    })
                                }
                                className='absolute text-6xl sm:text-3xl h-full placeholder:text-black placeholder:opacity-75 w-full bg-transparent p-5 focus:outline-none font-ConstantiaBold'
                                placeholder='your name'
                            />
                            <div className='h-[25px] w-full bg-black absolute -bottom-[25px] sm:h-[12px] -left-1/3 lg:-bottom-[40px]' />
                            <p
                                className={`transition-all absolute bottom-0 lg:-bottom-6 pb-5 px-5 ${
                                    !errorState.nameLength
                                        ? 'opacity-0'
                                        : 'text-red'
                                }`}>
                                Please enter your name
                            </p>
                        </div>
                        <div key='email'>
                            <input
                                type='email'
                                name='user_email'
                                value={post.user_email}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        user_email: e.target.value,
                                    })
                                }
                                className='text-4xl sm:text-xl absolute h-full placeholder:text-black placeholder:opacity-75 w-full bg-transparent px-5 focus:outline-none'
                                placeholder='enter your email'
                            />
                            <p
                                className={`transition-all absolute -bottom-8 pb-5 px-5 ${
                                    !errorState.emailFormat &&
                                    !errorState.emailLength
                                        ? 'opacity-0'
                                        : 'text-red'
                                }`}>
                                Please enter a valid email address
                            </p>
                        </div>
                        <div key='subject'>
                            <input
                                type='text'
                                name='subject'
                                value={post.subject}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        subject: e.target.value,
                                    })
                                }
                                className='text-4xl sm:text-2xl absolute placeholder:text-black placeholder:opacity-75 h-full w-full bg-transparent p-5 focus:outline-none'
                                placeholder='write a subject'
                            />
                            <p
                                className={`transition-all absolute -bottom-8 pb-5 px-5 ${
                                    !errorState.subjectLength
                                        ? 'opacity-0'
                                        : 'text-red'
                                }`}>
                                Please write a subject
                            </p>
                        </div>
                        <div key='message'>
                            <textarea
                                name='message'
                                value={post.message}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        message: e.target.value,
                                    })
                                }
                                className='text-3xl sm:text-xl text-white placeholder:text-white placeholder:opacity-75 bg-blue h-full w-full p-5 bg-transparent focus:outline-none resize-none'
                                placeholder='type a message'
                            />
                            <div className='h-[25px] w-full bg-black absolute -bottom-[14px] left-1/3' />
                            <p
                                className={`transition-all pb-5 px-5 ${
                                    !errorState.messageLength
                                        ? 'opacity-0'
                                        : 'text-red'
                                }`}>
                                Please type a message
                            </p>
                        </div>
                        <div key='submit'>
                            <button
                                type='submit'
                                className={`text-5xl
                                            h-full
                                            w-full
                                            transition-opacity
                                            duration-300
                                            ${
                                                errorState.good
                                                    ? ''
                                                    : 'cursor-default opacity-75'
                                            }`}>
                                send
                            </button>
                        </div>
                    </ResponsiveGridLayout>
                </form>
                <div className='flex justify-center items-center w-full h-96 text-9xl sm:text-5xl font-ConstantiaBold'>
                    or
                </div>
                <header className='font-ConstantiaBold m-8 text-6xl sm:text-3xl'>
                    connect
                </header>
                <div className='flex flex-col justify-center items-center min-h-[60vh]'>
                    <button
                        className='relative text-7xl font-ConstantiaBold m-8 group sm:text-4xl'
                        onClick={() =>
                            navigator.clipboard.writeText(
                                'saedanwilliam@gmail.com'
                            )
                        }>
                        saedan
                        <span className='sm:block'>william</span>
                        <span className='lg:block'>@gmail.com</span>
                        <div className='h-[8px] bg-black w-0 group-hover:w-full transition-all duration-500' />
                    </button>
                    <a
                        className='text-7xl sm:text-4xl font-ConstantiaBold m-8 group'
                        href='https://www.linkedin.com/in/william-saedan/'
                        target='_blank'
                        rel='noreferrer'>
                        LinkedIn
                        <div className='h-[8px] bg-black w-0 group-hover:w-full transition-all duration-500' />
                    </a>
                    <a
                        className='text-7xl sm:text-4xl font-ConstantiaBold m-8 group'
                        href='https://github.com/WilliamSaedan'
                        target='_blank'
                        rel='noreferrer'>
                        GitHub
                        <div className='h-[8px] bg-black w-0 group-hover:w-full transition-all duration-500' />
                    </a>
                </div>
                <Footer main={false} />
            </motion.div>
        </>
    );
}
