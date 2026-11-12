import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./MainLayout.scss";

const STORAGE_KEY = "stayhub_sidebar_collapsed";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) return saved === "1";
    } catch {
      /* ignore */
    }
    return window.innerWidth < 992;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [collapsed]);

  return (
    <div className={`app-shell ${collapsed ? "is-collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} />
      <div className="main-area">
        <Header
          collapsed={collapsed}
          onToggle={() => setCollapsed((v) => !v)}
        />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
