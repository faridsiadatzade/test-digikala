import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { productsAction } from "../../redux/reducer/productsReducer";
import axios from 'axios';
import { useSelector } from 'react-redux'
import "./style.scss";

const Header = (display) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const counter = useSelector((state) => state);

    const loadList = () => {
        let q = document.querySelector(".input-text").value;
        var config = {
            method: 'get',
            url: 'https://www.digikala.com/front-end/search/?q=' + q,
            headers: {
                'token': 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv'
            }
        };

        axios(config)
            .then(function (response) {
                let list = response.data.data.products;
                history.push("/home");
                dispatch(productsAction(list));
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const enterBtn = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          loadList();
        }
    };
    return (
        <section>
            <header>
                <h1>دیجیکالا تست فرید</h1>
                <nav>
                    <div><Link to="/">خانه</Link></div>
                    <div>{display.display == "false" ? (<input type="text" className="input-text" placeholder="جستجو" onKeyPress={enterBtn} />) : console.log("dis", display)}</div>
                    <div><Link to="/bascket" className="header-bascket">سبد خرید <span>{counter.bascketReducer.length}</span></Link></div>
                </nav>
            </header>
        </section>
    )
}

export default Header;