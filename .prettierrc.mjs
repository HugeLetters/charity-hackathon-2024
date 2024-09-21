/** @type {import("prettier").Config} */
export default {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	semi: true,
	singleQuote: false,
	singleAttributePerLine: true,
	trailingComma: "es5",
	useTabs: true,
	printWidth: 80,
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
