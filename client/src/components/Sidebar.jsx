import {
  HomeOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  TeamOutlined,
  FileTextOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { key: "/dashboard", icon: <HomeOutlined />, label: "Tổng quan" },
  { key: "/rooms", icon: <AppstoreOutlined />, label: "Phòng" },
  { key: "/tenants", icon: <TeamOutlined />, label: "Người thuê" },
  { key: "/contracts", icon: <FileTextOutlined />, label: "Hợp đồng" },
  { key: "/invoices", icon: <DollarOutlined />, label: "Hóa đơn" },
  { key: "/utilities", icon: <ThunderboltOutlined />, label: "Điện nước" },
  { key: "/settings", icon: <SettingOutlined />, label: "Cài đặt" },
];

export default function Sidebar({ collapsed }) {
  const nav = useNavigate(),
    loc = useLocation();
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">S</span>
        {!collapsed && (
          <span className="brand-text">
            <b>STAYHUB</b>
            <small>Quản lý nhà trọ</small>
          </span>
        )}
      </div>
      <div className="sidebar-scroll">
        {!collapsed && <div className="sidebar-caption">MENU</div>}
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          selectedKeys={[
            items.find((i) => loc.pathname.startsWith(i.key))?.key,
          ]}
          items={items}
          onClick={({ key }) => nav(key)}
        />
      </div>
      {!collapsed && (
        <div className="sidebar-bottom">Quản lý nhà trọ đơn giản hơn</div>
      )}
    </aside>
  );
}
