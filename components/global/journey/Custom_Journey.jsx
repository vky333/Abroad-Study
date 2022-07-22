import React from "react";
import styles from "../journey/Journey.module.css";

export const Custom_Journey = (props) => {
  return (
    
    <div className={`${styles.Custom_Journey_Card} Custom_Journey_Card`}>
      <h1 className={`${styles.card_No}`}>
          {props.card_No}
          </h1>
      <div className={`${styles.card_Pargarph}`}>
          {props.card_Pargarph}
          </div>
    </div>
  
  );
};

export default Custom_Journey;
