export default function SubLogo({ color = '#0F1A20', className = '' }) {
    return (
        <div
            style={{
                backgroundColor: color,
                mask: 'url(./assets/svgs/SubLogo.svg) no-repeat center / contain',
                WebkitMask:
                    'url(./assets/svgs/SubLogo.svg) no-repeat center / contain',
            }}
            className={`${className}`}>
            <img
                className='h-full w-full opacity-100'
                src='./assets/svgs/SubLogo.svg'
                alt='I AM'
            />
        </div>
    );
}
