import React from 'react'
import styles from '../../../styles/country.module.css'
import Image from "next/image";

export const Custom_Contry = (props) => {
  return (
    <div className={`${styles.CountryCard}`}>
        <Image src={props.countryImage} height="116" width="290" alt="country"/>
        <div className={`${styles.courntyName}`}>{props.CountryName}</div>

    </div>
  )
}

export default Custom_Contry