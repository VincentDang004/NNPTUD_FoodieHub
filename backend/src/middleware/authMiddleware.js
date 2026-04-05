const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.json({ message: "Chưa đăng nhập" });

  try {
    req.user = jwt.verify(token, "secret123");
    next();
  } catch {
    res.json({ message: "Token lỗi" });
  }
};