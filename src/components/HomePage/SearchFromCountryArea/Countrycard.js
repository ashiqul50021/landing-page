import React from 'react';
import { Link } from 'react-router-dom';

const Countrycard = (props) => {
    const { _id, img, name, price, rating } = props.products;
    return (
        <div className="col">
            <div className="card">
                <img style={{ height: '300px', width: '300px', margin: 'auto' }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 style={{ color: '#6FB193', fontWeight: 'bold' }} className="text-center card-title">{name}</h5>
                    <p style={{ color: '#FFD731', fontWeight: 'bold' }} className="card-text text-center">৳ {price} <span>rating {rating}</span></p>
                    <Link style={{ marginLeft: '36%' }} className="btn btn-outline-success" to={`/purchase/${_id}`} role="button">Buy {name}</Link>
                </div>
            </div>
        </div>
    );
};

export default Countrycard;