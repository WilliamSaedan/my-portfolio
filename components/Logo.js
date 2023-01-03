import { twMerge } from "tailwind-merge";

export default function Logo({ className = '' }) {
    const classes = twMerge(`
        bg-yellow
        ${className ?? ""}
    `);

    return (
        <div
            style={{
                mask: 'url(./assets/svgs/MainLogo.svg) no-repeat center / contain',
                WebkitMask:
                    'url(./assets/svgs/MainLogo.svg) no-repeat center / contain',
            }}
            className={classes}
            alt='WiLL'>
            <img
                className='h-full w-full opacity-0'
                src='./assets/svgs/MainLogo.svg'
                alt='WiLL'
            />
        </div>
    );
}
