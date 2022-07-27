import React from "react";
import Header from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Form_Container from "../components/global/form/Form_Container";
import App_Info from "../components/pages_components/aboutUs/App_Info";

export default function about() {
  return (
    <div className={`${styles.aboutContainer} aboutContainer`}>
      <Header />
      <section className={`${styles.aboutBanner}`}>
        <Image
          src="/about/ban01.png"
          width="1440"
          height="658"
          alt="aboutBanner"
        />
      </section>
      <section className={`${styles.aboutSection01}`}>
        <h1 className="largHeding">ABOUT US</h1>
        <div className={`${styles.aboutContent}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  College Vidya is India’s leading online education portal
                  particularly focusing on online and distance learning
                  programs. At the same time, it has assisted thousands of
                  aspirants in finding suitable courses and the best
                  universities.{" "}
                </p>
                <p>
                  College Vidya enjoys its strong reputation with universities
                  built over a period of time by generating a significant amount
                  of business with unbeatable post-sales services to students.
                  Simultaneously, we have earned substantial popularity and
                  trust amongst the student community seeking distance and
                  online learning programs.
                </p>
                College Vidya’s key aim is to bring aspirants and universities
                on a common platform to offer a win-win situation for both. In
                short, it provides 360-degree solutions from pre-sales to
                post-sale services and other logistic support to students and
                Universities both.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.aboutSection02}`}>
        <h1 className="largHeding">STRENGTH</h1>
        <section className={`${styles.sectionInner}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.App_Container}`}>
                  <div className={`${styles.appCircle}`}>
                    <Image src="/about/STATS.png" width="754" height="769" />
                  </div>
                  <div className={`${styles.comtTab}`}>
                    <App_Info
                      tabText="Provide and manage end-to-end services
                            for both universities and studentst"
                    />

                    <App_Info tabText=" 400,000+ unique users visit us per month " />
                    <App_Info
                      tabText=" 40,000+ admissions  in last academic year
                  for both the business models i.e. B2B & B2C "
                    />
                    <App_Info tabText=" 300+ Active Inhouse Counselors " />
                    <App_Info tabText=" 600+ Active B2B Partners/ Agents " />
                    <App_Info
                      tabText=" 3500+ Face-to-Face Career Counseling sessions 
                  every day by senior career counselors. "
                    />
                    <App_Info
                      tabText=" 9000+ telephonic counseling sessions 
                  Every day by experienced counselors "
                    />
                    <App_Info tabText=" 450,000+ Students have connected so far. " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Form_Container />
      <Footer />
    </div>
  );
}
