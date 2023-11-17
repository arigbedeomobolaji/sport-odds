import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
	content: [
		// "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		// "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		// "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		// Only this one achieve all
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#141C33",
			header: "#202A39",
			subheader: "#161F2C",
			secondary: "#09ff8d",
			body: "#060C1F",
		},
		extend: {
			fontFamily: {
				inter: ["var(--font-inter)"],
				opensans: ["var(--font-opensans)"],
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
		require("tailwind-scrollbar")({ nocompatible: true }),
	],
};
export default withMT(config);
