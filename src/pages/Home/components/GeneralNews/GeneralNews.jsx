import React from 'react';

const GeneralNews = () => {
    return (
        <section className='news'>
            <div className="container">
                <ul className="news__top">
                    <li className="news__top-item">Главная</li>
                    <li className="news__top-item">Израиль и Палестина</li>
                </ul>

                <div className="news__row">
                    <div className="news__left"></div>
                    <div className="news__right"></div>
                </div>
            </div>
        </section>
    );
};

export default GeneralNews;