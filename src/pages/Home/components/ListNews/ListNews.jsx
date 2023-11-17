import React, {useEffect} from 'react';
import ListCard from "./ListCard/ListCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllArticles} from "../../../../redux/reducers/news";

const ListNews = () => {

    const {data} = useSelector(store => store.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArticles())
    }, []);
    console.log(data)



    return (
        <section className='list'>
            <div className="container">
                <div className="list__row">
                    {
                        data.map((item) => (
                            <ListCard item={item} key={item._id}/>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default ListNews;