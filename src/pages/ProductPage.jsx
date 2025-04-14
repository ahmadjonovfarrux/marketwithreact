import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};

function ProductPage() {
  const data = useLoaderData();
  console.log(data);
  const {
    thumbnail,
    title,
    description,
    brand,
    category,
    discountPercentage,
    price,
    shippingInformation,
    rating,
    warrantyInformation,
    reviews,
  } = data;
  return (
    <div className="container h-screen flex pt-10 justify-center ">
      <div className="card product__card w-5xl card-side bg-base-100 shadow-2xl">
        <figure>
          <img
            className="productCard__img card__img"
            src={thumbnail}
            alt="image of product"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-blue-950">
            {title}
          </h2>
          <div>
            <p className="w-sm font-normal mb-2">
              <span className="font-bold text-blue-950">
                Information about product: <br />
              </span>
              {description}
            </p>
            <h3 className="mb-2">
              <span className="font-bold text-blue-950">Brand:</span> {brand}
            </h3>
            <h3 className="mb-2">
              <span className="font-bold text-blue-950">Category:</span>{" "}
              {category}
            </h3>
            <h3 className="mb-2">
              <span className="font-bold text-blue-950">Rating:</span> {rating}
            </h3>
            <h3 className="mb-2">
              <span className="text-xl font-medium text-blue-950">
                Clients comments:
              </span>
              {reviews.map((r) => {
                return (
                  <p className="text-blue-950" key={Math.random()}>
                    <span className="font-medium"> {r.reviewerName}</span>:{" "}
                    {r.comment}
                  </p>
                );
              })}
            </h3>
            <div className="badge badge-outline badge-secondary m-1">
              <del>${price}</del>
            </div>
            <div className="badge badge-outline badge-primary m-1">
              ${(price - (price / 100) * discountPercentage).toFixed(2)}
            </div>
          </div>
          <h3>
            <span className="font-medium text-blue-950">Shipping:</span>{" "}
            {shippingInformation}
          </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
