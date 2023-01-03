import { Responsive, WidthProvider } from 'react-grid-layout';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function FocusSection({
    title = '',
    subText = '',
    color = 'black',
    direction = 'left',
    width = 50,
    height = 100,
    href = '',
    className,
    children,
    animated = true,
    garnish = false,
    offset = 0,
    ...restOfProps
}) {
    const getColor = (color) => {
        switch (color) {
            case 'black':
                return { text: 'text-black', bg: 'bg-black' };
            case 'white':
                return { text: 'text-white', bg: 'bg-white' };
            case 'blue':
                return { text: 'text-blue', bg: 'bg-blue' };
            case 'red':
                return { text: 'text-red', bg: 'bg-red' };
            case 'green':
                return { text: 'text-green', bg: 'bg-green' };
            case 'yellow':
                return { text: 'text-yellow', bg: 'bg-yellow' };
            default:
                return { text: 'text-black', bg: 'bg-black' };
        }
    };

    const colorStyles = getColor(color);

    const headerRef = useRef();
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        setHeaderHeight(headerRef.current.clientHeight);
    });

    const defaultRowHeight = 900;
    const [rowHeight, setRowHeight] = useState(
        defaultRowHeight * (height / 100)
    );

    const lgLeftLayout = [
        {
            i: 'mainView',
            x: 1 - width / 100,
            y: 0,
            w: width / 100,
            h: 1,
            static: true,
        },
        { i: 'title', x: 0, y: 0, w: 1 - width / 100, h: 1, static: true },
    ];

    const lgRightLayout = [
        {
            i: 'mainView',
            x: 0,
            y: 0,
            w: width / 100,
            h: 1,
            static: true,
        },
        {
            i: 'title',
            x: width / 100,
            y: 0,
            w: 1 - width / 100,
            h: 1,
            static: true,
        },
    ];

    const topLayout = [
        {
            i: 'title',
            x: 0,
            y: 0,
            w: width / 100,
            h: 1 + headerHeight / rowHeight,
            static: false,
        },
        {
            i: 'mainView',
            x: 0,
            y: (headerHeight + 100) / rowHeight,
            w: width / 100,
            h: 1,
            static: false,
        },
    ];

    const smLayout = [
        {
            i: 'title',
            x: 0,
            y: 0,
            w: 1,
            h: 1 + headerHeight / rowHeight,
            static: false,
        },
        {
            i: 'mainView',
            x: 0,
            y: (headerHeight + 100) / rowHeight,
            w: 1,
            h: 1,
            static: false,
        },
    ];

    const lgLayout =
        direction === 'left'
            ? lgLeftLayout
            : direction === 'right'
            ? lgRightLayout
            : topLayout;

    return (
        <ResponsiveGridLayout
            layouts={{ lg: lgLayout, md: lgLayout, sm: smLayout, xs: smLayout, xxs: smLayout }}
            breakpoints={{
                lg: 1200,
                md: 996,
                sm: 767,
                xs: 480,
                xxs: 0,
            }}
            cols={{ lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 }}
            allowOverlap={true}
            preventCollision={false}
            onBreakpointChange={(breakpoint, cols) => {
                switch (breakpoint) {
                    default:
                        setRowHeight(defaultRowHeight * (height / 100));
                }
            }}
            rowHeight={rowHeight}
            margin={[25, 25]}>
            <div
                key='title'
                className={`h-full ${
                    direction === 'right' ? 'text-right' : ''
                } ${colorStyles.text}`}>
                <div
                    className={`sticky m-8 h-fit ${colorStyles.text}`}
                    style={{ top: `${offset}px` }}
                    ref={headerRef}>
                    <Link href={href}>
                        <div
                            className={`font-ConstantiaBold text-9xl 2xl:text-7xl`}>
                            {title}
                        </div>
                    </Link>
                    <div
                        className={`${
                            direction === 'left'
                                ? 'ml-40 xl:ml-16 lg:ml-0'
                                : direction === 'right'
                                ? 'mr-40 xl:mr-16 lg:mr-0'
                                : ''
                        } mt-24 text-2xl`}>
                        {subText}
                    </div>
                </div>
            </div>
            <Link
                href={href}
                key='mainView'
                className={`h-full relative overflow-hidden ${colorStyles.bg}`}>
                {children}
            </Link>
        </ResponsiveGridLayout>
    );

    const twClasses = twMerge(`
        w-full
        flex gap-8 
        ${className ?? ''}
    `);

    const getDirection = (direction) => {
        switch (direction) {
            case 'left':
                return (
                    <div
                        className={twClasses}
                        style={{ height: `${height}vh` }}
                        {...restOfProps}>
                        <div
                            className={`h-full`}
                            style={{ width: `${100 - width}%` }}>
                            <div
                                className={`
                                sticky h-fit
                                ${colorStyles.text}
                                `}
                                style={{ top: `${offset}px` }}>
                                <Link href={href}>
                                    <div
                                        className={`font-ConstantiaBold text-9xl`}>
                                        {title}
                                    </div>
                                </Link>
                                <div className={`ml-40 mt-24 text-2xl`}>
                                    {subText}
                                </div>
                            </div>
                        </div>
                        <Link
                            href={href}
                            className='h-full'
                            style={{ width: `${width}%` }}>
                            <div
                                className={`
                                relative
                                h-full
                                overflow-hidden
                                ${colorStyles.bg}
                                `}>
                                {children}
                            </div>
                        </Link>
                    </div>
                );
            case 'right':
                return (
                    <div
                        className={`flex-row-reverse ${twClasses}`}
                        style={{ height: `${height}vh` }}
                        {...restOfProps}>
                        <div
                            className={`h-full text-right`}
                            style={{ width: `${100 - width}%` }}>
                            <div
                                className={`
                                sticky h-fit
                                ${colorStyles.text}
                                `}
                                style={{ top: `${offset}px` }}>
                                <Link href={href}>
                                    <div
                                        className={`font-ConstantiaBold text-9xl`}>
                                        {title}
                                    </div>
                                </Link>
                                <div
                                    className={`ml-40 mt-24 text-2xl text-left`}>
                                    {subText}
                                </div>
                            </div>
                        </div>
                        <Link
                            href={href}
                            style={{ width: `${width}%` }}>
                            <div
                                className={`
                                relative
                                h-full
                                overflow-hidden
                                ${colorStyles.bg}
                                `}>
                                {children}
                            </div>
                        </Link>
                    </div>
                );

            case 'up':
                return (
                    <div style={{ width: `${width}%` }}>
                        <div
                            className={`
                            sticky h-fit
                            ml-8
                            ${colorStyles.text}
                            `}
                            style={{ top: `${offset}px` }}>
                            <Link href={href}>
                                <div className={`font-ConstantiaBold text-9xl`}>
                                    {title}
                                </div>
                            </Link>
                            <div className={`ml-40 mt-24 text-2xl`}>
                                {subText}
                            </div>
                        </div>
                        <div
                            className='mt-14'
                            style={{ height: `${height}vh` }}>
                            <Link href={href}>
                                <div
                                    className={`
                                        relative
                                        h-full
                                        overflow-hidden
                                        ${colorStyles.bg}
                                        `}>
                                    {children}
                                </div>
                            </Link>
                        </div>
                    </div>
                );

            default:
                return (
                    <div
                        className={twClasses}
                        style={{ height: `${height}vh` }}
                        {...restOfProps}>
                        <div
                            className={`h-full`}
                            style={{ width: `${100 - width}%` }}>
                            <div
                                className={`
                                sticky h-fit
                                ${colorStyles.text}
                                `}
                                style={{ top: `${offset}px` }}>
                                <Link href={href}>
                                    <div
                                        className={`font-ConstantiaBold text-9xl`}>
                                        {title}
                                    </div>
                                </Link>
                                <div className={`ml-40 mt-24 text-2xl`}>
                                    {subText}
                                </div>
                            </div>
                        </div>
                        <Link
                            href={href}
                            style={{ width: `${width}%` }}>
                            <div
                                className={`
                                relative
                                h-full
                                overflow-hidden
                                ${colorStyles.bg}
                                `}>
                                {children}
                            </div>
                        </Link>
                    </div>
                );
        }
    };

    return getDirection(direction);
}
