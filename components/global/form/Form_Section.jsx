import React from "react";
import styles from "../form/form.module.css";
import CustomFormControl from "./Custom_Form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";

export const Form_Section = () => {
  return (
    <div>
      <form className={`${styles.mentrFrm} `}>
        <label className={`${styles.mentrIcon} ${styles.male}`}>
          <input type="radio" value="male" name="fav_language" />
          <span className={`${styles.checkmark}`} value="male">
            <Image src="/male.png" width="50" height="50" alt="male" />
            Male
          </span>
        </label>
        <label className={`${styles.mentrIcon} ${styles.female} `}>
          <input type="radio" value="female" name="fav_language" />
          <span className={`${styles.checkmark}`} value="female">
            <Image src="/female.png" width="50" height="50" alt="male" />
            Female
          </span>
        </label>
      </form>

      <Form className={`${styles.formBox}`}>
        <div className="row">
          <div className="col-lg-12">
            <CustomFormControl
              Id="formGroup01"
              LabelName="First Name*"
              InputType="text"
              placeholderName="Enter Full Name"
            />
          </div>
          <div className="col-lg-12">
            <CustomFormControl
              Id="formGroup06"
              LabelName="Email ID"
              InputType="email"
              placeholderName="Enter Email id"
            />
          </div>
          <div className="col-lg-12">
            <CustomFormControl
              Id="formGroup02"
              LabelName="Enter Number*"
              InputType="text"
              placeholderName="Enter Number"
            />
          </div>

          <div className="col-lg-6">
            <Form.Group>
              <Form.Label htmlFor="disabledSelect">State</Form.Label>
              <Form.Select
                id="disabledSelect"
                className={`${styles.custm_control} form-control`}
              >
                <option>Select the State</option>
                <option>Lorem ipsum</option>
                <option>Lorem ipsum</option>
                <option>Lorem ipsum</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="col-lg-6">
            <CustomFormControl
              Id="formGroup08"
              LabelName="Course Completion Date"
              InputType="date"
              placeholderName="Course Completion Date"
            />
          </div>

          <div className="col-lg-12">
            <Form.Group>
              <Form.Label htmlFor="disabledSelect">Course</Form.Label>
              <Form.Select
                id="disabledSelect"
                className={`${styles.custm_control} form-control`}
              >
                <option>Select the Course</option>
                <option>XII Pass </option>
                <option>Graduate </option>
                <option>Post Graduate </option>
                <option>Other Qualification</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>
        <Button
          variant="primary"
          type="button"
          className={`${styles.contactBtn} text-left mt-4 btn-lg`}
        >
          Connect me to an expert
        </Button>
      </Form>
    </div>
  );
};

export default Form_Section;
