import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Rooms from "../pages/Rooms/Rooms";
import Tenants from "../pages/Tenants/Tenants";
import Contracts from "../pages/Contracts/Contracts";
import Invoices from "../pages/Invoices/Invoices";
import Utilities from "../pages/Utilities/Utilities";
import Settings from "../pages/Settings/Settings";
function Home() {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />;
}
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
