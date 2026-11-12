import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import tenantRoutes from "./routes/tenantRoutes.js";
import contractRoutes from "./routes/contractRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import utilityRoutes from "./routes/utilityRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/api/health", (_req, res) =>
  res.json({ success: true, message: "StayHub API is running" }),
);
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/contracts", contractRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/utilities", utilityRoutes);
app.use(errorMiddleware);
export default app;
