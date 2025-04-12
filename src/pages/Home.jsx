import React from "react";
import { useFetch } from "../hooks/useFetch";
import { axiosInstance } from "../utils";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export const loader = async () => {
  const req = await axiosInstance("/product");
  return req;
};

function Home() {
  const {
    data: { products },
  } = useLoaderData();

  return (
    <div className="container">
      <h2>Home</h2>
      <ProductList />
    </div>
  );
}

export default Home;
