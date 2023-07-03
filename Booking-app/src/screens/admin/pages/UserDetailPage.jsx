import React from 'react'
import Chart from '../components/charts/Chart'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import TransactionTable from '../components/transaction-table/TransactionTable'
import { useSelector } from 'react-redux'

function UserDetailPage() {
    const { user } = useSelector(state => state.auth);

    return (
        <div className='user-detail'>
            <Sidebar />
            <div className="user-detail__container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        {/* <div className="editButton">Edit</div> */}
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://api-private.atlassian.com/users/7a98093e260e051ff7f0796192f1661e/avatar"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{user?.username}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Role:</span>
                                    <span className="itemValue">{user?.role}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Detail:</span>
                                    <span className="itemValue">{user?.more_detail}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="transaction">
                    <h1 className="transaction-title">Last Transactions</h1>
                    <TransactionTable />
                </div>
            </div>
        </div>
    )
}

export default (UserDetailPage);