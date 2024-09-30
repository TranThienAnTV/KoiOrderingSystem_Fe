import React from "react";
import { Card, Button } from "antd";
import "./farmCard.scss"; // File CSS chứa các class đã định nghĩa

const farmCard = () => (
  <Card className="farm-card">
    <div className="farm-card-content">
      {/* Bên trái hiển thị hình ảnh farm */}
      <img src="https://koitrips.com/wp-content/uploads/2016/09/DSC_0006-1.jpg" alt="Farm Image" className="farm-image" />
      
      {/* Bên phải hiển thị thông tin */}
      <div className="farm-info">
        <h2 className="farm-title">Koi Farm's name</h2>
        <p className="farm-description">
        The 2 brothers run the business like a well oiled machine. Travelling together to America a few times we have built up a great relationship with Yagenji. Our clients buy every single time from here. The main Koi House at Yagenji Koi Farm is one of the best in the area, its lovely and clean and the Koi are easy to view. The brothers Daisuke and Tokko are VERY welcoming and will always have a coffee waiting while you look around.and Tokko are VERY welcom look around.
        </p>
        <div className="farm-actions">
          <Button className="farm-btn nut-xanh">Green</Button>
          <Button className="farm-btn nut-do">Red</Button>
          <Button className="farm-btn nut-vang">Yellow</Button>
        </div>
      </div>
    </div>
  </Card>
);

export default farmCard;
