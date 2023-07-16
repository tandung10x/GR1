import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import roomApi from '../../../api/roomApi';
import { calDiffDates } from '../../../utils/calDiffDates';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function HotelDetail(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [homestay, setHomestay] = useState(null);
    const numNight = calDiffDates(props.dates[0].startDate, props.dates[0].endDate);

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
                            {homestay?.other_information}
                        </p>
                    </div>
                    <div className="hotel-detail__bottom-price">
                        <h3>Property Highlights</h3>
                        <span>
                            Highly rated by recent guests (9.0)
                        </span>
                        <p>
                            <b style={{ fontSize: '22px'}}>${homestay?.cost_per_day * numNight}</b> 
                            {" "}({numNight}{" "}nights)
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
