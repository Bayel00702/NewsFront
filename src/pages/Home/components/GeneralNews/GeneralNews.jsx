import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllChapter} from "../../../../redux/reducers/chapter";
import {changeChapter, getAllArticles} from "../../../../redux/reducers/news";
import {getSubChapter} from "../../../../redux/reducers/subChapter";

const GeneralNews = () => {

    const {filter, data} = useSelector(store => store.articles)
    const {chapter} = useSelector(store => store.chapter)
    const dispatch = useDispatch()



    const [chapters, setChapters] = useState(filter || []);

    const handleChapterChange = (name) => {
        if (name === 'Главная') {
            setChapters([]);
        } else {
            setChapters([name]);
        }
    };


    useEffect(() => {
        dispatch(getAllChapter())
        dispatch(getAllArticles())
    }, [dispatch]);

    useEffect(() => {
        if (chapters) {
            dispatch(changeChapter(chapters));
        }
    }, [chapters, dispatch]);

    const randomObject = data[Math.floor(Math.random() * data.length)]

    return (
            <section className='news'>
                <div className="container">
                    <ul className="news__top">

                        {
                            chapter.map((item) => (
                                <li
                                    key={item._id}
                                    className='news__top-active'
                                    onClick={() => {
                                        dispatch(getSubChapter(item._id));
                                        handleChapterChange(item.name)
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>

                    <div className="news__row">

                        <div className="news__left">
                            <img loading='lazy' src={randomObject && randomObject.image} alt={randomObject && randomObject.title} className="news__img"/>
                        </div>
                        <div className="news__right">
                            <Link to={`/article/${randomObject && randomObject._id}`} className="news__title">{randomObject && randomObject.title}</Link>
                            <p className="news__text">{randomObject && randomObject.description1}</p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default GeneralNews;