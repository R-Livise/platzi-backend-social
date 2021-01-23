module.exports = {
  info: {
    version: '1.0.0',
    title: 'Social Platzi',
    license: {
      name: 'MIT',
    },
    description: 'Api social platzi',
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  filesPattern: './**/*.js', // Glob pattern to find your jsdoc files (it supports arrays too ['./**/*.controller.js', './**/*.route.js'])
  swaggerUIPath: '/your-url', // SwaggerUI will be render in this url. Default: '/api-docs'
  baseDir: __dirname,
  exposeSwaggerUI: true, // Expose OpenAPI UI. Default true
  exposeApiDocs: false, // Expose Open API JSON Docs documentation in `apiDocsPath` path. Default false.
  apiDocsPath: '/v3/api-docs', // Open API JSON Docs endpoint. Default value '/v3/api-docs'.
};
