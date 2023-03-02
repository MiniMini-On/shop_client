import React from "react";
import styles from "./ProductDesc.module.css";

function ProductDesc(props) {
  console.log(props.value);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{props.value["category"]["name"]}</p>
        <h4 style={{ fontSize: "30px" }}>{props.value["name"]}</h4>
        <p>by.{props.value["artist"]["nickname"]}</p>
      </div>
      <div className={styles.outer}>
        <div>
          <label>용지</label>
        </div>
        <div className={styles.wrap}>
          {props.value["option"]["option1"].split(",").map((el, index) => (
            <div key={index}>
              <input id={index} name="paper" type="radio" />
              <label htmlFor={index}>{el}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.outer}>
        <div>
          <label>사이즈</label>
        </div>
        <div className={styles.wrap}>
          {props.value["option"]["option2"].split(",").map((el, index) => (
            <div key={index}>
              <input id={index} name="사이즈" type="radio" />
              <label htmlFor={index}>{el}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>₩{props.value["price"].toLocaleString("ko-KR")}</p>
      </div>
      <div>
        <button className={styles.cart}>&nbsp;&nbsp;장바구니</button>
        <button className={styles.buy}>&nbsp;바로구매</button>
      </div>
    </div>
  );
}

export default ProductDesc;
