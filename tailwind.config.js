/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,php}"],
    theme: {
        colors: {
            primary: {
                50: "#fef1f6",
                100: "#fee5f0",
                200: "#ffcae2",
                300: "#ffa0c9",
                400: "#ff65a3",
                500: "#fd3880",
                600: "#ee1459",
                700: "#cf0740",
                800: "#ab0935",
                900: "#8e0d30",
                950: "#580017",
            },
            neutral: {
                50: "#fafaf9",
                100: "#f5f5f4",
                200: "#e7e5e4",
                300: "#d6d3d1",
                400: "#a8a29e",
                500: "#78716c",
                600: "#57534e",
                700: "#44403c",
                800: "#292524",
                900: "#1c1917",
                950: "#0c0a09",
            },
            white: "#ffffff",
        },
        extend: {},
    },
    plugins: [],
};
