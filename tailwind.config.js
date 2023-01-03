/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                Constantia: ['Constantia', 'serif'],
                ConstantiaItalic: ['Constantia-Italic', 'serif'],
                ConstantiaBold: ['Constantia-Bold', 'serif'],
                Aux: ['aaux-next', 'sans-serif'],
                Wills: ['Wills-Architect'],
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(5deg)' },
                },
            },
            animation: {
                wiggle: 'wiggle 0.25s ease-in-out 2',
            },
            dropShadow: {
                center: '0 0 25px rgba(0, 0, 0, 0.5)',
                '3xl': '0 25px 35px rgba(0, 0, 0, 0.5)',
            },
        },
        colors: {
            white: '#EDF2EF',
            black: '#0F1A20',
            yellow: '#FFB800',
            blue: '#0C7489',
            red: '#F42C04',
            green: '#3BB273',
            transparent: 'transparent',
        },
        screens: {
            '3xl': { max: '1920px' },

            '2xl': { max: '1535px' },

            xl: { max: '1200px' },

            lg: { max: '996px' },

            md: { max: '768px' },

            sm: { max: '480px' },
        },
    },
    plugins: [],
};
