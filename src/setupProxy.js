  const endpoint = 'http://15.188.57.221/apiPaletasColores/public/index.php'
  const proxy =  require(endpoint);
module.exports = (app) => {
  app.use(
    "/api/",
    proxy({
      target: "https://target.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/"
      },
    })
  );
};