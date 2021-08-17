import React from 'react';
import "./style.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addTocCardAction } from "../../redux/reducer/bascketReducer";


const Card = ({ item }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCardClick = (e) => {
        history.push("/product", { item: item });
    }

    const handleProductClick = (e) => {
        e.stopPropagation();
        dispatch(addTocCardAction(item));
    }

    return (
        <div className="card" onClick={handleCardClick}>
            <img className="card-img-top img-fluid" src={item.images.main} />
            <div className="card-body">
                <p className="card-text product-title">{item.title}</p>
                <p className="product-ranck">{ item.rating.rate } <span>{'(' + item.rating.count + ')'}</span></p>
                <div className="product-price">
                    <div className="price">
                    <div className="btn-add-bascket-home" onClick={handleProductClick}>
                                افزودن به سبد خرید
                        </div>
                        <div className="price-value">
                            <del>{ item.price.rrp_price }</del>
                            <div className="price-selling">{ item.price.rrp_price } <span>تومان</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;