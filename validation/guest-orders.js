const checkLengthId = (req, res, next) => {
  const { id } = req.body;

  if (id.length === 24) {
    return next();
  }
  res
    .status(500)
    .json({ message: "order numbers are expected to be 24 character long" });
};

export default checkLengthId;
