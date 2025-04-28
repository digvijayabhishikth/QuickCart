import { useState } from "react";
import { useCart } from "../../context/cart-context";

const HorizontalProductCard = ({product}) => {

    const [count,setCount] = useState(1);
    const {cart, cartDispatch} = useCart();

    const IncQuantity = ()=>{
        setCount(prev => prev+1);
    }

    const DecQuantity = ({id})=>{
        if(count === 1){
            onRemoveClick(id);
        }
        setCount(prev => prev-1);
    }

    const onRemoveClick = (id)=>{
        cartDispatch({
            type: "REMOVE_FROM_CART",
            payload : id
        })
    }
    console.log(cart)
  return (
    <>
      <div className="card-horizontal d-flex shadow">
        <div className="card-hori-image-container relative">
          <img className="card-image" src={product.images[0]} alt="shoes" />
        </div>
        <div className="card-details d-flex direction-column">
          <div className="card-title">{product.title}</div>
          <div className="card-description">
            <p className="card-des">{product.category}</p>
            <p className="card-price">
              Rs. {product.price}
              <span className="price-strike-through padding-all-8">
                Rs. {(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="discount padding-all-8">({product.discountPercentage})</span>
            </p>
          </div>
          <div className="quantity-container d-flex gap">
            <p className="q-title">Quantity: </p>
            <div className="count-container d-flex align-center gap">
              <button className="count" onClick={()=>DecQuantity(product.id)}>-</button>
              <span className="count-value">{count}</span>
              <button className="count" onClick={IncQuantity}>+</button>
            </div>
          </div>
          <div className="cta-btn d-flex gap">
            <div className="cta-btn">
              <button onClick={() => onRemoveClick(product.id)} className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                remove from cart
              </button>
            </div>
            <div className="cta-btn">
              <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                Move to ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductCard;
