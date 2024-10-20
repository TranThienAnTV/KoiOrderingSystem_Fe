import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import TourCard from '../tourCard/tourCard';
import './TourDisplay.scss';
import api from '../../config/axios';

function TourDisplay() {

  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await api.get("/tour/search");

      setTours(response.data.content);
    } catch (error) {
      console.log(error.toString());
    }
  }


  useEffect(() => {
    fetchTours();
    console.log(tours);
  }, [])

  
  

  return (
    <div className="carousel-container" >
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
          draggable={true} // Kéo để cuộn
          dots={false}
        >
          {
            tours.map((tour) => (
              <div key={tour.id} className="carousel-item">
                <TourCard isFirst={true} tour={tour} />
              </div>
            ))
          }

        </Carousel>
      </div>
    </div >
  );
}

export default TourDisplay