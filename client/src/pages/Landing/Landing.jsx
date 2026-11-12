import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  ApartmentOutlined,
  AppstoreOutlined,
  TeamOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../contexts/AuthContext";
import "./Landing.scss";

// s: rented = đang thuê, empty = trống, debt = còn nợ tiền
const rooms = [
  { n: "P.101", s: "rented" },
  { n: "P.102", s: "rented" },
  { n: "P.103", s: "debt" },
  { n: "P.104", s: "empty" },
  { n: "P.201", s: "rented" },
  { n: "P.202", s: "empty" },
  { n: "P.203", s: "rented" },
  { n: "P.204", s: "rented" },
  { n: "P.301", s: "debt" },
  { n: "P.302", s: "rented" },
  { n: "P.303", s: "rented" },
  { n: "P.304", s: "empty" },
];

const statusLabel = { rented: "Đang thuê", empty: "Trống", debt: "Còn nợ" };

const features = [
  {
    icon: <ApartmentOutlined />,
    title: "Khu trọ",
    text: "Tạo nhiều khu trọ và chuyển qua lại giữa chúng mà không lẫn dữ liệu.",
  },
  {
    icon: <AppstoreOutlined />,
    title: "Phòng",
    text: "Mỗi phòng có giá thuê và trạng thái riêng: đang thuê hay còn trống.",
  },
  {
    icon: <TeamOutlined />,
    title: "Người thuê",
    text: "Lưu thông tin người thuê, biết ai ở phòng nào và liên hệ khi cần.",
  },
  {
    icon: <FileTextOutlined />,
    title: "Hợp đồng",
    text: "Theo dõi hợp đồng đang hiệu lực, tiền cọc và ngày hết hạn.",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Điện nước",
    text: "Nhập chỉ số cuối kỳ cho từng phòng, tiền điện nước tự tính.",
  },
  {
    icon: <DollarOutlined />,
    title: "Hóa đơn",
    text: "Chốt kỳ và lập hóa đơn cho cả khu trọ, xem ngay phòng nào chưa thu đủ.",
  },
];

const steps = [
  {
    title: "Tạo khu trọ và thêm phòng",
    text: "Nhập tên khu trọ, số phòng và giá thuê của từng phòng.",
  },
  {
    title: "Thêm người thuê và hợp đồng",
    text: "Gắn người thuê vào phòng, ghi tiền cọc và thời hạn thuê.",
  },
  {
    title: "Chốt điện nước và lập hóa đơn",
    text: "Mỗi cuối tháng nhập chỉ số, hệ thống lập hóa đơn cho mọi phòng.",
  },
];

export default function Landing() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="lp">
      <header className="lp-header">
        <div className="lp-wrap lp-header-inner">
          <Link to="/" className="lp-brand" aria-label="StayHub">
            <span className="lp-brand-mark">S</span>
            <span>StayHub</span>
          </Link>
          <nav className="lp-nav" aria-label="Điều hướng chính">
            <a href="#tinh-nang">Tính năng</a>
            <a href="#cach-dung">Cách dùng</a>
          </nav>
          <div className="lp-header-actions">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button type="primary">Vào trang quản lý</Button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="lp-login">
                  Đăng nhập
                </Link>
                <Link to="/register">
                  <Button type="primary">Đăng ký</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-inner">
            <div className="lp-hero-text">
              <h1>
                Biết phòng nào trống, phòng nào còn nợ tiền ngay khi mở máy
              </h1>
              <p>
                StayHub giúp chủ trọ theo dõi phòng, người thuê, hợp đồng, điện
                nước và hóa đơn hàng tháng ở một nơi, thay cho sổ tay và bảng
                tính.
              </p>
              <div className="lp-hero-actions">
                <Link to={isAuthenticated ? "/dashboard" : "/register"}>
                  <Button type="primary" size="large">
                    {isAuthenticated ? "Vào trang quản lý" : "Tạo tài khoản miễn phí"}
                  </Button>
                </Link>
                {!isAuthenticated && (
                  <Link to="/login">
                    <Button size="large">Tôi đã có tài khoản</Button>
                  </Link>
                )}
              </div>
            </div>

            <div className="lp-board" aria-label="Ví dụ bảng phòng">
              <div className="lp-board-head">
                <div>
                  <b>Khu trọ Hoa Mai</b>
                  <span>12 phòng · kỳ T.11/2026</span>
                </div>
                <ul className="lp-legend">
                  <li className="is-rented">Đang thuê</li>
                  <li className="is-empty">Trống</li>
                  <li className="is-debt">Còn nợ</li>
                </ul>
              </div>
              <div className="lp-rooms">
                {rooms.map((r, i) => (
                  <div
                    key={r.n}
                    className={`lp-room is-${r.s}`}
                    style={{ "--i": i }}
                  >
                    <b>{r.n}</b>
                    <span>{statusLabel[r.s]}</span>
                  </div>
                ))}
              </div>
              <div className="lp-board-foot">
                <span>P.103 · Hóa đơn T.11/2026</span>
                <span className="lp-board-debt">Còn thiếu 1.500.000 đ</span>
              </div>
            </div>
          </div>
        </section>

        <section id="tinh-nang" className="lp-section">
          <div className="lp-wrap lp-split">
            <div className="lp-split-head">
              <h2>Mọi việc quản lý trọ trong cùng một ứng dụng</h2>
              <p>
                Từ lúc nhận người thuê mới đến lúc thu tiền cuối tháng, bạn
                không cần chuyển qua lại giữa nhiều file.
              </p>
            </div>
            <ul className="lp-features">
              {features.map((f) => (
                <li key={f.title}>
                  <span className="lp-feature-icon">{f.icon}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cach-dung" className="lp-section lp-section-tint">
          <div className="lp-wrap">
            <h2 className="lp-center">Bắt đầu trong ba bước</h2>
            <ol className="lp-steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="lp-step-no">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="lp-cta">
          <div className="lp-wrap lp-cta-inner">
            <h2>Thu tiền trọ đủ và đúng hạn hơn từ tháng này</h2>
            <Link to={isAuthenticated ? "/dashboard" : "/register"}>
              <Button size="large" className="lp-cta-btn">
                {isAuthenticated ? "Vào trang quản lý" : "Tạo tài khoản miễn phí"}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-wrap lp-footer-inner">
          <span className="lp-brand">
            <span className="lp-brand-mark">S</span>
            <span>StayHub</span>
          </span>
          <span>© {new Date().getFullYear()} StayHub · Quản lý nhà trọ</span>
        </div>
      </footer>
    </div>
  );
}
