const express = require('express');
const logger = require('morgan');

const router = require('./api/routes');
const { notFoundError, errorHandler } = require('./api/middleware/errors');

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use('/redis', router);

app.use(notFoundError);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server was started');
});
