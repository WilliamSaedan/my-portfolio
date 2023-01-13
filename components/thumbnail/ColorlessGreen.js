import { useState } from 'react';

export default function ColorlessGreen() {
    const colorlessPrompts = [
        <>
            Colorless <span className='text-green'>green</span> ideas sleep
            furiously.
        </>,
        <>
            The strange <span className='text-red'>volleyball</span> sparked
            without the <span className='text-blue'>adorable</span> paste on
            midnight, among the action.
        </>,
        <>
            Under the <span className='text-blue'>thread</span>, because of the{' '}
            <span className='text-yellow'>envious office</span>, nor the
            grieving net poked.
        </>,
        <>
            The <span className='text-yellow'>quarter</span> professed because
            of the <span className='text-red'>alley</span>.
        </>,
        <>
            Juliana <span className='text-yellow'>Ryker</span>{' '}
            <span className='text-blue'>knitted</span> because of the horn.
        </>,
        <>
            The <span className='text-blue'>clover</span> surrounded{' '}
            <span className='text-red'>because</span> of the throat around the{' '}
            <span className='text-yellow'>carpenter</span>, without the porter.
        </>,
        <>
            The gifted for <span className='text-red'>zealous</span> nerve{' '}
            <span className='text-yellow'>shaded</span> without the tail.
        </>,
    ];

    const [colorlessIdx, setColorlessIdx] = useState(0);
    return (
        <div
            className='flex items-center justify-center h-full w-full'
            onMouseEnter={() => {
                setColorlessIdx((colorlessIdx + 1) % colorlessPrompts.length);
            }}>
            <div className='h-fit w-full text-8xl p-8 rounded-3xl rotate-12 sm:text-5xl sm:rotate-6 drop-shadow-md bg-white'>
                {colorlessPrompts[colorlessIdx]}
            </div>
        </div>
    );
}
