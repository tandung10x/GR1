import "./App.css";
import "./assets/scss/index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./screens/admin/pages/AdminHomePage"; // theme css file
//import UserHomePage from "./screens/user/pages/UserHomePage";
import UserSearch from "./screens/user/pages/UserSearch";
import HotelDetail from "./screens/user/pages/HotelDetail";
import Booking from "./screens/user/pages/Booking";
import ListUserPage from "./screens/admin/pages/ListUserPage";
import { userColumns } from "./screens/admin/utils/data-table";
import AddUserPage from "./screens/admin/pages/AddUserPage";
import AddHomeStayPage from "./screens/admin/pages/AddHomeStayPage";
import NotFound from "./components/404/NotFound";
import UserLogin from "./screens/user/pages/UserLogin";
import AdminLogin from "./screens/admin/pages/AdminLogin";
import ListHomestayPage from "./screens/admin/pages/ListHomestayPage";
import ListCustomer from "./screens/admin/pages/ListCustomer";
import ProtectedRoute from "./screens/admin/components/routing/ProtectedRoute";
import EditRoom from "./screens/admin/components/update-info/EditRoom";
import EditUser from "./screens/admin/components/update-info/EditUser";
import { useState } from "react";
import UserTrips from "./screens/user/pages/UserTrips";
import { useAuth } from "./app/auths";

function App() {
  const [dates, setDates] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    }
  ]);

  const { userinfo } = useAuth();

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* user */}
          <Route path='/' element={<UserSearch dates={dates} setDates={setDates}/>} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/homestays/:id' element={<HotelDetail dates={dates} setDates={setDates}/>} />
          <Route path='/booking' element={<Booking dates={dates} setDates={setDates} userinfo={userinfo}/>} />
          <Route path='/user-trips' element={<UserTrips />} />

          {/* admin */}
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route
            path='/admin'
            element={
              <ProtectedRoute roles={["staff"]}>
                <AdminHomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/users'
            element={
              <ProtectedRoute>
                <ListUserPage
                  title='List User'
                  name='user'
                  columns={userColumns}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/users/new-user'
            element={
              <ProtectedRoute>
                <AddUserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/users/edit/:id'
            element={
              <ProtectedRoute>
                <EditUser />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/homestays'
            element={
              <ProtectedRoute roles={["staff"]}>
                <ListHomestayPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/homestays/new-homestay'
            element={
              <ProtectedRoute>
                <AddHomeStayPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/homestays/:id'
            element={
              <ProtectedRoute roles={["staff"]}>
                <EditRoom />
              </ProtectedRoute>
            }
          />      

          <Route
            path='/admin/statistical'
            element={
              <ProtectedRoute>
                <ListCustomer />
              </ProtectedRoute>
            }
          />

          {/* not found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
