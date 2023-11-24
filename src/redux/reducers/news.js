import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import subChapter from "./subChapter";

export const getAllArticles = createAsyncThunk(
    "articles/getAllArticles",
    async ({filter,subchapterFilter},thunkAPI) => {
        try {
            const filterQuery = filter.reduce((acc, rec ) => (acc+=`chapter=${rec}`) , "");

            const res = await axios(`/articles?${filterQuery}`);
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
        filter: [],
        subcategoryFilter: [],
        isLoading: false,
        error: ''
    },
    reducers: {
        changeChapter: (state,{payload}) => {
            state.filter = payload
        }
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



export const {changeChapter} = articlesSlice.actions
export default articlesSlice.reducer