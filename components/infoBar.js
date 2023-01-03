import { RiExternalLinkFill } from 'react-icons/ri';
import Link from 'next/link';

export default function InfoBar({
    className = 'hover:bg-yellow',
    href = '',
    children,
}) {
    return (
        <Link
            href={href}
            className='group/info absolute bottom-0 w-full h-fit'>
            <div className='relative z-10 right-0 bottom-0 box-content w-full border-t-[25px] border-l-[25px] translate-x-full group-hover/window:-translate-x-[25px] group-focus/info:-translate-x-[25px] focus:outline-none transition-transform duration-300'>
                <div className='flex items-center justify-between bg-white text-lg font-Constantia'>
                    <div className='w-full flex gap-2 justify-between px-4 md:text-sm'>
                        {children}
                    </div>
                    <RiExternalLinkFill
                        className={`
                        box-content
                        border-l-[25px]
                        p-6
                        inline-block
                        place-self-end
                        transition-colors
                        duration-200
                        ${className}`}
                    />
                </div>
            </div>
        </Link>
    );
}
