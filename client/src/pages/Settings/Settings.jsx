import { Card, Empty } from "antd";
export default function Settings() {
  return (
    <div>
      <h1 className="page-heading">Cài đặt</h1>
      <p className="page-description">Cài đặt trong hệ thống StayHub.</p>
      <Card>
        <Empty description="Chức năng này sẽ được triển khai ở bước tiếp theo." />
      </Card>
    </div>
  );
}
