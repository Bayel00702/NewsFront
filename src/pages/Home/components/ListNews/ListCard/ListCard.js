import React from 'react';
import {Link} from 'react-router-dom'

const ListCard = ({item}) => {
    return (
        <div className='list__card'>
            <img loading='lazy' src={item.image} alt={item.title} className="list__card-img"/>

            <Link to={`/article/${item._id}`} className="list__card-desc">{item.title}</Link>
        </div>
    );
};

export default ListCard;