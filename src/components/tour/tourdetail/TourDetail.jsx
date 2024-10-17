import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './TourDetail.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TourPage() {
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbSlider.current);
  }, []);
  const mainImages = [
    'https://bizweb.dktcdn.net/100/004/358/files/ca-koi-chat-luong.jpg?v=1493347499773',
    'https://bizweb.dktcdn.net/100/004/358/files/ca-koi-chat-luong.jpg?v=1493347499773',
    'https://img2.thuthuatphanmem.vn/uploads/2019/03/07/anh-ca-koi-dep_111104517.jpg',
    'https://bizweb.dktcdn.net/100/004/358/files/ca-koi-chat-luong.jpg?v=1493347499773',
    'https://bizweb.dktcdn.net/100/004/358/files/ca-koi-chat-luong.jpg?v=1493347499773',
    'https://bizweb.dktcdn.net/100/004/358/files/ca-koi-chat-luong.jpg?v=1493347499773',
  ];

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2,
    arrows: true,
    fade: true,
    
  };

  const thumbSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
  };

  const goToNext = () => {
    mainSlider.current.slickNext();
  };

  const goToPrev = () => {
    mainSlider.current.slickPrev();
  };

  const tourSchedule = [
    {
      day: 1,
      title: "TP. Hồ Chí Minh – Trùng Khánh (Nghỉ đêm trên máy bay)",
      description:
        "Trường đoàn Viettourist đón quý khách tại sân bay Tân Sơn Nhất làm thủ tục đáp chuyến bay đi Trùng Khánh – một trong những thành phố giàu có nhất Trung Quốc.",
    },
    {
      day: 2,
      title: "Trùng Khánh – Lhasa",
      description:
        "Sau khi đáp chuyến bay tới Lhasa, quý khách nhận phòng khách sạn và tham quan các địa điểm nổi tiếng như Cung điện Potala và Chùa Jokhang.",
    },
    {
      day: 3,
      title: "Lhasa – Cung điện Potala – Chùa Jokhang",
      description:
        "Tham quan Cung điện Potala, biểu tượng của Tây Tạng, cùng Chùa Jokhang, ngôi chùa linh thiêng nhất nơi đây.",
    },
    {
      day: 4,
      title: "Lhasa – Hồ Yamdrok",
      description:
        "Khởi hành đi Hồ Yamdrok, một trong ba hồ linh thiêng lớn nhất Tây Tạng, với cảnh quan hùng vĩ và yên bình.",
    },
    {
      day: 5,
      title: "Hồ Yamdrok – Băng Xuyên",
      description:
        "Di chuyển đến khu vực Băng Xuyên, tận hưởng không khí trong lành và trải nghiệm vẻ đẹp thiên nhiên hoang sơ.",
    },
    {
      day: 6,
      title: "Băng Xuyên – Nhật Ca Tắc",
      description:
        "Tham quan khu vực Nhật Ca Tắc (Xigazé), khám phá văn hóa và lịch sử độc đáo của vùng đất này.",
    },
    {
      day: 7,
      title: "Nhật Ca Tắc – Lhasa",
      description:
        "Quay về Lhasa và dành thời gian tự do mua sắm hoặc thư giãn tại khách sạn.",
    },
    {
      day: 8,
      title: "Lhasa – TP. Hồ Chí Minh",
      description:
        "Quý khách làm thủ tục đáp chuyến bay về Việt Nam, kết thúc chuyến hành trình khám phá Tây Tạng đầy thú vị.",
    },
  ];

  return (
    <div className="tour-detail">
      <div className="container">
        <div className="tour-header">
          <h1>
            Tour du lịch Tây Tạng huyền bí | Lhasa - Cung điện Potala - Hồ Namtso - Hồ Yamdrok - Băng Xuyên - Nhật Ca Tắc
          </h1>
          <p className="tour-subtitle">
            Tour Khám phá trại cá | Lhasa - Cung điện Potala - Hồ Namtso - Hồ Yamdrok - Băng Xuyên - Nhật Ca Tắc (XIGAZÉ)
          </p>
          <p className="tour-description">
            Tour 8 ngày 7 đêm bay thẳng khởi hành định kỳ hàng tuần trọn gói gồm vé máy bay & dịch vụ tour từ a-z...
          </p>
        </div>

        <div className="tour-content">
          <div className="tour-image">
            <button onClick={goToPrev} className="prev-button">◀</button>
            <button onClick={goToNext} className="next-button">▶</button>

            <Slider {...mainSettings} ref={mainSlider} className="main-slider">
            {mainImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>

          {/* Slider hình thu nhỏ */}
          <Slider {...thumbSettings} ref={thumbSlider} className="thumbnail-slider">
            {mainImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </Slider>
          </div>

          <div className="tour-details">
            <ul>
              <li><strong>Thời gian:</strong> 8 ngày 7 đêm</li>
              <li><strong>Phương tiện:</strong> Máy bay</li>
              <li><strong>Nơi khởi hành:</strong> Hồ Chí Minh</li>
            </ul>
            <p className="price">
              <span className="old-price">43,888,000 đ</span> <span className="new-price">39,888,000 đ</span>
            </p>
            <button className="btn-book">Đặt Tour</button>
          </div>
        </div>

        <div className="tour-schedule">
          <h2>Chương trình tour chi tiết</h2>
          {tourSchedule.map((day) => (
            <div key={day.day} className="tour-day">
              <h3>Ngày {day.day}: {day.title}</h3>
              <p>{day.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourPage;