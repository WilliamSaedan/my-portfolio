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
    overrideSmHeight = 4,
}) {
    const lgLayout = [
        { i: 'mainView', x: 0, y: 1, w: 3, h: 8, static: true },
        { i: 'title', x: 0, y: 0, w: 3, h: 1, static: true },
        { i: 'description', x: 3, y: 1, w: 2, h: 8, static: true },
    ];

    const smLayout = [
        { i: 'mainView', x: 0, y: 2, w: 1, h: overrideSmHeight, static: true },
        { i: 'title', x: 0, y: 0, w: 1, h: 2, static: true },
        {
            i: 'description',
            x: 0,
            y: overrideSmHeight + 2,
            w: 1,
            h: 6,
            static: true,
        },
    ];

    return (
        <>
            <Nav />
            <div className='w-full h-full min-h-[calc(100vh - 256px)] flex items-center'>
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
                    margin={[0, 0]}
                    layouts={{
                        lg: lgLayout,
                        md: lgLayout,
                        xs: smLayout,
                        xxs: smLayout,
                    }}>
                    <div key='mainView'>
                        <div className={`overflow-hidden w-full h-full`}>
                            <div
                                className={`mx-6 sm:m-4 h-full ${
                                    color ?? 'bg-black'
                                }`}>
                                {children}
                            </div>
                        </div>
                        <div className='h-[25px] lg:h-4 lg:-bottom-4 sm:h-3 w-full bg-black absolute -bottom-[25px] sm:-bottom-3 -left-1/3' />
                    </div>
                    <div key='title'>
                        <div className='absolute bottom-0 m-5'>
                            <h1 className='text-5xl md:text-4xl sm:text-3xl font-ConstantiaBold'>
                                {title}
                            </h1>
                        </div>
                    </div>
                    <div
                        key='description'
                        className='py-6'>
                        <div className='p-5'>
                            <h1 className='text-3xl md:text-xl sm:text-lg'>{subtitle}</h1>
                            <div className='h-[25px] md:h-4 sm:h-3 w-full bg-black translate-x-1/3 translate-y-[25px] ' />
                        </div>
                        <div className='p-5'>
                            <p className='text-2xl md:text-lg sm:text-sm font-semibold'>{desc}</p>
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
