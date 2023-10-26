import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				portfolio: {
					primary: "#45214a",
					secondary: "#323050",
					third: "#21445B",
					forth: "#1A6566",
				},
			},
		},
	},
	plugins: [],
};
export default config;
