import { Card, Empty } from "antd";
export default function Rooms() {
  return (
    <div>
      <h1 className="page-heading">Quản lý phòng</h1>
      <p className="page-description">Quản lý phòng trong hệ thống StayHub.</p>
      <Card>
        <Empty description="Chức năng này sẽ được triển khai ở bước tiếp theo." />
      </Card>
    </div>
  );
}
