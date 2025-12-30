module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.png");


  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: process.env.ELEVENTY_ENV === "production"
      ? "/hildings-hantverk-hemsida/"
      : "/"
  };
};
