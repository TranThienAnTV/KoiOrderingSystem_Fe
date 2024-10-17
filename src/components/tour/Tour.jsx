import React from "react";
import { Card, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./Tour.scss";

const { Meta } = Card;

const Tour = () => (
  <div className="tour-page">
    {/* Banner */}
    <div className="tour-banner">
      <h1>Khám Phá Các Tour Tại Koi Farm</h1>
      <p>Trải nghiệm một chuyến tham quan đầy thú vị tại Koi Farm với nhiều hoạt động hấp dẫn.</p>
      <Button type="primary">
        <Link to="/book">Đặt Tour Ngay</Link>
      </Button>
    </div>

    {/* Danh Sách Các Tour */}
    <section className="tour-list">
      <h2>Danh Sách Các Tour</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            cover={<img alt="tour1" src="https://bizweb.dktcdn.net/100/004/358/files/ho-ca-koi-5.jpg?v=1629106778743" />}
            actions={[
              <Button type="primary">
                <Link to="/tourdetail">Xem Chi Tiết</Link>
              </Button>
            ]}
          >
            <Meta title="Tour Tham Quan Cơ Bản" description="Thời lượng: 2 giờ" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={<img alt="tour2" src="https://link-to-tour-image-2.jpg" />}
            actions={[
              <Button type="primary">
                <Link to="/tour-detail/2">Xem Chi Tiết</Link>
              </Button>
            ]}
          >
            <Meta title="Tour Trải Nghiệm Cao Cấp" description="Thời lượng: 4 giờ" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={<img alt="tour3" src="https://link-to-tour-image-3.jpg" />}
            actions={[
              <Button type="primary">
                <Link to="/tour-detail/3">Xem Chi Tiết</Link>
              </Button>
            ]}
          >
            <Meta title="Tour Khám Phá Cả Ngày" description="Thời lượng: 8 giờ" />
          </Card>
        </Col>
      </Row>
    </section>
  </div>
);

export default Tour;
