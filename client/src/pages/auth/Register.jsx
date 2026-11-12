import { useState } from "react";
import { Alert, Button, Form, Input, message } from "antd";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Auth.scss";
export default function Register() {
  const [loading, setLoading] = useState(false),
    [error, setError] = useState(""),
    { signUp } = useAuth(),
    nav = useNavigate();
  async function submit(v) {
    setLoading(true);
    setError("");
    try {
      await signUp(v);
      message.success("Đăng ký thành công");
      nav("/dashboard", { replace: true });
    } catch (e) {
      setError(
        e.response?.data?.message || "Không thể đăng ký. Vui lòng thử lại.",
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
          <h1>Bắt đầu quản lý nhà trọ của bạn.</h1>
          <p>
            Tạo tài khoản chủ trọ để quản lý thông tin tập trung, rõ ràng và
            thuận tiện.
          </p>
        </div>
        <small>StayHub © 2026</small>
      </section>
      <section className="auth-form-panel">
        <div className="auth-form">
          <h2>Tạo tài khoản</h2>
          <div className="auth-subtitle">
            Đăng ký tài khoản dành cho chủ trọ.
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
              label="Họ và tên"
              name="fullName"
              rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Nguyễn Văn A" />
            </Form.Item>
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
            <Form.Item label="Số điện thoại" name="phone">
              <Input prefix={<PhoneOutlined />} placeholder="09xxxxxxxx" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu" },
                { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Tối thiểu 6 ký tự"
              />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Vui lòng xác nhận mật khẩu" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    return !value || getFieldValue("password") === value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Mật khẩu xác nhận không khớp."),
                        );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Nhập lại mật khẩu"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Đăng ký
            </Button>
          </Form>
          <div className="auth-footer">
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
