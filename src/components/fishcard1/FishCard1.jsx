import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import "./FishCard1.scss";
import { Link } from "react-router-dom";

const { Meta } = Card;

const FishCard1 = () => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      className="fish-name"
      title="Tên loại cá 1"
      description={
        <div className="card-description">
          <p>Trại: Dainichi Koi Farm</p>
          <p>Giới tính: Koi đực</p>
          <p>Tuổi: 2 tuổi</p>
          <p>Kích thước: 38cm</p>
        </div>
      }
    />
    <Button type="primary" className="card-button">
      <Link to="/viewdetail" style={{ color: 'white', textDecoration: 'none' }}>
        View Detail
      </Link>
    </Button>
  </Card>
);

export default FishCard1;
