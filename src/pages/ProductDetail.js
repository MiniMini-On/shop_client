import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import axios from "axios";
import ProductImg from "../components/productDetail/ProductImg";
import ProductDesc from "../components/productDetail/ProductDesc";

function ProductDetail() {
  const location = useLocation();
  const [init, setInit] = useState();
  const productId = location.state.productId;
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`api/products/${productId}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <div className={styles.flex}>
          <div className={styles.img}>
            <ProductImg img1={data.image1} img2={data.image2} />
          </div>
          <div className={styles.text}>
            <ProductDesc value={data} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductDetail;
