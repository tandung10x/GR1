import { Button, CircularProgress } from '@mui/material';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import SearchItem from '../components/search-item/SearchItem';
import { useLocation } from 'react-router-dom'
import roomApi from '../../../api/roomApi';
import { Box } from '@mui/system';
import { getAllRoom } from '../../../redux/roomSlice'
import { CardItemFirst } from '../components/card-item/CardItem'
import { useDispatch, useSelector } from 'react-redux'

export default function UserSearch() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination);
    const [openDate, setOpenDate] = useState(false);
    //const [dates, setDates] = useState(location.state?.dates);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(999);
    const [listSearchData, setListSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const { room } = useSelector(state => state.room);
    const [listDestination, setListDestination] = useState([]);

    useEffect(() => {
        dispatch(getAllRoom());
    }, [dispatch])

    useEffect(() => {
        setListDestination([...room]);
    }, [room])

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
        "https://haidangtravel.com/image/blog/Mountain-Lodge-Homestay-Mang-Den.JPG"
    ]

    const handleSearch = useCallback(async () => {
        setIsLoading(true);
        const response = await roomApi.getAll();
        setIsLoading(false);
        setListSearchData(response);
    }, [room])

    useEffect(() => {
        handleSearch();
    }, [handleSearch])

    const handleSubmit = () => {
        handleSearch();
    }

    return (
        <div className='user-search'>
            <Header type="search"/>
            <div className="container">
                <div className="row" style={{ margin: "20px 0 30px 0" }}>
                    {/* search bar */}
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className="list-search">
                            <h1 className="list-search__title">Filter by:</h1>                            
                            <div className="list-search__item">
                                <label>Check-in Date</label>
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate,"dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && (
                                    <DateRange
                                        onChange={(item) => setDates([item.selection])}
                                        minDate={new Date()}
                                        ranges={dates}
                                        className="date-range"
                                    />
                                )}
                            </div>
                            <div className="list-search__item">
                                <label>Options</label>
                                <div className="list-search__options">
                                    <div className="list-search__options-item">
                                        <span>
                                            Min price <small>per night</small>
                                        </span>
                                        <input
                                            type="number"
                                            value={min}
                                            onChange={(e) => setMin(e.target.value)}
                                            className="list-search__options-inp"
                                        />
                                    </div>
                                    <div className="list-search__options-item">
                                        <span>
                                            Max price <small>per night</small>
                                        </span>
                                        <input
                                            type="number"
                                            value={max}
                                            onChange={(e) => setMax(e.target.value)}
                                            className="list-search__options-inp"
                                        />
                                    </div>                                  
                                </div>
                            </div>
                            <Button
                                sx={{ width: '100%' }}
                                color='success'
                                variant='contained'
                                size='small'
                                onClick={handleSubmit}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                    {/* list hotel */}
                    <div className="col-8 col-md-12 col-sm-12">
                        {
                            isLoading ? <Box>
                                <CircularProgress color='primary' size={30} />
                            </Box> : <>
                                {
                                    listSearchData?.length > 0 ? listSearchData?.map((item, index) => {
                                        return (
                                            <SearchItem key={index} item={item} dates={dates}/>
                                        )
                                    }) : <div>There are no homestay!</div>
                                    /* listDestination.map((item, index) => {
                                        return (
                                            <div className='col-4 col-md-6 col-sm-12' key={index}>
                                                <CardItemFirst item={item} img={listImageRandom[index]} />
                                            </div>
                                                )
                                        }) */
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
