module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/ogimg.png");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/enth-spec.png");
    eleventyConfig.addPassthroughCopy("src/chihu-img.png");

    eleventyConfig.addFilter("sortByYear", (arr) =>
        [...arr].sort((a, b) => b.year - a.year)
    );
    eleventyConfig.addFilter("getProject", (projects, slug) =>
        projects.find(p => p.slug === slug)
    );
    eleventyConfig.addFilter("nextProject", (projects, slug) => {
        const idx = projects.findIndex(p => p.slug === slug);
        return idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;
    });

    return {
        dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
