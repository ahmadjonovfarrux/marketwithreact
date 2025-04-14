import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../app/features/cartSlice";
import { useDispatch } from "react-redux";

function Product({ product }) {
  const {
    id,
    title,
    description,
    brand,
    category,
    thumbnail,
    price,
    discountPercentage,
  } = product;
  const dispatch = useDispatch();

  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        amount: 1,
      })
    );
  };

  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id == product.id);
  return (
    <Link
      className="product m-1 cards flex flex-col items-center"
      to={`/product/${id}`}
    >
      <figure>
        <img className="card__img" src={thumbnail} alt="image of product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-secondary">
            $<del>{price}</del>
          </button>
          <button className="btn btn-outline btn-primary">
            ${(price - (price / 100) * discountPercentage).toFixed(2)}
          </button>
        </div>
        <div onClick={handleBuy}>
          {isAdded && (
            <>
              <button
                onClick={() => dispatch(increment(id))}
                className="btn btn-outline btn-primary"
              >
                +
              </button>
              <span>{isAdded.amount}</span>
              <button
                onClick={() => dispatch(decrement(id))}
                className="btn btn-outline btn-secondary"
              >
                -
              </button>
            </>
          )}
          {!isAdded && (
            <button onClick={handleBuy} className="btn btn-primary">
              Buy
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Product;
