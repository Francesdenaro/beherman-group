const extraColumns = {
	13: '13',
	14: '14',
	15: '15',
	16: '16',
	17: '17',
	18: '18',
	19: '19',
	20: '20',
	21: '21',
	22: '22',
	23: '23',
	24: '24',
	25: '25',
	26: '26',
	27: '27',
};

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/comps/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		{
			pattern: /col-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27)/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'],
		},
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--karla)', ...fontFamily.sans],
				jetbrains: ['var(--jetbrains)', ...fontFamily.sans],
				karla: ['var(--karla)', ...fontFamily.sans],
			},
			gridColumnStart: extraColumns,
			gridColumnEnd: extraColumns,
			gridTemplateColumns: {
				container: '[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]',
			},
			colors: {
				primary: 'hsla(231, 75%, 11%, 1)',
				accent: 'hsla(209, 79%, 74%, 1)',
				secondary: 'hsla(205, 46%, 51%, 1)',
				tertiary: 'hsla(217, 37%, 22%, 1)',
				'primary-dark': 'hsla(231, 77%, 7%, 1)',
				'tertiary-dark': 'hsla(217, 26%, 19%, 1)',
				gray: 'hsla(218, 15%, 65%, 1)',
				'light-gray': 'hsla(202, 23%, 83%, 0.2)',
			},
			backgroundImage: {
				'years-pattern': "url('/images/years-pattern.svg')",
			},
			letterSpacing: {
				xl: '0.15em',
				'2xl': '0.2em',
			},
			lineHeight: {
				lg: '61px',
				xl: '78px',
			},
			padding: {
				6.5: '22px',
				15: '60px',
				34: '132px',
			},
			margin: {
				6.5: '22px',
			},
			fontSize: {
				'4.5xl': '40px',
			},
		},
	},
	plugins: [],
};
