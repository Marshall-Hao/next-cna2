export default (req, res) => {
  if (req.method === "POST") {
    res.status(200).json({ method: "post!" });
  } else {
    res.status(200).json({ method: "get!" });
  }
};
