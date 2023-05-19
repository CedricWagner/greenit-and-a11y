/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'print': { 'raw': 'print' },
			}
		},
		fontFamily: {
			'gothic': ['Century Gothic', 'sans-serif'],
		}
	},
	plugins: [],
}
