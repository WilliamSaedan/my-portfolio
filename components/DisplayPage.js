import { Responsive, WidthProvider } from 'react-grid-layout';
import { twMerge } from 'tailwind-merge';
import Nav from './Nav';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DisplayPage({
    title,
    subtitle,
    desc,
    icons = [],
    color,
    children,
}) {
    const lgLayout = [
        { i: 'mainView', x: 0, y: 1, w: 3, h: 8, static: true },
        { i: 'title', x: 0, y: 0, w: 3, h: 1, static: true },
        { i: 'description', x: 3, y: 1, w: 2, h: 8, static: true },
    ];

    const smLayout = [
        { i: 'mainView', x: 0, y: 2, w: 1, h: 3, static: true },
        { i: 'title', x: 0, y: 0, w: 1, h: 1, static: true },
        { i: 'description', x: 0, y: 5, w: 1, h: 3, static: true },
    ];

    const xsLayout = [
        { i: 'mainView', x: 0, y: 0, w: 1, h: 3, static: true },
        { i: 'title', x: 0, y: 3, w: 1, h: 1, static: true },
        { i: 'description', x: 0, y: 5, w: 1, h: 3, static: true },
    ];

    const iconBox = twMerge(`
        group
        flex
        items-center
        justify-center
        ${color ?? 'bg-white'}
    `);

    return (
        <>
            <Nav />
            <div className='w-full h-full'>
                <ResponsiveGridLayout
                    className='w-full h-full'
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 767,
                        xs: 480,
                        xxs: 0,
                    }}
                    compactType='none'
                    cols={{ lg: 5, md: 5, sm: 1, xs: 1, xxs: 1 }}
                    rowHeight={75}
                    margin={[25, 25]}
                    layouts={{
                        lg: lgLayout,
                        md: lgLayout,
                        xs: smLayout,
                        xxs: xsLayout,
                    }}>
                    <div key='mainView'>
                        <div
                            className={`overflow-hidden w-full h-full ${
                                color ?? 'bg-black'
                            }`}>
                            {children}
                        </div>
                        <div className='h-[25px] w-full bg-black absolute -bottom-[25px] -left-1/3 lg:-bottom-[40px]' />
                    </div>
                    <div key='title'>
                        <div className='absolute bottom-0 '>
                            <h1 className='text-5xl font-ConstantiaItalic'>
                                {title}
                            </h1>
                        </div>
                    </div>
                    <div key='description'>
                        <div className='p-5'>
                            <h1 className='text-3xl'>{subtitle}</h1>
                            <div className='h-[25px] w-full bg-black translate-x-1/3 translate-y-[25px] ' />
                        </div>
                        <div className='p-5'>
                            <p className='text-2xl font-bold'>{desc}</p>
                            <div className='w-full absolute flex flex-row justify-end gap-4 items-end bottom-0 right-4'>
                                {icons.map((icon, idx) => (
                                    <div key={idx}>{icon}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ResponsiveGridLayout>
            </div>
        </>
    );
}
