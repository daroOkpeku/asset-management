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
                '30w': '22.23%',
                '50w':'77.77%',
                '70w': '70%'
            },
            borderWidth: {
                '1': '1px'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
