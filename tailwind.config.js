module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '30w': '23.33%',
                '50w':'76.67%'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
