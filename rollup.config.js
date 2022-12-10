import sveltePreprocess from "svelte-preprocess";
const production = !process.env.ROLLUP_WATCH;


sveltePreprocess({
	sourceMap: !production,
	postcss: {
		plugins: [
			require("tailwindcss"),
			require("autoprefixer"),
		],
	},
})