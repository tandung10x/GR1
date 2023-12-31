import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { getAllStatistical } from '../../../redux/statisticalSlice';
import roomApi from '../../../api/roomApi';

export default function ListCustomer() {
    const dispatch = useDispatch();
    const { statisticals } = useSelector(state => state.statistical);
    const [listCustomer, setListCustomer] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setListCustomer([...statisticals]);
    }, [statisticals])

    const handleUpdate = async (item) => {
        setIsLoading(true);
        await roomApi.update(item?.id_room._id, {isFree: 1});
        alert("Checkout successfully");
        setIsLoading(false);
        dispatch(getAllStatistical());
    }

    return (
        <div className='admin-list'>
            <Sidebar />
            <div className="admin-list__container">
                <Navbar />
                <div className='data-table'>
                    <div className="data-table__title">
                        <span>List Reservations</span>
                    </div>
                    <Box 
                        sx={{ 
                            flex: 6, 
                            width: '100%',
                            maxWidth: '1600px',
                            height: '100vh',
                            maxHeight: '80vh',
                            overflowX: "auto",
                            overflowY: "auto"
                        }}
                    >
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table" sx={{ minWidth: "1000px"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '120px' }}
                                        >
                                            Type of homestay
                                        </TableCell>
                                        <TableCell align='left' sx={{ fontWeight: 600, cursor: 'pointer', width: '150px' }}>
                                            Homestay location 
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '140px' }}
                                        >
                                            Customer Name
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '170px' }}
                                        >
                                            Customer email
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '100px' }}
                                        >
                                            Customer Phone
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '30px' }}
                                        >
                                            Total
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            sx={{ fontWeight: 600, width: '50px' }}
                                        >
                                            Time come
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            sx={{ fontWeight: 600, width: '50px' }}
                                        >
                                            Time leave
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            sx={{ width: '100px' }}
                                        >
                                            
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        isLoading ? <CircularProgress size={30} color='primary' /> : (
                                            <>
                                            {listCustomer.map((item, index) => {
                                                    return (
                                                        <TableRow key={index} >
                                                            <TableCell align='left'>
                                                                {item?.id_room?.type_of_room}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                {item?.id_room?.location}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                {item?.id_customer?.fullname}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                {item?.id_customer?.email}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                {item?.id_customer?.phone}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                ${item?.total}
                                                            </TableCell>
                                                            <TableCell align='center'>
                                                                {item?.timeCome}
                                                            </TableCell>
                                                            <TableCell align='center'>
                                                                {item?.timeLeave}
                                                            </TableCell>
                                                            <TableCell>
                                                                <Button color='warning' variant='contained' size='small' sx={{ fontSize: '12px'}} onClick={() =>{handleUpdate(item)}}>checkout</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                                <TableRow>
                                                    <TableCell rowSpan={4}/>
                                                    <TableCell colSpan={3}/>
                                                    <TableCell style={{ fontWeight: 'bold', fontSize: '20px' }} colSpan={4}>
                                                        Total revenue: {" "}$
                                                        {
                                                            listCustomer?.map(item => item?.total)?.reduce((prev, cur) => (prev + cur), 0)
                                                        }
                                                    </TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    }
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </div>
            </div>
        </div>
    )
}
