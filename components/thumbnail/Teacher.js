import { motion } from 'framer-motion';
import { useState } from 'react';
import PlaceholderComment from '../PlaceholderComment';

export default function Teacher() {
    const videoFrames = [
        '/assets/images/teacher/glow-0.png',
        '/assets/images/teacher/glow-1.png',
        '/assets/images/teacher/glow-2.png',
        '/assets/images/teacher/glow-3.png',
    ];

    const [currentFrame, setCurrentFrame] = useState(0);

    return (
        <div className='flex items-center justify-center h-full w-full'>
            <div className='w-full h-full -rotate-12'>
                <motion.img
                    src={videoFrames[currentFrame]}
                    className='absolute w-full rounded-lg drop-shadow-lg max-w-2xl'
                />
                <div className='absolute top-1/4 left-1/2 flex flex-col gap-8 w-3/4 max-w-xl'>
                    <motion.div onHoverStart={() => setCurrentFrame(3)}>
                        <PlaceholderComment
                            idx={0}
                            activated={currentFrame == 3}
                            time='13:00'
                            feedback='idea'
                        />
                    </motion.div>
                    <motion.div onHoverStart={() => setCurrentFrame(2)}>
                        <PlaceholderComment
                            idx={1}
                            activated={currentFrame == 2}
                            time='20:31'
                            feedback='glow'
                        />
                    </motion.div>
                    <motion.div onHoverStart={() => setCurrentFrame(1)}>
                        <PlaceholderComment
                            idx={2}
                            activated={currentFrame == 1}
                            time='21:54'
                            feedback='grow'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
