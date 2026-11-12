import { Card, Empty } from "antd";
export default function Utilities() {
  return (
    <div>
      <h1 className="page-heading">Điện nước</h1>
      <p className="page-description">Điện nước trong hệ thống StayHub.</p>
      <Card>
        <Empty description="Chức năng này sẽ được triển khai ở bước tiếp theo." />
      </Card>
    </div>
  );
}
