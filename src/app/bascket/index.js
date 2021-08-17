
import Header from "../../components/header";
import { addTocCardAction, removeCardAction, removeSectionAction } from "../../redux/reducer/bascketReducer";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './style.scss';

const Bascket = () => {
    const data = useSelector((state) => state);
    const dispatch = useDispatch()

    const handleProductClick = (item) => {
        dispatch(addTocCardAction(item));
    }

    const onRemoveCardClick = (item) => {
        dispatch(removeCardAction(item))
    }

    const onRemoveSectionClick = (item) => {
        dispatch(removeSectionAction(item))
    }

    return (
        <div>
            <Header display={"true"} />
            <main className="mt-4">
                <section className="d-flex justify-content-center">
                    {data.bascketReducer.map((item) => {
                        return (
                            <div className="grid-md-8 grid-sm-12">
                                <div className="card d-flex" style={{ maxWidth: "100%",flexDirection: "row" }}>
                                    {console.log("counter", item)}
                                    <div className="grid-sm-3">
                                        <img className="img-fluid" src={item.item.images.main} />
                                    </div>
                                    <div className="grid-sm-9 mt-3">
                                        <div className="product-title-container">{item.item.title}</div>
                                        <div className="d-flex justify-content-between">
                                        <div className="count-product">
                                            <button className="add" onClick={() => {handleProductClick(item.item)}}>+</button>
                                            <div>{item.count}</div>
                                            <button className="remove" onClick={() => {onRemoveCardClick(item.item)}}>-</button>
                                        </div>
                                        <div className="product-title-container ml-4" onClick={() => {onRemoveSectionClick(item.item)}}>حذف</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    );
}

export default Bascket;
