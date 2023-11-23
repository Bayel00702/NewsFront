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
                <ul  className="article__list">
                    <li className="article__item">
                        <p className="article__text"><span></span> {article.description1}</p>
                    </li>
                    <li className="article__item">
                        <p className="article__text"><span></span> {article.description2}</p>
                    </li>
                    <li className="article__item">
                        <p className="article__text"><span></span> {article.description3}</p>
                    </li>
                </ul>

                <div className="article__writer">
                    <p className="article__writer-text">Author of the article: <span>{article.creatorData && article.creatorData.name}</span></p>
                    <p className="article__writer-date">Publication date:<span>{article.createdAt && article.createdAt.slice(0,10)}</span></p>
                </div>

            </div>
        </section>
    );
};

export default Article;