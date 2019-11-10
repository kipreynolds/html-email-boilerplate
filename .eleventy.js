module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/images");

  return {
    passthroughFileCopy: true,
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "includes",
      data: "data",
      output: "site"
    }
  };
};