import React, { useEffect, useState } from 'react'
import Chart from '../components/charts/Chart'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import TotalRevenue from '../components/total-revenue/TotalRevenue'
import WidgetItem from '../components/widget/WidgetItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRoom } from '../../../redux/roomSlice'
import { getAllManager } from '../../../redux/userSlice'
import { getAllStatistical } from '../../../redux/statisticalSlice'
import roomApi from '../../../api/roomApi'
import statisticalApi from '../../../api/statisticalApi'

function AdminHomePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [roomNumStaff, setRoomNumStaff] = useState(0);
  const [orderNumStaff, setOrderNumStaff] = useState(0);

  useEffect(() => {
    dispatch(getAllRoom());
    dispatch(getAllManager());
    dispatch(getAllStatistical());
  }, [dispatch])
  
  useEffect(() => {
    const getOrderStaff = async() => {
      const response = await roomApi.getRoomByUser(user?._id);
      setRoomNumStaff(response.length);
      let response1 = 0;
      for (let i = 0; i < response.length; i++)
      {
        const res = await statisticalApi.getStatisticalByRoom(response[i]._id);
        response1 += res.length;
      }
      setOrderNumStaff(response1);
    }
    getOrderStaff();
  }, [user])

  return (
    <div className='admin'>
      <Sidebar />
      <div className="admin-container">
        <Navbar />
        <div className="list-widget">
          {user?.role === 'admin' && <WidgetItem type='user' />}
          <WidgetItem type='order' orderNum={orderNumStaff}/>
          <WidgetItem type='homestay' roomNum={roomNumStaff}/>
          {user?.role === 'admin' && <WidgetItem type='total'/>}
        </div>
        <div className="charts">
          {user?.role === 'admin' && <TotalRevenue/>}
          {user?.role === 'admin' && <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />}
        </div>        
      </div>
    </div>
  )
}

export default AdminHomePage;