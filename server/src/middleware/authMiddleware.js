import jwt from "jsonwebtoken";
export default function authMiddleware(req, res, next) {
  const h = req.headers.authorization;
  if (!h?.startsWith("Bearer "))
    return res.status(401).json({ message: "Vui lòng đăng nhập." });
  try {
    req.user = jwt.verify(h.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    return res
      .status(401)
      .json({ message: "Phiên đăng nhập không hợp lệ hoặc đã hết hạn." });
  }
}
