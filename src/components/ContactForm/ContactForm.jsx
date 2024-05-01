import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const contactFormScheme = Yup.object().shape({
  contactName: Yup.string()
    .required("Name is required!")
    .min(3, "Too short")
    .max(50, "Too long"),
  contactNumber: Yup.string()
    .required("Number is required!")
    .min(3, "Too short")
    .max(50, "Too long"),
});

const FORM_INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.contactName,
        number: values.contactNumber,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={contactFormScheme}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        <Form>
          <div className={styles.formGroup}>
            <label htmlFor="contactName">Name</label>
            <Field type="text" id="contactName" name="contactName" />
            <ErrorMessage
              component="p"
              name="contactName"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contactNumber">Number</label>
            <Field type="text" id="contactNumber" name="contactNumber" />
            <ErrorMessage
              component="p"
              name="contactNumber"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
