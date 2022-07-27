import React from "react";
import styles from "../../../styles/about.module.css";
import Image from "next/image";
export const App_Info = (props) => {
  return (
    <div className={`${styles.tabBox}`}>
          <span></span>
          <div className={`${styles.tabBoxTxt}`}>
          {props.tabText}
          </div>
        </div>
  );
};

export default App_Info;
