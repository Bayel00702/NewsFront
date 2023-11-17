import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllArticles = createAsyncThunk(
    "orders/getAllOrders",
    async (_,thunkAPI) => {
        try {

            const res = await axios('/articles');

            return res.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllArticles.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllArticles.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllArticles.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});


export default articlesSlice.reducer