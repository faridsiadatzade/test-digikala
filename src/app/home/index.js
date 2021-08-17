import React, { useEffect, useState } from 'react';
import { productsAction } from "../../redux/reducer/productsReducer";
import { useDispatch } from 'react-redux'
import Card from "../../components/card";
import Header from "../../components/header";
import Loading from "../../components/Loading";
import axios from 'axios';
import { useSelector } from 'react-redux'
import './style.scss';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(25);

    const dispatch = useDispatch();
    const list = useSelector((state) => state.productsReducer.Home);

    useEffect(() => {
        callProducts();
    }, [page]);

    const onChange = (p) => {
        setPage(p);
    }

    const callProducts = () => {
        setLoading(true);
        var config = {
            method: 'get',
            url: 'https://www.digikala.com/front-end/search/?' + `&page=${page}&rows=${row}`,
            headers: {
                'token': 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv'
            }
        };

        axios(config)
            .then(function (response) {
                dispatch(productsAction(response.data.data.products));
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }  

    return (
        <div>
            <Header display={"false"} />
            <Loading className="d-flex justify-contant-center" display={loading} />
            <main className={loading ? "d-none" : "d-block"}>
                <section className="d-flex">
                    <div className="grid-md-12 grid-sm-12">
                        {list.map((item) => {
                            return (
                                <div key={item.id} className="grid-md-3 grid-sm-12 mt-4">
                                    <Card item={item} />
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="grid-md-12 grid-sm-12 d-flex justify-content-center">
                        <div className="pagination-container">
                            {page > 1 ? <button onClick={() => onChange(+page - 1)}>صفحه قبلی</button> : null}
                            {
                                count > 0 ?
                                    <>
                                        <small>صفحه : </small>
                                        <strong>{page}</strong>
                                    </>
                                    :
                                    null
                            }
                            {count !== row ? <button onClick={() => onChange(+page + 1)}>صفحه بعدی</button> : null}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
