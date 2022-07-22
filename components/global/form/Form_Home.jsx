import React from "react";
import styles from "../form/form.module.css";
import CustomFormControl from "../form/Custom_Form";
import { Form, Button } from "react-bootstrap";

export const Form_Home = () => {
  return (
    <>
      <section className={`${styles.Form_Home}`}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${styles.frm_Bg_lft} col-md-6`}></div>
            <div className={`${styles.frm_Rgt} col-md-6`}>
                <h4 className="text-center mb-4">Connect To Expert</h4>
              <Form className={`${styles.formBox}`}>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <CustomFormControl
                      Id="formGroup01"
                      LabelName="First Name*"
                      InputType="text"
                      placeholderName="Enter Full Name"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <CustomFormControl
                      Id="formGroup06"
                      LabelName="Email ID"
                      InputType="email"
                      placeholderName="Enter Email id"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <CustomFormControl
                      Id="formGroup02"
                      LabelName="Enter Number*"
                      InputType="text"
                      placeholderName="Enter Number"
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">State</Form.Label>
                      <Form.Select id="disabledSelect" className={`${styles.custm_control} form-control`}>
                        <option>Select the State</option>
                        <option>Lorem ipsum</option>
                        <option>Lorem ipsum</option>
                        <option>Lorem ipsum</option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className="col-lg-6 mb-3">
                    <CustomFormControl
                      Id="formGroup08"
                      LabelName="Course Completion Date"
                      InputType="date"
                      placeholderName="Course Completion Date"
                    />
                  </div>

                  <div className="col-lg-12 mb-3">
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">Course</Form.Label>
                      <Form.Select id="disabledSelect" className={`${styles.custm_control} form-control`}>
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
                  className={`${styles.contactBtn} text-left mt-3 btn-lg`}
                >
                  Connect me to an expert
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form_Home;
