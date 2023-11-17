import React from 'react';
import Image from '../../../../assets/news.jpg'
import {Link} from "react-router-dom";

const GeneralNews = () => {
    return (
        <section className='news'>
            <div className="container">
                <ul className="news__top">
                    <li className="news__top-item">Главная</li>
                    <li className="news__top-item">Израиль и Палестина</li>
                </ul>

                <div className="news__row">
                    <div className="news__left">
                        <img loading='lazy' src={Image} alt="Palestine and Israile" className="news__img"/>
                    </div>
                    <div className="news__right">
                        <Link to='' className="news__title">Война Израиля с ХАМАС: власти Газы объявили об открытии КПП на границе с Египтом для эвакуации иностранцев и раненых</Link>
                        <p className="news__text">Последние новости, комментарии и видео о нападении группировки ХАМАС на Израиль.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeneralNews;