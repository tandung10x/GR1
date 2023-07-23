import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import roomApi from '../../../api/roomApi';
import { calDiffDates } from '../../../utils/calDiffDates';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { FaStar, FaRegHeart } from 'react-icons/fa'

export default function HotelDetail(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [homestay, setHomestay] = useState(null);
    const numNight = calDiffDates(props.dates[0].startDate, props.dates[0].endDate);

    const photos = [
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537009/original/37658b27-fd29-4275-a579-cf564a9b2b37.jpeg?im_w=720",        
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537009/original/57f4efc8-bb2c-4979-9ef2-9298a4a90435.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537009/original/c92e156d-374f-457f-b4b1-10ef3a610d30.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/6f5ba084-2083-4017-b4fd-d996ee89bcbe.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537009/original/c6da6951-4628-4994-86ec-ac78c74ff325.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537009/original/800b2eb7-4a5f-4f29-95cc-9a9820b7dbcb.jpeg?im_w=1200",        
        "https://a0.muscache.com/im/pictures/22f90720-bd67-4011-a56a-65a8df4e85a9.jpg?im_w=720",        
        "https://a0.muscache.com/im/pictures/d5ff2b10-5ca5-4dea-a924-0dc248371b9f.jpg?im_w=1200"
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
                        <p className="hotel-review">
                            <FaStar /> 4.8 | 10 reviews
                            <span className="hotel-location">{homestay?.location}</span>
                            <span className="hotel-save" ><FaRegHeart /> Save </span>
                        </p>
                        <p className="hotel-price">
                            Book a stay over ${homestay?.cost_per_day * numNight} at this property and get a
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
                        <p className="desc-detail-hotel">
                            {homestay?.max_people} guests | {homestay?.other_information}
                        </p>
                        <p className="desc-detail-hotel">
                            We are excited to introduce our home, a tropical building overlooking sceneries 
                            built to accommodate large groups and providing privacy if traveling in pairs. 
                            Come visit our house, enjoy a unique, high-end vibe for you stay in {homestay?.location}
                        </p>
                    </div>
                    <div className="hotel-detail__bottom-price">
                        <h3>Property Highlights</h3>
                        <span>
                            <p className='hotel-highlight'>
                                Highly rated by recent guests (4.8)
                            </p>
                            <p className='hotel-highlight'>
                                Free cancellation for 48 hours
                            </p>
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
