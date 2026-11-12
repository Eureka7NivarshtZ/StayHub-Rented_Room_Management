import { Card, Col, Row, Statistic, Table, Tag } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  DollarOutlined,
} from "@ant-design/icons";
const data = [
  {
    key: 1,
    room: "P.101",
    property: "Khu trọ A",
    tenant: "Nguyễn Minh Anh",
    status: "Đang thuê",
  },
  {
    key: 2,
    room: "P.102",
    property: "Khu trọ A",
    tenant: "Trần Hoàng Nam",
    status: "Đang thuê",
  },
  {
    key: 3,
    room: "P.201",
    property: "Khu trọ B",
    tenant: "Chưa có người thuê",
    status: "Phòng trống",
  },
];
const columns = [
  { title: "Phòng", dataIndex: "room" },
  { title: "Khu trọ", dataIndex: "property" },
  { title: "Người thuê", dataIndex: "tenant" },
  {
    title: "Trạng thái",
    dataIndex: "status",
    render: (s) => (
      <Tag color={s === "Đang thuê" ? "success" : "default"}>{s}</Tag>
    ),
  },
];
export default function Dashboard() {
  return (
    <div>
      <h1 className="page-heading">Tổng quan</h1>
      <p className="page-description">
        Theo dõi tình hình hoạt động các khu trọ của bạn.
      </p>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              title="Tổng khu trọ"
              value={2}
              prefix={<HomeOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              title="Tổng số phòng"
              value={24}
              prefix={<AppstoreOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              title="Đang có người thuê"
              value={18}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              title="Doanh thu tháng"
              value={36.5}
              precision={1}
              suffix="triệu"
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Card title="Tình trạng phòng gần đây" style={{ marginTop: 24 }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: true }}
        />
      </Card>
    </div>
  );
}
