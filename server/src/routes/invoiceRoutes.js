import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
const r = Router();
r.use(auth);
r.get("/", (_q, s) =>
  s.json({ data: [], message: "API hóa đơn đang chờ triển khai." }),
);
export default r;
