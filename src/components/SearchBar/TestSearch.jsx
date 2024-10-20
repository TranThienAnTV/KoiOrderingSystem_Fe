import { Carousel } from 'antd'
import TourCard from '../tourCard/tourCard';
import { useLocation } from 'react-router-dom'

function TestSearch() {

    const location = useLocation();
    const tours = location.state?.searchTours;

    return (
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
    )
}

export default TestSearch