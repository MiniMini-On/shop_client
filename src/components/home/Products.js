import React from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

function Products(props) {
  const navigate = useNavigate();
  const id = props.value["id"];
  // console.log(props.value);
  return (
    <div className={styles.products} onClick={() => navigate(`/sticker/${id}`, { state: { productId: id } })}>
      <LazyLoad height={300}>
        <div>
          <img className={styles.img} src={props.value["image1"]} />
        </div>
      </LazyLoad>
      <div className={styles.text}>
        <h4>{props.value["name"]}</h4>
        <h6>{props.value["category"]["name"]}</h6>
        <p>₩{props.value["price"].toLocaleString("ko-KR")}</p>
        <p>by.{props.value["artist"]["nickname"]}</p>
      </div>
    </div>
  );
}

export default Products;
