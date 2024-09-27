// @ts-check
import { defineConfig } from "astro/config";

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "never",
	},
	vite: {
		css: {
			transformer: "lightningcss",
			lightningcss: {
				targets: browserslistToTargets(browserslist(">= 0.25%")),
			},
		},
		build: {
			cssMinify: "lightningcss",
		},
	},
	integrations: [purgecss()],
});
