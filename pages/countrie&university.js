import React, { useState } from "react";
import Header from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import styles from "../styles/country.module.css";
import Custom_Contry from "../components/pages_components/country&university/Custom_Contry";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import Form_Section from "../components/global/form/Form_Section";


export default function country() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="countryContainer">
      <Header />
      <section className={`${styles.hederSection} text-center`}>
        <Image
          src="/country&university/ban1.png"
          width="1440"
          height="650"
          alt="Banner"
        />
      </section>
      <section className={`${styles.countrySection01}`}>
        <div className="hdingBox">
          <h1 className="largHeding">COUNTRY</h1>
          <div className="subHding">Select a Country to see Universities</div>
        </div>
        <section className={`${styles.countrySection}`}>
          <div className="container-fluid">
            <div className={`${styles.custRow} row`}>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/c1.png"
                  CountryName="USA"
                />
              </div>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/c2.png"
                  CountryName="Germany"
                />
              </div>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/c3.png"
                  CountryName="Ireland"
                />
              </div>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/c4.png"
                  CountryName="UK"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={`${styles.countrySection02}`}>
        <div className="hdingBox">
          <h1 className="largHeding">UNIVERSITY</h1>
          <div className="subHding">Select a University to see Courses</div>
        </div>
        <section className={`${styles.countrySection}`}>
          <div className="container-fluid">
            <div className={`${styles.custRow} row`}>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/logo/logo01.png"
                  CountryName="USA"
                />
              </div>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/logo/logo02.png"
                  CountryName="Germany"
                />
              </div>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/logo/logo03.png"
                  CountryName="Ireland"
                />
              </div>
              <div className="col-md-3">
                <Custom_Contry
                  countryImage="/country&university/logo/logo04.png"
                  CountryName="UK"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={`${styles.countrySection03}`}>
        <div className="hdingBox">
          <h1 className="largHeding">Courses</h1>
          <div className="subHding">Select a Course to connect with us</div>
        </div>
        <section className={`${styles.countrySection}`}>
          <div className="container-fluid">
            <div className={`${styles.custRow} row`}>
              <div className="col-md-3">
                <div className={`${styles.courseName} ${styles.course01}`}>
                  <h5>MBA</h5>
                  <h6>Data Analitics</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className={`${styles.courseName} ${styles.course02}`}>
                  <h5>BCA</h5>
                  <h6>Data Analitics</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className={`${styles.courseName} ${styles.course03}`}>
                  <h5>BBA</h5>
                  <h6>Data Analitics</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className={`${styles.courseName} ${styles.course04}`}>
                  <h5>MANAGMENT</h5>
                  <h6>MANAGMENT</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={`${styles.countrySection04} text-center`}>
        <Image
          src="/country&university/compair.png"
          width="1440"
          height="767"
          alt="Banner"
        />
        <div className={`${styles.textBox}`}>
          <h2>Compare Your Options</h2>
          <h1>
            <b>With Our Experts</b>
          </h1>
          <div
            className={`${styles.btnConnect} btn btn-primary mt-4 btn-lg `}
            variant="primary"
            onClick={handleShow}
          >
            Connect with us
          </div>
        </div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="coountryPagePop"
      >
        <Modal.Header closeButton>
        <Image src="/country&university/charecter.png" width="265" height="230" alt="mentor" />
          
        </Modal.Header>
        <Modal.Body>
          <Form_Section/>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}
