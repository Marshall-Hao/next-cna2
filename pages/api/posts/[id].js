export default (req, res) => {
  const {
    query: { id },
  } = req;
  res.statusCode = 200;

  res.json({
    title: `blog-${id}`,
    id: id,
    content: "wth",
  });
};
