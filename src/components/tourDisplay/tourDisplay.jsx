import React from 'react';
import { Carousel } from 'antd';
import './tourDisplay.scss';
import TourCard from '../tourCard/tourCard';

const TourDisplay = () => {
  return (
    <div className="carousel-container">
      <div className="tour-label">
        <div className="text-wrapper-title">Ghi gi do</div>
        <div className="text-wrapper-describe">mieu ta gi do</div>
      </div>
      <div className="Carousel-bar">
        <Carousel
          arrows={true} // Hiển thị nút mũi tên điều hướng
          infinite={false} // Không cuộn lại từ đầu
          slidesToShow={3} // Số lượng mục hiển thị trên một màn hình
          slidesToScroll={1} // Số lượng mục cuộn mỗi lần
          dotPosition="bottom" // Vị trí của dot indicator
          draggable={true} // Kéo để cuộn
        >
          <div className="carousel-item">
            <TourCard isFirst={true} />
          </div>
          <div className="carousel-item">
            <TourCard isFirst={false} />
          </div>
          <div className="carousel-item">
            <TourCard isFirst={false} />
          </div>
          <div className="carousel-item">
            <TourCard isFirst={false} />
          </div>
          <div className="carousel-item">
            <TourCard isFirst={false} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TourDisplay;
