import React from "react";
import { Card, Button, Row, Col } from "antd";
import "./KoiFarm.scss";
import { Link } from "react-router-dom";

const { Meta } = Card;

const KoiFarm = () => (
  <div className="koi-farm-page">
    {/* Header Banner */}
    <div className="header-banner">
      <h1>Welcome to Dainichi Koi Farm</h1>
      <p>Discover the best Koi fish raised with care and dedication.</p>
    </div>

    {/* Farm Highlights Section */}
    <section className="farm-highlights">
      <h2>Farm Highlights</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card cover={<img alt="feature" src="https://link-to-your-image-1.jpg" />}>
            <Meta title="High-Quality Facilities" description="State-of-the-art facilities for the best koi care." />
          </Card>
        </Col>
        <Col span={8}>
          <Card cover={<img alt="feature" src="https://link-to-your-image-2.jpg" />}>
            <Meta title="Variety of Koi Fish" description="We offer a wide range of koi species and colors." />
          </Card>
        </Col>
        <Col span={8}>
          <Card cover={<img alt="feature" src="https://link-to-your-image-3.jpg" />}>
            <Meta title="Expert Care" description="Our koi are raised with the utmost care by experienced staff." />
          </Card>
        </Col>
      </Row>
    </section>

    {/* Gallery Section */}
    <section className="gallery">
      <h2>Farm Gallery</h2>
      <Row gutter={16}>
        <Col span={6}><img src="https://link-to-gallery-image-1.jpg" alt="gallery" className="gallery-image" /></Col>
        <Col span={6}><img src="https://link-to-gallery-image-2.jpg" alt="gallery" className="gallery-image" /></Col>
        <Col span={6}><img src="https://link-to-gallery-image-3.jpg" alt="gallery" className="gallery-image" /></Col>
        <Col span={6}><img src="https://link-to-gallery-image-4.jpg" alt="gallery" className="gallery-image" /></Col>
      </Row>
    </section>

    {/* Testimonials Section */}
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Meta description="I loved visiting the farm and learning about the koi breeding process." />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Meta description="The koi are beautiful, and the staff is very knowledgeable!" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Meta description="A wonderful experience for the entire family!" />
          </Card>
        </Col>
      </Row>
    </section>

    {/* Contact Section */}
    <section className="contact">
      <h2>Contact Us</h2>
      <p>For tours and inquiries, please reach out to us:</p>
      <Button type="primary">
        <Link to="/contact">Contact Us</Link>
      </Button>
    </section>
  </div>
);

export default KoiFarm;
