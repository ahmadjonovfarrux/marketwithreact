import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../app/features/cartSlice";
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

  const handleBuy = (e) => {
    e.preventDefault();
    // dispatch(addToCart(product));
  };
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
          <div className="btn btn-outline btn-secondary">
            $<del>{price}</del>
          </div>
          <div className="btn btn-outline btn-primary">
            ${(price - (price / 100) * discountPercentage).toFixed(2)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
