import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../screens/admin/redux/authSlice';
import roomReducer from '../redux/roomSlice';
import managerReducer from '../redux/userSlice';
import statisticalReducer from '../redux/statisticalSlice';

const rootReducer = {
    auth: authReducer,
    room: roomReducer,
    manager: managerReducer,
    statistical: statisticalReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;