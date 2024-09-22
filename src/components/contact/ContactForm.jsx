import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/contact.scss";

import Container from "../../layout/Container";
import { Location, Phone, Clock } from "../../assets/index";
import PrimaryButton from "../common/button/PrimaryButton";
import { addContact } from "../../duck/contact/services";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => {
    return {
      loading: state.contact.loading,
      // hi
      payload: state.contact.payload,
      error: state.contact.error,
    };
  });

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "name is too Short!")
      .max(50, "name is too Long!")
      .required("Name is required"),
    message: Yup.string()
      .min(2, "Too Short Message!")
      .max(100, "Too Long Message!")
      .required("Message Required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Container>
      <section className="contact-form">
        <div className="contact-heading">
          <h2>Get in Touch With Us</h2>
          <span>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </span>
        </div>

        <div className="form">
          <div className="information">
            <div className="information-data">
              <img src={Location} alt="Address" />
              <div>
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="information-data">
              <img src={Phone} alt="Phone" />
              <div>
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789 </p>
              </div>
            </div>

            <div className="information-data">
              <img src={Clock} alt="Working Time" />
              <div>
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              // same shape as initial values
              dispatch(addContact(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Jon Doe"
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                    <p style={{ color: "red" }}>{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    placeholder="abc@gmail.com"
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="subject"
                    placeholder="This is optional."
                    value={values.subject}
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    placeholder="Write your message here!"
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p style={{ color: "red" }}>{errors.message}</p>
                  ) : null}
                </div>
                <div className="btn-container">
                  <PrimaryButton
                    title={loading ? "Loading.." : "Submit"}
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </Container>
  );
};

export default ContactForm;
