/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			nhaasrg: ['NHaasGroteskRg', 'sans-serif'],
			nhaasbd: ['NHaasGroteskBld', 'sans-serif']
		},
		extend: {
			rotate: {
				270: '270deg'
			},
			animation: {
				glow2: 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
