import { useState } from "react";
import { Alert, Button, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Auth.scss";
export default function Login() {
  const [loading, setLoading] = useState(false),
    [error, setError] = useState(""),
    { signIn } = useAuth(),
    nav = useNavigate();
  async function submit(v) {
    setLoading(true);
    setError("");
    try {
      await signIn(v);
      message.success("Đăng nhập thành công");
      nav("/dashboard", { replace: true });
    } catch (e) {
      setError(
        e.response?.data?.message || "Không thể đăng nhập. Vui lòng thử lại.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="auth-page">
      <section className="auth-brand-panel">
        <div className="auth-brand-logo">StayHub</div>
        <div>
          <h1>Quản lý nhà trọ dễ dàng hơn.</h1>
          <p>
            Quản lý khu trọ, phòng, khách thuê và hóa đơn trên cùng một nền
            tảng.
          </p>
        </div>
        <small>StayHub © 2026</small>
      </section>
      <section className="auth-form-panel">
        <div className="auth-form">
          <h2>Chào mừng trở lại!</h2>
          <div className="auth-subtitle">
            Đăng nhập vào tài khoản chủ trọ của bạn.
          </div>
          {error && (
            <Alert
              type="error"
              showIcon
              message={error}
              style={{ marginBottom: 16 }}
            />
          )}
          <Form layout="vertical" size="large" onFinish={submit}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="name@example.com" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Đăng nhập
            </Button>
          </Form>
          <div className="auth-footer">
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
