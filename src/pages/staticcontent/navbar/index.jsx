import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faKeyboard,
  faSave,
} from "@fortawesome/free-regular-svg-icons";
import { MyInputField } from "../../../components/field/index.jsx";


function StaticNavbar() {
  const location = useLocation();
  const group = location.pathname.substring(1);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");

  useEffect(() => {
    const options = {
      method: "get",
      url: `http://dev1.evotech-co.com/api/admin/static-content?filter[group]=${group}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options)
      .then(function (response) {
        console.log(response.data.data);
        setResponse(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        message.error(`somthing wrong , ${error}`);
        console.log(error);
      });
  }, [group, localStorage.getItem("token")]);

  return (
    <main>
      <div className="container">
        {loading ? (
          <div> loading ... </div>
        ) : (
          <div className="staticcontent__forms d-flex flex-column p-3 m-3">
            {response.map((items) => (
              <div key={items.id}>
                <Formik
                  initialValues={{}}
                  onSubmit={(values, actions) => {
                    console.log(values);
                  }}
                >
                  {(FormikProps) => (
                      <>
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
                              name={items.key}
                              type="text"
                              placeholder={`En ${items.key}`}
                              onChange={FormikProps.handleChange("en")}
                              value={FormikProps.values[items.text.en]}
                              onBlur={FormikProps.handleBlur}
                            />
                            
                          </div>
                        </div>
                      </Form>

                      
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
                            name={items.key}
                            type="text"
                            placeholder={`Ar ${items.key}`}
                            onChange={FormikProps.handleChange("ar")}
                            value={FormikProps.values[items.text.ar]}
                            onBlur={FormikProps.handleBlur}
                          />
                          
                        </div>
                      </div>
                    </Form>
                      </>
                  )}
                </Formik>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default StaticNavbar;
