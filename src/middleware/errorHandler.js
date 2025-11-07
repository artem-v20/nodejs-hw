import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      message: error.message || error.name,
    });
  }

  const { status = 500, message = 'Server error' } = error;
  res.status(status).json({
    message,
  });
};
