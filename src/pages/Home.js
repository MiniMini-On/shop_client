import React, { useState, useEffect } from "react";
import Products from "../components/home/Products";
import styles from "./Home.module.css";
import Banner from "../components/home/Banner";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("api/products").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <div className={styles.slider}>
        <Banner />
      </div>
      <div className={styles.flex}>
        {products.map((product) => (
          <Products key={product.id} value={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
