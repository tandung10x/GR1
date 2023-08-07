import Header from '../components/header/Header';
import { Box } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import statisticalApi from '../../../api/statisticalApi';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../app/auths';

export default function UserTrips() {
    const [listOrder, setListOrder] = useState([]);
    const { userinfo } = useAuth();
    
    useEffect(() => {
        if(userinfo.email_){
            const getListOrder = async() => {
                const response = await statisticalApi.getStatisticalByEmail(userinfo.email_);
                if (response)
                    setListOrder(response);
            }
            getListOrder();
        }
    }, [userinfo.email_]);

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
                    <p style={{margin: '20px 20px 10px 20px'}}>{userinfo.username}</p>
                    <p style={{margin: '10px 20px'}}>{userinfo.email_}</p>
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
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        listOrder?.length > 0 ? listOrder?.map((item, index) => {
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
                                                        {item?.timeCome}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        {item?.timeLeave}
                                                    </TableCell>                                                            
                                                </TableRow>
                                            )
                                        }) : <div style={{margin: '10px 20px'}}>No trips booked...yet!</div>
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