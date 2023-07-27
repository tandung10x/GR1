import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchItem({ item }) {
    return (
        <div className='search-item'>
            <img src={item?.image} alt="search-img"/>
            <div className='search-item__desc'>
                <h1 className='desc-name'>{item?.type_of_room}</h1>
                <span className="desc-location">
                    {item?.location}
                </span>
                <span className="desc-subtitle">
                    {item?.max_people} Guests
                </span>
                <span className="desc-distance">300m from center</span>
                <span className="desc-cancel-subtitle">
                    {item?.other_information}
                </span>                
                <span className="desc-taxi">Free airport taxi</span>                
                <span className="desc-cancel">Free cancellation for 48 hours</span>                
            </div>
            <div className="search-item__detail">
                <div className="detail-rating">
                    <span>Excellent</span>
                    <button>4.8</button>
                </div>
                <div className="detail-text">
                    <p>
                        <b style={{ fontSize: '22px'}}>${item?.cost_per_day}</b> night
                    </p>
                    <span className="detail-text__tax">Includes taxes and fees</span>
                    <Link to={`/homestays/${item._id}`}>
                        <button className="detail-text__btn">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
