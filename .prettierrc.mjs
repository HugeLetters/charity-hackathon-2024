/** @type {import("prettier").Config} */
export default {
	arrowParens: "always",
	bracketSameLine: false,
	semi: true,
	singleQuote: false,
	singleAttributePerLine: true,
	trailingComma: "all",
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
