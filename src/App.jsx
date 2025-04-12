import React from "react";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { loader as HomeLoader } from "./pages/Home";
import Product from "./components/Product";
import ProductPage from "./pages/ProductPage";
import { loader as ProductLoader } from "./pages/ProductPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
          loader: ProductLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
