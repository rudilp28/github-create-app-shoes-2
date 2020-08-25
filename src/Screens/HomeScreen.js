import React from 'react';
import data from'../data';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    return <ul className="products">
    {
        data.products.map(product => 
        <li className="animation-li"> 
            <div className="product">
                <div className="product-name">
                    <Link to={'/product/' + product._id}> {product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <Link to={'/product/' + product._id}>
                    <img className="name-image" src={product.image} alt="products" />
                </Link>
                <div className="price">{product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReview})</div>
            </div>
        </li>) 
    }
    
</ul>  
}

export default HomeScreen;