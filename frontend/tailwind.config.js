module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	ttheme: {
		extend: {
			fontSize: {
				xxs: '0.55rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
