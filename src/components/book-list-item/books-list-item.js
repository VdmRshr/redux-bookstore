import React from 'react';
import {Link} from "react-router-dom";

const BooksListItem = ({book, onAddedToCart}) => {
    const {title, author,img,price} = book;
    return (


        <div className="card" style={{width:'18rem'}}>
            <img
                src={img}
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
                <h6>${price}</h6>
                <Link className="btn btn-primary" onClick={onAddedToCart}>BUY</Link>
            </div>
        </div>


    );
};

export default BooksListItem;