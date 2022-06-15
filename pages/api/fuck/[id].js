export default (req, res) => {
  // * deep layer deconstructoring
  const {
    query: { id },
  } = req;

  res.status(200).json({ fuck: id });
};
