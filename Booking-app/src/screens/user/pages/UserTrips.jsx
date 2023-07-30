import Header from '../components/header/Header';
import { Box } from '@mui/system';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function UserTrips() {
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
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {
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
                                                                ${item?.timeCome === null || item?.timeCome === "" || item?.timeLeave === null || item?.timeLeave === "" ?
                                                                    `${item?.total}` : `${ +item?.total}`
                                                                }
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
                                                                <Button color='warning' variant='contained' size='small' sx={{ fontSize: '12px'}} onClick={handleUpdate}>checkout</Button>
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
                                    } */}
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>                    
                </div>
            </div>
        </div>
    )
}