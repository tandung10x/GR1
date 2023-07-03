import React, { useEffect, useState } from 'react'
import { getAllRoom } from '../../../redux/roomSlice'
import { CardItemFirst } from '../components/card-item/CardItem'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useDispatch, useSelector } from 'react-redux'

export default function UserHomePage() {
    const dispatch = useDispatch();
    const { room } = useSelector(state => state.room);
    const [listDestination, setListDestination] = useState([]);
    
    const listImageRandom = [
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
        "https://haidangtravel.com/image/blog/Mountain-Lodge-Homestay-Mang-Den.JPG",        
    ]

    useEffect(() => {
        dispatch(getAllRoom());
    }, [dispatch])

    useEffect(() => {
        setListDestination([...room]);
    }, [room])

    return (
        <div className='user'>
            <Header type="search"/>
            <div className="user-container container">
                <h1 className="user-home__title">
                    {listDestination.length} homes
                </h1>
                <div className='row'>
                    {listDestination.map((item, index) => {
                        return (
                            <div className='col-4 col-md-6 col-sm-12' key={index}>
                                <CardItemFirst item={item} img={listImageRandom[index]} />
                            </div>
                        )
                    })}
                </div>                
            </div>
            <Footer />
        </div>
    )
}
