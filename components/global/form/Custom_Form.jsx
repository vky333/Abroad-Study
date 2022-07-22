import React from "react";
import {Form} from "react-bootstrap";
import styles from "../form/form.module.css";
export const Custom_Form = (props) => {
  return (
    <>
      <Form.Group controlId={props.Id} className="mb-3">
        <Form.Label className="formLable">{props.LabelName}</Form.Label>
        <Form.Control className={`${styles.custm_control}`} type={props.InputType} placeholder={props.placeholderName} required/>
      </Form.Group>
    </>
  );
};

export default Custom_Form;
