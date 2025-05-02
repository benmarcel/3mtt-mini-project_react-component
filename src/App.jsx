import { useState, useEffect } from "react";

import "./App.css";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Sorry could not fetch products!");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setErrMsg(null);
        setProducts(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrMsg(error.message);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="brand-name">Marcel's Collection</h1>
        <p className="intoduction">
          Welcome to Marcel collection; where quality products and customer
          satisfaction is our watch word. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Non, dignissimos excepturi. Repellat unde laborum
          quaerat exercitationem velit accusantium quod quas cumque, nam
          reiciendis corporis id possimus blanditiis officia sit incidunt.
        </p>
        <h2 className="our-products">Our Products</h2>
        <div>
          {isLoading && <h2 className="loading">Fetching products.....</h2>}
          {errMsg && <h2 className="error">{errMsg}</h2>}
          {products && <Products products={products} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
