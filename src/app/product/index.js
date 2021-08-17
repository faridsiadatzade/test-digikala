import Header from "../../components/header";
import { useLocation } from "react-router-dom";
import { addTocCardAction } from "../../redux/reducer/bascketReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";
const Product = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  let item = location.state.item;
  const handleProductClick = () => {
    dispatch(addTocCardAction(item));
    history.push("/bascket", { item: item });
  };
  return (
    <div>
      
      <Header display={"true"} />
      <main>
        
        <div className="d-flex">
          
          <section className="grid-md-4">
            
            <img className="img-fluid" src={item.images.main} />
          </section>
          <section className="grid-md-8">
            
            <div className="product-title-container justify-content-center">
              {item.title}
            </div>
            <div className="card">
              
              <div className="d-flex justify-content-around mt-3">
                
                <div className="product-ranck">
                  {item.rating.rate}
                  <span>{"(" + item.rating.count + ")"}</span>
                </div>
                <div>{item.status == "marketable" ? "موجود" : "ناموجود"}</div>
              </div>
              <div className="price mt-2 justify-content-center">
                
                <div className="price-value mt-2 ml-4 mb-3">
                  
                  <del>{item.price.rrp_price}</del>
                  <div className="price-selling">
                    {item.price.rrp_price} <span>تومان</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-add-bascket" onClick={handleProductClick}>
              
              افزودن به سبد خرید
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
export default Product;
