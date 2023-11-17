import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getOneArticle = createAsyncThunk(
    "oneArticle/getOneArticle",
    async (articleID, thunkAPI,req) => {
        try {
            const res = await axios(`/article/${articleID}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const articleSlice = createSlice({
    name: "oneArticle",
    initialState: {
        article: {},
        status: '',
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOneArticle.pending, state => {
                state.status = 'loading';
                state.error = ''
            })
            .addCase(getOneArticle.fulfilled, (state, {payload}) => {
                state.status = 'done';
                state.article = payload
            })
            .addCase(getOneArticle.rejected, (state,{payload}) => {
                state.status = 'error';
                state.error= payload
            })
    }
});

export default articleSlice.reducer