import { ArrowBack } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddNewRoom from '../components/add-new/AddNewRoom'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

function AddHomeStayPage() {
    const navigate = useNavigate();

    return (
        <div className='add-new'>
            <Sidebar />
            <div className="add-new__container">
                <Navbar />
                <div className='p-2'>
                    <h2 className='add-new__title'>add homestay</h2>
                    <Box mb={2}
                        sx={{
                            backgroundColor: 'gray',
                            color: '#fff',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate('/admin/homestays')}
                    >
                        <ArrowBack />
                    </Box>
                    <AddNewRoom />                    
                </div>
            </div>
        </div>
    )
}

export default (AddHomeStayPage);