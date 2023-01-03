import { twMerge } from 'tailwind-merge';
import { motion, useInView, useScroll, useVelocity } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function GridWindow({
    className,
    children,
    animated = true,
    ...restOfProps
}) {
    const classes = twMerge(`
        relative
        w-full
        h-full
        bg-white
        overflow-hidden
        box-content
        border-[25px] border-black
        ${className ?? ''}
    `);

    const gridWindowRef = useRef();
    const isInView = useInView(gridWindowRef, {
        once: false,
        amount: 'some',
        margin: '100% 0px 10% 0px',
    });

    const gridVariants = {
        here: {
            y: '-25px',
            x: '-25px',
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        },
        away: {
            y: '100%',
            x: '-25px',
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
        <>
            {animated ? (
                <motion.div
                    ref={gridWindowRef}
                    initial={false}
                    animate={isInView ? 'here' : 'away'}
                    variants={gridVariants}
                    className={classes}
                    {...restOfProps}>
                    {children}
                </motion.div>
            ) : (
                <div
                    ref={gridWindowRef}
                    className={`${classes} -translate-x-[25px] -translate-y-[25px]`}
                    {...restOfProps}>
                    {children}
                </div>
            )}
        </>
    );
}
