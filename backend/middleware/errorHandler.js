const notFound = (req, res, next) => {
  const error = new Error(`Not found ${req.orginalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // handle cast error
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found ";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: err.stack,
  });
};

export { errorHandler, notFound };
