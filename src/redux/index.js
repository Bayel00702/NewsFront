import {configureStore} from "@reduxjs/toolkit";
import {rememberReducer, rememberEnhancer} from "redux-remember";
import articles from "./reducers/news";
import article from "./reducers/article";
import auth from "./reducers/auth";
import chapter from "./reducers/chapter";
import subchapter from "./reducers/subChapter";
import defaultArticle from "./reducers/defaultArticle";



const rememberedKeys = ['auth'];

const store = configureStore({
    reducer: rememberReducer({
        articles,
        article,
        auth,
        chapter,
        subchapter,
        defaultArticle
    }),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
});

export default store