import React, { useEffect, useState } from "react";
import { MyInputField } from "../../components/field";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faText } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faKeyboard, faSave } from "@fortawesome/free-regular-svg-icons";
import { GetStaticContent } from "../../api";

const ContactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Is Required"),
});

function StaticContent() {
  
  
  const [serverMsg, setServerMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [group, setGroup] = useState("navbar");

 useEffect(() => {
  GetStaticContent(group)
  }, [group]);


  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center p-3 m-3">
          <h1 className="fw-bold">Static Content</h1>
        </div>

        <section className="d-flex  staticcontent">
          <div className="staticcontent__list d-flex flex-column">
            <span className="btn btn-dark text-capitalize">Navbar</span>
            <span className="btn btn-dark text-capitalize">About Section</span>
            <span className="btn btn-dark text-capitalize">
              Services Section
            </span>
            <span className="btn btn-dark text-capitalize">
              Proposal Section
            </span>
            <span className="btn btn-dark text-capitalize">Team Section</span>
            <span className="btn btn-dark text-capitalize">
              Cleants Section
            </span>
            <span className="btn btn-dark text-capitalize">Footer</span>
          </div>

          <div className="staticcontent__forms d-flex flex-column">
            <Formik
              initialValues={{}}
              validationSchema={ContactSchema}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(FormikProps) => (
                <Form>
                  <div className="row g-3">
                    <div className="fielddiv">
                      <span className="keyboard">
                        <FontAwesomeIcon icon={faKeyboard} />
                      </span>
                      
                      <span className="edit">
                        <FontAwesomeIcon icon={faEdit} />
                      </span>
                      
                      <span className="save">
                        <FontAwesomeIcon icon={faSave} />
                      </span>

                      <MyInputField
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={FormikProps.handleChange("email")}
                        value={FormikProps.values.email}
                        onBlur={FormikProps.handleBlur}
                      />
                    </div>

                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </main>
  );
}

export default StaticContent;
