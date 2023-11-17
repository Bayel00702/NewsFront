import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const  getSubChapter = createAsyncThunk(
    "subChapter/getSubChapter",
    async (chapterID, thunkAPI) => {
        try {
            const res = await axios(`/subchapter/${chapterID}`);
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const subChapterSlice = createSlice({
    name: "subchapter",
    initialState: {
        subchapter: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubChapter.pending, state => {
                state.isLoading = true
            })
            .addCase(getSubChapter.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.subchapter = payload
            })
            .addCase(getSubChapter.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export default subChapterSlice.reducer