exports.success = function (req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || '';

  return res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};

exports.error = function (req, res, message, status, err) {
  let statusCode = status || 500;
  let statusMessage = message || 'Error Interno';
  console.error(err);
  return res.status(status).send({
    error: statusMessage,
    status: statusCode,
    body: false,
  });
};
