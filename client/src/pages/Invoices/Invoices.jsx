import { Card, Empty } from "antd";
export default function Invoices() {
  return (
    <div>
      <h1 className="page-heading">Quản lý hóa đơn</h1>
      <p className="page-description">
        Quản lý hóa đơn trong hệ thống StayHub.
      </p>
      <Card>
        <Empty description="Chức năng này sẽ được triển khai ở bước tiếp theo." />
      </Card>
    </div>
  );
}
