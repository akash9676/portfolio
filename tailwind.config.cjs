/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
	'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primarybg: "#395144",
				secondary: "#4E6C50",
				cursor: "#F0EBCE",
				intro: "#AA8B56",
				about : "#f5ebe0",
				skillhead : "#d5bdaf",
				skills: '#eae2b7'
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				opensans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwind-scrollbar'),
		require('tailwind-scrollbar-hide'),
		require("tw-elements/dist/plugin.cjs")
	],
};
