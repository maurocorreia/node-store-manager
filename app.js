const express = require('express');

const app = express();

const router = require('./routes');
const error = require('./middlewares/errorMiddleware');

app.get('/', (_request, response) => {
  response.send();
});

app.use(router);
app.use(error);

module.exports = app;
