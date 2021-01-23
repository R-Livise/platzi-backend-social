const config = require('../config');
const configSwager = require('./configSwager');

const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const app = express();
expressJSDocSwagger(app)(configSwager);

const user = require('./components/user/network');

//ROUTER
app.use('/app', express.static('./public'));
app.use(express.json());

app.use('/api/user', user);

app.listen(config.api.port, () => {
  console.log(
    `Servidor levandado en ${config.api.host}:${config.api.port}`
  );
});
