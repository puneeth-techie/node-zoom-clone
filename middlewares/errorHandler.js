import createError from "http-errors";

const notFound = (req, res, next) => {
  const error = new createError.NotFound();
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode).json({
    Error: {
      message: process.env.NODE_ENV === "development" ? err.message : null,
      stack: err.stack,
    },
  });
};

export { notFound, errorHandler };
