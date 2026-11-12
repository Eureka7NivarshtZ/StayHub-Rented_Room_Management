import { Card, Empty } from "antd";
export default function Tenants() {
  return (
    <div>
      <h1 className="page-heading">Quản lý người thuê</h1>
      <p className="page-description">
        Quản lý người thuê trong hệ thống StayHub.
      </p>
      <Card>
        <Empty description="Chức năng này sẽ được triển khai ở bước tiếp theo." />
      </Card>
    </div>
  );
}
