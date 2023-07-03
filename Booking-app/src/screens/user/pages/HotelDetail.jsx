import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import roomApi from '../../../api/roomApi';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { DateSchema } from 'yup';
import { useLocation } from 'react-router-dom'

export default function HotelDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [homestay, setHomestay] = useState(null);

    const location = useLocation();
    const [dates, setDates] = useState(location.state?.dates);

    const photos = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    ]

    useEffect(() => {
        const getHomestay = async() => {
            const response = await roomApi.getRoomById(id);
            setHomestay(response);
        }

        getHomestay();
    }, [id])

    return (
        <div>
            <Header />
            <div className="container hotel-detail">
                <div className="hotel-detail__top">
                    <div className="hotel-detail__top-left">
                        <h2>{homestay?.type_of_room}</h2>
                        {/* <div className="hotel-address">
                            <LocationOn fontSize='18' />
                            <span>{homestay?.address}</span>
                        </div> */}
                        <p className="hotel-distance">
                            Excellent location - 300m from center
                        </p>
                        <p className="hotel-price">
                            Book a stay over ${homestay?.cost_per_day} at this property and get a
                            free airport taxi
                        </p>
                    </div>                    
                </div>    
                <div className="row detail-img">
                    {photos.map((photo, index) => (
                        <div className='col-3 col-md-4 col-sm-6 mb-1' key={index}>
                            <img src={photo} alt="" className="hotel-image-item" />
                        </div>
                    ))}
                </div>
                <div className="hotel-detail__bottom">
                    <div className="hotel-detail__bottom-text">
                        <h3>Stay in the heart of city</h3>
                        <p>Entire studio, 1 bathroom 21m<sup>2</sup> full bed</p>
                        <p className="desc-detail-hotel">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur beatae quo facilis reprehenderit, veniam doloremque quidem unde delectus nesciunt maxime iure id quasi iusto! Quis, laborum. Doloribus, pariatur enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur beatae quo facilis reprehenderit, veniam doloremque quidem unde delectus nesciunt maxime iure id quasi iusto! Quis, laborum. Doloribus, pariatur enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur beatae quo facilis reprehenderit, veniam doloremque quidem unde delectus nesciunt maxime iure id quasi iusto! Quis, laborum. Doloribus, pariatur enim.
                        </p>
                    </div>
                    <div className="hotel-detail__bottom-price">
                        <h3>Perfect for a {dates[0].endDate} night stay!</h3>
                        <span>
                            Located in the real heart of Krakow, this property has an
                            excellent location score of 9.8!
                        </span>
                        <p>
                            <b style={{ fontSize: '22px'}}>${homestay?.cost_per_day}</b> ({1}{" "}nights)
                        </p>
                        <button
                            className='book-now'
                            onClick={() => navigate('/booking', { state: { price: homestay?.cost_per_day, id_room: id }})}
                        >
                            Reserve or Book Now!
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
