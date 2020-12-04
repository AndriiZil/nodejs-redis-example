module.exports = {
    notFoundError: (req, res, next) => {
        const url = `${req.protocol}/${req._remoteAddress}${req.originalUrl}`;
        const error = new Error(`Resource was Not Found URL: ${url}`);
        error.code = 404;
        next(error);
    },
    errorHandler: (err, req, res, next) => {
        const statusCode = err.code || 500;
        res.status(statusCode).json({
            message: err.message || 'Something went wrong',
            code: statusCode,
            stack: process.env.NODE_ENV === 'production' ? ':(' : err.stack,
        });
    }
}