import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneArticle} from "../../redux/reducers/article";
import {useParams} from "react-router-dom";

const Article = () => {

    const {article} = useSelector(store => store.article)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getOneArticle(params.id))
    }, []);



    return (
        <section className='article'>
            <div className="container">
                <h2 className="article__title">{article.title}</h2>

                <img src={article.image} alt="" className="article__img"/>
                <p className="article__text">{article.description}</p>
            </div>
        </section>
    );
};

export default Article;