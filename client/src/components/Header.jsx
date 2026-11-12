import { Avatar, Badge, Button, Dropdown, Space } from "antd";
import {
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header({ collapsed, onToggle }) {
  const { user, signOut } = useAuth(),
    nav = useNavigate();
  const name = user?.fullName || "Chủ trọ";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const items = [
    {
      key: "logout",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
      onClick: () => {
        signOut();
        nav("/login");
      },
    },
  ];

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Button
          className="topbar-toggle"
          type="text"
          aria-label={collapsed ? "Mở rộng sidebar" : "Thu gọn sidebar"}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
        />
        <div className="topbar-title">
          <b>Không gian quản lý</b>
          <small>Quản lý nhà trọ</small>
        </div>
      </div>
      <div className="topbar-right">
        <Badge dot={false}>
          <Button
            className="topbar-toggle"
            type="text"
            aria-label="Thông báo"
            icon={<BellOutlined />}
          />
        </Badge>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button className="topbar-user" type="text">
            <Space>
              <Avatar
                size={28}
                style={{ background: "#d1fae5", color: "#047857" }}
              >
                {initials}
              </Avatar>
              <span className="topbar-user-name">{name}</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </header>
  );
}
