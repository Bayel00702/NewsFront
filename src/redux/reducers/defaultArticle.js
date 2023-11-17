import {createSlice} from "@reduxjs/toolkit";

const creatorId = JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth ? JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.user?._id : "";

export const articleSlice = createSlice({
    name: "article",
    initialState: {
        articleEl:{
            creatorId: creatorId,
            views: 0
        }
    },
    reducers: {
        article: (state, action) => {
            state.article = action.payload.article;
        },
    }
});

export const {article} = articleSlice.actions;
export default articleSlice.reducer