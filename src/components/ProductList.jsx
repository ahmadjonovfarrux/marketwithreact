import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const {
    data: { products },
  } = useLoaderData();

  return (
    <section>
      <div className="productList">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 flex-wrap items-center">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
