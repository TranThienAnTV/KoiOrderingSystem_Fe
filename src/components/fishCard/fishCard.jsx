import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';


function FishCard({ fish }) {
  const { Meta } = Card;

  const navigate = useNavigate();

  return (
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
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={fish?.koiName}
        description={fish?.detail}
      />
      <Button onClick={() => navigate("/detail")} 
      style={{
        marginTop: '20px',
      }}>View Details</Button>
    </Card>
  )
}

export default FishCard