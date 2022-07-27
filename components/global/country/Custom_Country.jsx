import React from "react";
import styles from "../country/Country.module.css"

export const Custom_Country = (props) => {
  return (
    <>
      <div className={`${styles.countryImg} ${styles.countryImage1}`}>
        <h1>{props.CountryName}</h1>
      </div>
      <div className={`${styles.choice}`}>
        <div className={`${styles.cardBody}`}>
          <h4 className={`${styles.cardTitle}`}>{props.InnerCountryName}</h4>
          <div
            className={`${styles.cardText}`}
            dangerouslySetInnerHTML={{ __html: props.InnerCountryContent }}
          />
         <a href="/countrie&university" className={`${styles.anchor_Button} anchor_Button btn btn-primary`}>Continue</a>
        </div>
      </div>
    </>
  );
};

export default Custom_Country;
