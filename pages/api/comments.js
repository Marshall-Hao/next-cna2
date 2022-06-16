export default (req, res) => {
  res.statusCode = 200;
  const comments = Array(6)
    .fill(0)
    .map((item, idx) => ({
      id: idx + 1,
      content: `${idx + 1}content`,
    }));

  res.json(comments);
};
