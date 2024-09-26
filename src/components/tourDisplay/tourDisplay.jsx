import React from 'react';
import { Carousel } from 'antd';
import './tourDisplay.scss';

const tourDisplay = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        arrows={true} // Hiển thị nút mũi tên điều hướng
        infinite={false} // Không cuộn lại từ đầu
        slidesToShow={3} // Số lượng mục hiển thị trên một màn hình
        slidesToScroll={1} // Số lượng mục cuộn mỗi lần
        dotPosition="bottom" // Vị trí của dot indicator
        draggable={true} // Kéo để cuộn
      >
        <div className="carousel-item">New Year's Eve in New York City</div>
        <div className="carousel-item">6 best ryokans in Japan to rejuvenate yourself</div>
        <div className="carousel-item">7 best places in Asia to celebrate Christmas</div>
        <div className="carousel-item">Explore Europe in Winter</div>
        <div className="carousel-item">Top destinations for food lovers</div>
      </Carousel>
    </div>
  );
};

export default tourDisplay;
