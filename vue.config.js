module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/new-kg-web/" : "/",
  productionSourceMap: false,
  devServer: {
    port: 8086
  }
};
