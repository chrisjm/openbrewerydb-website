const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./config/tailwind.js'),
        require('autoprefixer'),
    ],
};
