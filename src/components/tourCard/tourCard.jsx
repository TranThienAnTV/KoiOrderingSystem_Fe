import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const tourCard = ({ isFirst, tour }) => (
  <Card
    style={{
      width: isFirst ? 400 : 300, // Make the first card larger
      margin: '0 auto',
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={tour?.tourName}
      description={
        <>
          <div>{tour?.decription}</div>
          <div>{tour?.tourStart} - {tour?.tourEnd}</div>
          <div>{tour?.priceAdult}</div>
        </>
      }
    />
  </Card>
);
export default tourCard;