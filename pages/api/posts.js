export default (req, res) => {
  res.statusCode = 200;
  const posts = Array(6)
    .fill(0)
    .map((item, idx) => ({
      id: idx + 1,
      title: `${idx + 1}blog`,
    }));

  res.json(posts);
};
