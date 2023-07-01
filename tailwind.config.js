/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
		extend: {
			fontFamily: {
				'lily-script-one': ['Lily Script One', 'sans-serif'],
				'Inter': ['Inter','sans-serif'],
			},
		},
	},
  plugins: [],
};
