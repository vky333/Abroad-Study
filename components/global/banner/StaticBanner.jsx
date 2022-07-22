import React from "react";
import styles from "../banner/Banner.module.css";
import Image from "next/image";

export const StaticBanner = () => {
  return (
    <section
      className={`${styles.staticBannerContainer} staticBannerContainer`}
    >
      <div className="container">
        <div className="row ">
          <div className="col-md-12 position-relative ">
            <div className={`${styles.textBox}`}>
              <h3>We make your</h3>
              <h1>Study Abroad</h1>
              <h2>Dream come true</h2>
              <div class="btn btn-primary mt-4 btn-lg">Talk to Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticBanner;
