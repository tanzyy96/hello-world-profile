// postcss.config.js
// module.exports = {
//     plugins: [require("tailwindcss")]
// }
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};