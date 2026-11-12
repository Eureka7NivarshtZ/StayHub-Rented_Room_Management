import { Card, Empty } from "antd";
export default function Contracts() {
  return (
    <div>
      <h1 className="page-heading">Quản lý hợp đồng</h1>
      <p className="page-description">
        Quản lý hợp đồng trong hệ thống StayHub.
      </p>
      <Card>
        <Empty description="Chức năng này sẽ được triển khai ở bước tiếp theo." />
      </Card>
    </div>
  );
}
