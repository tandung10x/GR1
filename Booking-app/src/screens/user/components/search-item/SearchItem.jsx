import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default function SearchItem({ item }) {
    const imagesRandom = [
        "https://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg",
        "https://motogo.vn/wp-content/uploads/2023/05/homestay-kon-tum-40.jpg",
        "https://dthouse.vn/upload/images2/sua-nha-dep-cung-dthouse/mau-homestay-dep-sau-khi-duoc-sua-chua-cai-tao/mau-homestay-dep-MSD06A.jpg",
        "https://vnn-imgs-f.vgcloud.vn/2019/05/26/18/2-homestay.jpg",
        "https://dsdhome.vn/uploads/products/homestay-la-gi-cac-loai-hinh-phong-homestay-dang-pho-bien-1.jpg",
        "https://vinhomesland.vn/wp-content/uploads/2019/10/homestay.jpg",
        "https://ik.imagekit.io/tvlk/blog/2022/04/homestay-da-lat-view-dep-1.jpeg",
        "https://icdn.dantri.com.vn/zoom/1200_630/2021/11/04/cap-doi-roi-nui-xuong-bien-cai-tao-can-nha-cu-xuong-cap-thanh-homestay-xinh-dep-crop-1635984657201.jpeg",
        "https://dulichbavi.com/wp-content/uploads/2022/06/ST-Homestay-4-800x530.png",
        "https://motogo.vn/wp-content/uploads/2020/08/homestay-gan-ha-noi-co-be-boi-1-3.jpg",
        "https://motogo.vn/wp-content/uploads/2020/06/homestay-ninh-binh-1.jpg",
        "https://haidangtravel.com/image/blog/Mountain-Lodge-Homestay-Mang-Den.JPG"
    ];

    const number = Math.floor(Math.random() * imagesRandom.length);
    
    return (
        <div className='search-item'>
            <img src={imagesRandom[number]} alt="search-img"/>
            <div className='search-item__desc'>
                <h1 className='desc-name'>{item?.type_of_room}</h1>
                <span className="desc-distance">300m from center</span>
                <span className="desc-taxi">Free airport taxi</span>
                <span className="desc-subtitle">
                    {item?.other_information}
                </span>
                <span className="desc-feature">Entire studio, 1 bathroom 21m<sup>2</sup> full bed</span>
                <span className="desc-cancel">Free cancellation</span>
                <span className="desc-cancel-subtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="search-item__detail">
                <div className="detail-rating">
                    <span>Excellent</span>
                    <p><FaStar /></p>
                    <button>9.0</button>
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
