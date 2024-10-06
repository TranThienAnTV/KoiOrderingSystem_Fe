import React from 'react';
import { Carousel } from 'antd';
import './farmDisplay.scss';
import FarmCard from '../farmCard/farmCard'; // Đảm bảo bạn đã tạo FarmCard component

const farmDisplay = () => {
  return (
    <div className="carousel-container">
      {/* Label cho phần hiển thị farm */}
      <div className="farm-label">
        <div className="text-wrapper-title">Koi Farm Display</div>
        <div className="text-wrapper-describe">Information about the Koi farms</div>
      </div>

      {/* Carousel hiển thị các farm card */}
      <div className="carousel-bar">
        <Carousel 
          arrows={true} // Hiển thị nút mũi tên điều hướng
          infinite={false} // Không cuộn lại từ đầu
          slidesToShow={1} // Chỉ hiển thị 1 FarmCard trên một màn hình
          slidesToScroll={1} // Số lượng mục cuộn mỗi lần là 1
          dotPosition="bottom" // Vị trí của dot indicator
          draggable={true} // Kéo để cuộn
        >
          <div className="carousel-item">
            <FarmCard /> {/* Thêm các FarmCard item */}
          </div>
          <div className="carousel-item">
            <FarmCard />
          </div>
          <div className="carousel-item">
            <FarmCard />
          </div>
          <div className="carousel-item">
            <FarmCard />
          </div>
          <div className="carousel-item">
            <FarmCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default farmDisplay;
