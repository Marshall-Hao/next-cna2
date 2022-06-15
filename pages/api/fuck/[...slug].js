export default (req, res) => {
  const {
    query: { slug },
  } = req;

  res.status(200).json({ slug });
};
