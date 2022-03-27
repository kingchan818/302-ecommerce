const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.tsx'],
    theme: {
        // container: {
        //     screens: {
        //         sm: '640px',
        //         md: '768px',
        //         lg: '1024px',
        //         xl: '1280px',
        //         '2xl': '1440px',
        //     },
        // },
        colors: {
            ...colors,
            primary: colors.blue,
            secondary: colors.orange,
            success: colors.green,
            danger: colors.red,
        },
        extend: {},
        plugins: [],
    },
};
