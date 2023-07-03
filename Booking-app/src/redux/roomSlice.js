import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import roomApi from "../api/roomApi";

export const getAllRoom = createAsyncThunk('rooms/getAll', async (params, thunkApi) => {
    const response = await roomApi.getAll();
    
    thunkApi.dispatch(setRooms(response));

    return response;
})

const initialRoom = {
    room: []
}

const roomSlice = createSlice({
    name: 'room',
    initialState: initialRoom,
    reducers: {
        setRooms: (state, action) => {
            state.room = action.payload;
        }
    }
})

const { reducer, actions } = roomSlice;

export const { setRooms } = actions;
export default reducer;