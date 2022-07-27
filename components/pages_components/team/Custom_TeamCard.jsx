import React from "react";
import Image from "next/image";
import styles from "../../../styles/Team.module.css";

export const Custom_TeamCard = (props) => {
  return (
    <div className={`${styles.team_Card}`}>
      <Image src={props.teamImage} width="357" height="398 " alt="members" />
      <div>
        <h1>{props.Heading01}</h1>
        <h5>{props.Heading02}</h5>
      </div>
    </div>
  );
};

export default Custom_TeamCard;
