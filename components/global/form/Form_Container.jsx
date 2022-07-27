import React from "react";
import styles from "../form/form.module.css";
import CustomFormControl from "./Custom_Form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import Form_Section from "./Form_Section";

export const Form_Container = () => {
  return (
    <>
      <section className={`${styles.Form_Home} Form_Home`}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${styles.frm_Bg_lft} col-md-6`}></div>
            <div className={`${styles.frm_Rgt} col-md-6`}>
              <Form_Section/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form_Container;
