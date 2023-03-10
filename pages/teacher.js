import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { RiExternalLinkFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';
import DisplayPage from '../components/DisplayPage';
import Footer from '../components/Footer';
import PlaceholderComment from '../components/PlaceholderComment';

export default function Teacher() {
    const videoFrames = [
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-1.png',
            time: '0:00',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-2.png',
            time: '1:25',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-3.png',
            time: '6:17',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-4.png',
            time: '8:08',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-5.png',
            time: '11:56',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-6.png',
            time: '13:00',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-7.png',
            time: '15:30',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-8.png',
            time: '18:04',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-9.png',
            time: '20:31',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-10.png',
            time: '21:54',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-11.png',
            time: '25:05',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-12.png',
            time: '28:56',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-13.png',
            time: '33:09',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-14.png',
            time: '35:31',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-15.png',
            time: '39:14',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-16.png',
            time: '40:56',
        },
        {
            link: 'https://d2pf2o8cr3c661.cloudfront.net/images/teacher/video-frames/glow-vid-17.png',
            time: '44:03',
        },
    ];
    const [currentFrame, setCurrentFrame] = useState(0);

    const formatFeedback = (feedback) => {
        if (feedback == 'idea') return '???? Idea';
        if (feedback == 'question') return '??? Question';
        if (feedback == 'glow') return '???? Glow';
        if (feedback == 'grow') return '???? Grow';
        return 'Select Feedback';
    };

    const colorFeedback = (feedback) => {
        if (feedback == 'idea') return 'bg-yellow text-[#fff]';
        if (feedback == 'question') return 'bg-blue text-[#fff]';
        if (feedback == 'glow') return 'bg-green text-[#fff]';
        if (feedback == 'grow') return 'bg-red text-[#fff]';
        return 'bg-[#fff] text-[#000]';
    };
    const [feedbackIdx, setFeedbackIdx] = useState(0);
    const feedbackOptions = ['select', 'idea', 'question', 'glow', 'grow'];

    const [comments, setComments] = useState([
        {
            feedback: 'idea',
            idx: 1,
            frame: 9,
        },
    ]);
    const addComment = () => {
        setComments([
            {
                feedback: feedbackOptions[feedbackIdx],
                idx: comments.length,
                frame: currentFrame,
            },
            ...comments,
        ]);
    };

    const subtitle =
        'A peer review platform, developed using React, TailwindCSS, NextJS, and Firebase, for teachers to share and receive feedback on their lectures.';
    const description =
        'Glow & Grow, developed as part of a team of six in the Center for Information Technology, is designed to encourage the staff at Deep Run High School to give and receive feedback on lectures. I developed the comment interface for the platform. It enables teachers to upload their lectures and leave time-stamped comments labeled as "glows," "grows," "ideas," or "questions" that highlight upon the video reaching the appropriate time.';
    const links = [
        <>
            <a href='https://github.com/WilliamSaedan/teacher-comments'>
                <SiGithub className='text-4xl sm:text-xl hover:text-yellow transition-colors duration-300' />
            </a>
        </>,
        <>
            <a href='https://glow-and-grow.vercel.app/'>
                <RiExternalLinkFill className='text-4xl sm:text-xl hover:text-blue transition-colors duration-300' />
            </a>
        </>,
    ];

    return (
        <>
            <Head>
                <title>William Saedan | Glow & Grow</title>
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
                    title='Glow & Grow'
                    subtitle={subtitle}
                    desc={description}
                    icons={links}
                    color='bg-white'
                    overrideSmHeight={12}>
                    <div className='flex gap-4 p-4 h-full md:flex-wrap'>
                        <div className='w-1/2 md:w-full'>
                            <motion.img
                                onClick={() => {
                                    setCurrentFrame(
                                        (currentFrame + 1) % videoFrames.length
                                    );
                                }}
                                src={videoFrames[currentFrame].link}
                                className='w-full rounded-t-lg drop-shadow-lg max-w-2xl'
                            />
                            <div className='bg-[#fff] rounded-lg'>
                                <div
                                    onClick={() => {
                                        setFeedbackIdx(
                                            (feedbackIdx + 1) %
                                                feedbackOptions.length
                                        );
                                    }}
                                    className={`w-full p-4 rounded-b-lg cursor-pointer transition-colors duration-300 ${colorFeedback(
                                        feedbackOptions[feedbackIdx]
                                    )}`}>
                                    {formatFeedback(
                                        feedbackOptions[feedbackIdx]
                                    )}
                                </div>
                                <div className='flex flex-col gap-4 p-4'>
                                    <div
                                        className={twMerge(
                                            `h-5 w-3/4 rounded-md transition-colors duration-300 bg-black ${
                                                feedbackIdx !== 0
                                                    ? colorFeedback(
                                                          feedbackOptions[
                                                              feedbackIdx
                                                          ]
                                                      )
                                                    : ''
                                            }`
                                        )}
                                    />
                                    <div
                                        className={twMerge(
                                            `h-5 w-full rounded-md transition-colors duration-300 bg-black ${
                                                feedbackIdx !== 0
                                                    ? colorFeedback(
                                                          feedbackOptions[
                                                              feedbackIdx
                                                          ]
                                                      )
                                                    : ''
                                            }`
                                        )}
                                    />
                                    <div
                                        className={twMerge(
                                            `h-5 w-1/2 rounded-md transition-colors duration-300 bg-black ${
                                                feedbackIdx !== 0
                                                    ? colorFeedback(
                                                          feedbackOptions[
                                                              feedbackIdx
                                                          ]
                                                      )
                                                    : ''
                                            }`
                                        )}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        if (feedbackIdx === 0) return;
                                        addComment();
                                    }}
                                    className='w-full p-4 cursor-pointer bg-[#fff] rounded-lg'>
                                    Submit
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-1/2 md:w-full h-full overflow-y-scroll pr-4 max-w-xl'>
                            {comments.map((comment) => (
                                <motion.div
                                    onClick={() =>
                                        setCurrentFrame(comment.frame)
                                    }>
                                    <PlaceholderComment
                                        idx={comment.idx}
                                        activated={
                                            currentFrame == comment.frame
                                        }
                                        time={videoFrames[comment.frame].time}
                                        feedback={comment.feedback}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </DisplayPage>
                <Footer main={false} />
            </motion.div>
        </>
    );
}
