/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primarybg: "#395144",
				secondary: "#4E6C50",
				cursor: "#F0EBCE",
				intro: "#AA8B56",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				opensans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
