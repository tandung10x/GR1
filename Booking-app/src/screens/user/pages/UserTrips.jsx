import Header from '../components/header/Header';
import { Box } from '@mui/system';
import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import statisticalApi from '../../../api/statisticalApi';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EditForm from '../../admin/components/edit-form/EditForm';
import { getAllStatistical } from '../../../redux/statisticalSlice';

export default function UserTrips() {
    const dispatch = useDispatch();
    const [listOrder, setListOrder] = useState([]);
    const [time, setTime] = useState({
        timeCome: '',
        timeLeave: ''
    });
    const [statisticalItem, setStatisticalItem] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const getListOrder = async() => {
            const response = await statisticalApi.getStatisticalByEmail("tandung10x1998@gmail.com");
            setListOrder(response);
        }
        getListOrder();
    });

    const handleSetTimeCome = (index, value)=>{
        setListOrder((prev) => {
            const prevValue = [...prev]
            const newValue = { ...prevValue[index], timeCome: value }
            prevValue[index] = newValue;
            return prevValue;
        })
        setTime(prev => {
            return {
                ...prev,
                timeCome: value
            }
        })
    }

    const handleSetTimeLeave = (index, value) => {
        setListOrder((prev) => {
            const prevValue = [...prev]
            const newValue = { ...prevValue[index], timeLeave: value }
            prevValue[index] = newValue;
            return prevValue;
        })
        setTime(prev => {
            return {
                ...prev,
                timeLeave: value
            }
        })
    }

    const handleUpdate = async (e) => {
        const values = {
            timeCome: time.timeCome,
            timeLeave: time.timeLeave,
        }
        setIsLoading(true);
        await statisticalApi.update(statisticalItem?._id, values);
        alert("Update successfully");
        setIsLoading(false);
        dispatch(getAllStatistical());
    }

    return (
        <div>
            <Header />
            <div className='container' style={{ padding: '30px 0'}}>
                <div className='data-table'>
                    <Box sx={{ 
                        borderBottom: 1, 
                        borderColor: 'divider',                        
                    }}>
                        <h1>Account</h1>
                    </Box>
                    <h2 style={{margin: '30px 20px 10px 20px'}}>Trips</h2>
                    <Box sx={{
                        flex: 6, 
                        width: '100%',
                        maxWidth: '1600px',
                        height: '100vh',
                        maxHeight: '80vh',
                        overflowX: "auto",
                        overflowY: "auto"
                    }}>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table" sx={{ minWidth: "900px"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '100px' }}
                                        >
                                            Type of homestay
                                        </TableCell>
                                        <TableCell align='left' sx={{ fontWeight: 600, cursor: 'pointer', width: '150px' }}>
                                            Homestay location 
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            sx={{ fontWeight: 600, cursor: 'pointer', width: '30px' }}
                                        >
                                            Total
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            sx={{ fontWeight: 600, width: '100px' }}
                                        >
                                            Time come
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            sx={{ fontWeight: 600, width: '100px' }}
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
                                            {listOrder.map((item, index) => {
                                                    return (
                                                        <TableRow key={index} >
                                                            <TableCell align='left'>
                                                                {item?.id_room?.type_of_room}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                {item?.id_room?.location}
                                                            </TableCell>                                                           
                                                            <TableCell align='left'>
                                                                ${item?.total}
                                                            </TableCell>
                                                            <TableCell align='center'>
                                                                <EditForm
                                                                    index={index}
                                                                    name='timeCome'
                                                                    value={item?.timeCome === null || item?.timeCome === "" ? "Choose date" : item?.timeCome}
                                                                    setValue={handleSetTimeCome}
                                                                    onClick={() => setStatisticalItem(item)}
                                                                />
                                                            </TableCell>
                                                            <TableCell align='center'>
                                                                <EditForm
                                                                    index={index}
                                                                    name='timeLeave'
                                                                    value={item?.timeLeave === null || item?.timeLeave === "" ? "Choose date" : item?.timeLeave}
                                                                    setValue={handleSetTimeLeave}
                                                                    onClick={() => setStatisticalItem(item)}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <Button color='warning' variant='contained' size='small' sx={{ fontSize: '12px'}} onClick={handleUpdate}>update</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}                                                
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