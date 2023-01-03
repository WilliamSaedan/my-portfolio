import { twMerge } from 'tailwind-merge';
import { useState, useRef, useEffect } from 'react';
import SketchCanvas from './SketchCanvas';
import Tilt from 'react-parallax-tilt';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function SketchCard({ src, className, ...restOfProps }) {
    const [isActive, setIsActive] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    // const containterClasses = twMerge(`
    //     flex
    //     items-center
    //     justify-center
    //     p-8
    //     transition-[min-width] duration-500
    //     ${isActive ? 'min-w-full' : 'min-w-[10%]'}
    //     ${className ?? ''}
    // `);

    const keepInView = () => {
        let top = canvasRef.current.offsetTop - 50;
        window.scroll({
            top: top,
            behavior: 'auto',
        });
    };

    const deactivate = () => {
        if (!isActive) return;
        setIsActive(false);
        keepInView();
    };

    return (
        <div
            ref={canvasRef}
            className={`m-8 ${isActive ? 'z-10' : 'z-0'}`}
            {...restOfProps}>
            <Tilt
                scale={isActive ? 1 : 1.1}
                tiltMaxAngleX={isActive ? 0 : 10}
                tiltMaxAngleY={isActive ? 0 : 10}>
                <div ref={imageRef}>
                    <SketchCanvas
                        className={`
                            z-20
                            transition-transform
                            duration-500
                            ${
                                isActive
                                    ? 'scale-100 cursor-default'
                                    : 'scale-50 cursor-pointer'
                            }
                        `}
                        enabled={isActive}
                        src={src}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (!isActive) keepInView();
                            setIsActive(true);
                        }}>
                        <div
                            className={`
                                absolute
                                top-0
                                right-0
                                z-30
                                text-4xl
                                ${
                                    isActive
                                        ? 'opacity-100'
                                        : 'opacity-0 pointer-events-none'
                                }
                                transition-opacity duration-500
                            `}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deactivate();
                                }}
                                className='hover:text-red focus:text-red transition-color duration-200 p-4 text-2xl'>
                                <RiCloseCircleLine />
                            </button>
                        </div>
                    </SketchCanvas>
                </div>
            </Tilt>
        </div>
    );
}
