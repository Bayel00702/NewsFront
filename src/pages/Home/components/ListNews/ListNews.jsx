import React, { useEffect } from 'react';
import ListCard from "./ListCard/ListCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../../../redux/reducers/news";

const ListNews = () => {
    const { data, filter } = useSelector(store => store.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        if (filter) {
            dispatch(getAllArticles({ filter }));
        }
    }, [filter, dispatch]);

    return (
        <section className='list'>
            <div className="container">
                <div className="list__row">
                    {data.map((item, idx) => (
                        <ListCard  item={item} key={item._id || idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ListNews;