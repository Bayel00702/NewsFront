import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const  getAllChapter = createAsyncThunk(
    "chapter/getChapter",
    async (_, thunkAPI) => {
        try {
            const res = await axios('/chapter');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const chapterSlice = createSlice({
    name: "chapter",
    initialState: {
        chapter: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllChapter.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllChapter.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.chapter = payload
            })
            .addCase(getAllChapter.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    },

});

export default chapterSlice.reducer