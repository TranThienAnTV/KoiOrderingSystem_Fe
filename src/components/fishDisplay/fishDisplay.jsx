import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import './fishDisplay.scss';
import FishCard from '../fishCard/FishCard';
import api from '../../config/axios';

const FishDisplay = () => {

  const [koiFishs, setKoiFishs] = useState([]);

  const fetchKoiFishs = async () => {
    try {
      const response = await api.get("/koifish");
      setKoiFishs(response.data);
    } catch (error) {
      console.log(error.toString());
    }
  }

  useEffect(() => {
    fetchKoiFishs();
    console.log(koiFishs);
  }, [])

  return (
    <div className="carousel-container">
      <div className="fish-label">
        <div className="text-wrapper-title">Con ca</div>
        <div className="text-wrapper-describe">mieu ta gi do</div>
      </div>
      <div className="Carousel-bar">
        <Carousel
          arrows={true} // Hiển thị nút mũi tên điều hướng
          infinite={false} // Không cuộn lại từ đầu
          slidesToShow={3} // Số lượng mục hiển thị trên một màn hình
          slidesToScroll={3} // Số lượng mục cuộn mỗi lần
          dotPosition="bottom" // Vị trí của dot indicator
          draggable={true} // Kéo để cuộn
        >
          {
            koiFishs.map((fish) => (
              <div key={fish.id} className="carousel-item">
                <FishCard fish={fish} />
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};

export default FishDisplay;
