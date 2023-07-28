const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/profiles',
    createProxyMiddleware({
      // target: 'http://localhost:3000/profiles',
      target:
        'https://stackblitzstarterscgarmq-cjmt--3000--bec01ace.local-credentialless.webcontainer.io',
      changeOrigin: true,
    })
  );
};
