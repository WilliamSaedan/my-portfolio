import { twMerge } from 'tailwind-merge';

export default function PlaceholderComment({
    idx,
    activated = false,
    time,
    feedback,
    className,
    ...props
}) {
    const profiles = [
        { backgroundColor: '#FFB800' },
        { backgroundColor: '#0C7489' },
        { backgroundColor: '#F42C04' },
        { backgroundColor: '#0F1A20' },
    ];
    const currentProfile = activated
        ? { backgroundColor: '#fff' }
        : profiles[idx % profiles.length];

    const formatFeedback = (feedback) => {
        if (feedback == 'idea') return '💡 Idea';
        if (feedback == 'question') return '❓ Question';
        if (feedback == 'glow') return '🌟 Glow';
        if (feedback == 'grow') return '🌱 Grow';
        return 'Feedback';
    };

    const colorFeedback = (feedback) => {
        if (feedback == 'idea') return 'bg-yellow text-[#fff]';
        if (feedback == 'question') return 'bg-blue text-[#fff]';
        if (feedback == 'glow') return 'bg-green text-[#fff]';
        if (feedback == 'grow') return 'bg-red text-[#fff]';
        return 'bg-white';
    };

    const twClasses = twMerge(`
            rounded-lg 
            p-4 
            transition-all
            duration-300
            drop-shadow-lg
            ${activated ? colorFeedback(feedback) : 'bg-[#fff] text-black'}
            ${className ?? ''}
        `);

    return (
        <div
            className={twClasses}
            {...props}>
            <div className='flex items-center gap-4 justify-between mb-2'>
                <div className='flex items-center gap-4 my-2'>
                    <div
                        className='h-10 w-10 sm:h-4 sm:w-4 rounded-full'
                        style={currentProfile}
                    />
                    <div
                        className='h-10 w-40 sm:h-4 sm:w-16 rounded-lg'
                        style={currentProfile}
                    />
                </div>
                <div className='px-4 py-2 sm:py-0 sm:text-xs'>{time}</div>
            </div>
            <div className='flex items-center gap-2 text-xs'>
                <div className='py-2'>{formatFeedback(feedback)}</div>
            </div>
            <div className='flex flex-col gap-4 py-4 sm:py-2'>
                <div
                    className='h-5 sm:h-2 w-3/4 rounded-md'
                    style={currentProfile}
                />
                <div
                    className='h-5 sm:h-2 w-full rounded-md'
                    style={currentProfile}
                />
                <div
                    className='h-5 sm:h-2 w-1/2 rounded-md'
                    style={currentProfile}
                />
            </div>
        </div>
    );
}
