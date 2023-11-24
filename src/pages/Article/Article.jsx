import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneArticle} from "../../redux/reducers/article";
import {useParams} from "react-router-dom";
import axios from "../../utils/axios";
import {setImage} from '../../redux/reducers/article'

const Article = () => {

    const {article} = useSelector(store => store.article)
    const dispatch = useDispatch()
    const params = useParams()
    const [selectedImage, setSelectedImage] = useState(null);

    const isAdmin = localStorage.getItem("@@remember-rootState") ? JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.user?.isAdmin : "";


    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(event)
    };


    const resImage = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        await axios.post(`/reset/upload/${article._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(({data}) => {
            dispatch(setImage(data.user))
        })
    };





    useEffect(() => {
        dispatch(getOneArticle(params.id))
    }, [dispatch]);



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

                {
                    isAdmin === true ?
                        <div className='article__resetimage'>
                            <input
                                onChange={handleImageChange}
                                accept='image/*'
                                type="file"
                                className='article__resetimage-input'
                            />
                            <button
                                className='article__resetimage-btn'
                                onClick={() => resImage(selectedImage)}
                            >Reset
                            </button>
                        </div>
                        : ''
                }

            </div>
        </section>
    );
};

export default Article;