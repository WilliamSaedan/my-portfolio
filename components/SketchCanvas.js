import { useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { MdRefresh, MdUndo } from 'react-icons/md';
import { RiDownloadFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

export default function SketchCanvas({
    src = '',
    enabled = true,
    className = '',
    test,
    children,
    ...props
}) {
    const imageRef = useRef();
    const canvasRef = useRef();
    const [imageHeight, setImageHeight] = useState(500);
    const [imageWidth, setImageWidth] = useState(300);

    const twClasses = twMerge(`
        relative
        h-full
        ${className ?? ''}
    `);

    const onImgLoad = () => {
        setImageHeight(imageRef.current.naturalHeight);
        setImageWidth(imageRef.current.naturalWidth);
    };

    useEffect(() => {
        if (imageRef.current) {
            onImgLoad();
        }
    }, []);

    useEffect(() => {
        if (imageRef.current) {
            for (const layer in canvasRef.current.canvas) {
                canvasRef.current.canvas[
                    layer
                ].style.height = `${imageHeight}px`;
                canvasRef.current.canvas[layer].style.width = `${imageWidth}px`;
            }
        }
    }, [imageHeight, imageWidth]);

    return (
        <div
            className={twClasses}
            {...props}>
            <div className='hidden'>
                <img
                    ref={imageRef}
                    src={src}
                    onLoad={onImgLoad}
                />
            </div>
            <div
                className='w-fit'
                onClick={test}>
                <div
                    className={`absolute flex gap-4 z-10 text-4xl bottom-0 right-0 m-4 ${
                        enabled
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                    } transition-opacity duration-500`}>
                    <button
                        onClick={() => {
                            canvasRef.current.undo();
                        }}
                        className='hover:text-red focus:text-red transition-color duration-200 p-4 text-2xl'>
                        <MdUndo />
                    </button>
                    <button
                        onClick={() => {
                            canvasRef.current.eraseAll();
                        }}
                        className='hover:text-red focus:text-red transition-color duration-200 p-4 text-2xl'>
                        <MdRefresh />
                    </button>
                    <button
                        onClick={() => {
                            let link = document.createElement('a');
                            link.download = 'image.png';

                            let canvas = canvasRef.current.canvas.drawing;
                            let ctx = canvas.getContext('2d');

                            let width = canvas.width;
                            let height = canvas.height;

                            let imageData = ctx.getImageData(
                                0,
                                0,
                                width,
                                height
                            );

                            let compositeOperation =
                                ctx.globalCompositeOperation;
                            ctx.globalCompositeOperation = 'destination-over';

                            ctx.drawImage(canvasRef.current.canvas.grid, 0, 0);
                            let uri = canvas.toDataURL('image/png');
                            link.href = uri;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);

                            ctx.clearRect(0, 0, width, height);
                            ctx.putImageData(imageData, 0, 0);
                            ctx.globalCompositeOperation = compositeOperation;
                        }}
                        className='hover:text-red focus:text-red transition-color duration-200 p-4 text-2xl'>
                        <RiDownloadFill />
                    </button>
                </div>
                {children}
                <CanvasDraw
                    ref={canvasRef}
                    imgSrc={src}
                    hideGrid={true}
                    brushRadius={2}
                    lazyRadius={0}
                    canvasWidth={imageWidth}
                    canvasHeight={imageHeight}
                    disabled={!enabled}
                    hideInterface={!enabled}
                    catenaryColor='rgba(0,0,0,0)'
                    brushColor='rgba(255,0,0,0.5)'
                />
            </div>
        </div>
    );
}
