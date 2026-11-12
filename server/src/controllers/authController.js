import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/database.js";
function token(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: "landlord" },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" },
  );
}
export async function register(req, res, next) {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName?.trim() || !email?.trim() || !password)
      return res
        .status(400)
        .json({ message: "Vui lòng nhập họ tên, email và mật khẩu." });
    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Mật khẩu phải có ít nhất 6 ký tự." });
    const normalized = email.trim().toLowerCase();
    const [found] = await pool.execute("SELECT id FROM users WHERE email=?", [
      normalized,
    ]);
    if (found.length)
      return res.status(409).json({ message: "Email này đã được đăng ký." });
    const hash = await bcrypt.hash(password, 12);
    const [result] = await pool.execute(
      "INSERT INTO users(full_name,email,phone,password_hash) VALUES(?,?,?,?)",
      [fullName.trim(), normalized, phone || null, hash],
    );
    const user = {
      id: result.insertId,
      fullName: fullName.trim(),
      email: normalized,
      phone: phone || null,
    };
    res
      .status(201)
      .json({ message: "Đăng ký thành công.", token: token(user), user });
  } catch (e) {
    next(e);
  }
}
export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Vui lòng nhập email và mật khẩu." });
    const [rows] = await pool.execute(
      "SELECT id,full_name AS fullName,email,phone,password_hash FROM users WHERE email=?",
      [email.trim().toLowerCase()],
    );
    if (!rows.length)
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không chính xác." });
    const user = rows[0];
    if (!(await bcrypt.compare(password, user.password_hash)))
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không chính xác." });
    delete user.password_hash;
    res.json({ message: "Đăng nhập thành công.", token: token(user), user });
  } catch (e) {
    next(e);
  }
}
