import React from 'react';
import styles from "../header/Header.module.css"
import { Image } from "react-bootstrap";

export const Logo = (props) => {
  return (
    <>
    <div className={`${styles.abroadLogo} logobox`}>
        <Image width={124} height={66} alt="abroadLogo" src={props.logoImg}/>
        
    </div>    
    </>
  )
}

export default Logo
