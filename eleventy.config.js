module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/image");

    eleventyConfig.addPassthroughCopy("src/assets/**/*.pdf");

	// Watch content images for the image pipeline.
	// eleventyConfig.addWatchTarget("src/**/*.{md,svg,webp,png,jpeg}");

	return {
		passthroughFileCopy: true,
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		dir: {
			input: "src",
			includes: "_includes",
            data: "_data",
			output: "_site"
		},
	};
};