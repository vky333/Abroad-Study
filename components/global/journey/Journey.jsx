import React from "react";
import Custom_Journey from "./Custom_Journey";
import styles from "../journey/Journey.module.css";

export const Journey = () => {
  return (
    <>
      <div className={`${styles.hdingBox} Global_heding`}>
        <h1>Perks of starting your jouney with us</h1>
      </div>
      <section className={`${styles.section_Journey}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
            
              <div className={`${styles.Custom_JourneyContiner}`}>
                <Custom_Journey
                  card_No="1"
                  card_Pargarph="WE COMPILE YOU DECIDE!"
                />
                <Custom_Journey
                  card_No="2"
                  card_Pargarph="Analyse Your Return on Investment"
                />
                <Custom_Journey
                  card_No="3"
                  card_Pargarph="Empower your studies with the International Accelerator Program"
                />
                <Custom_Journey
                  card_No="4"
                  card_Pargarph="Still confused? Talk to Experts!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
