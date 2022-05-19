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
import Spinner from "../../../components/spinner/Spinner.jsx";

function StaticNavbar() {
  const success = () => {
    message.success("You edited Content");
  };

  const location = useLocation();
  const group = location.pathname.substring(1);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");

  const [serverMsg, setServerMsg] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const Editeaction = function name(params1, params2, params3) {
    setFormLoading(true);
    setIsEdit(!isEdit);
    const options = {
      method: "put",
      url: `http://dev1.evotech-co.com/api/admin/static-content/${params3}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: {
        text: {
          ar: params2.ar,
          en: params2.en,
        },
      },
    };
    axios(options)
      .then(function (response) {
        let Create = async function () {
          setFormLoading(false);
          success();
        };
        Create();
        return response;
      })
      .catch((error) => {
        setLoading(false);
        message.error(`somthing wrong , ${error}`);
      });
  };

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
        <Spinner />
        ) : (
          <div className="staticcontent__forms d-flex flex-column p-3 m-3">
            {response.map((items) => (
              <div key={items.id}>
                <Formik
                  initialValues={{}}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    Editeaction(items.key, values, items.id);
                  }}
                >
                  {(FormikProps) => (
                    <>
                      <Form>
                        <div className="row g-3">
                          <div className="staticcontent__field ">
                            <span className="keyboard">
                              <FontAwesomeIcon icon={faKeyboard} />
                            </span>


                            <MyInputField
                              name={items.text.en}
                              type="text"
                              placeholder={`En ${items.key}`}
                              onChange={FormikProps.handleChange("en")}
                              value={
                                  isEdit
                                  ? [items.text.en]
                                  : FormikProps.values[items.text.en]
                                }
                                onBlur={FormikProps.handleBlur}
                            />
                            {isEdit ? (
                              <span className="edit"
                              onClick={() => setIsEdit(!isEdit)}>
                                <FontAwesomeIcon icon={faEdit} />
                              </span>
                            ) : (" "
                            )}

                            <button className="btn btn-success" type="submit">
                              {formLoading ? <Spinner /> : 
                              <FontAwesomeIcon icon={faSave} />}
                            </button>
                          </div>
                        </div>
                      </Form>

                      <Form>
                        <div className="row g-3">
                          <div className="staticcontent__field">
                            <span className="keyboard">
                              <FontAwesomeIcon icon={faKeyboard} />
                            </span>


                            <MyInputField
                              name={items.text.ar}
                              type="text"
                              placeholder={`Ar ${items.key}`}
                              onChange={FormikProps.handleChange("ar")}
                              onBlur={FormikProps.handleBlur}
                              value={
                                isEdit
                                  ? [items.text.ar]
                                  : FormikProps.values[items.text.ar]
                              }
                            />
                            
                            {isEdit ? (
                              <span className="edit"
                              onClick={() => setIsEdit(!isEdit)}>
                                <FontAwesomeIcon icon={faEdit} />
                              </span>
                            ) : (" "
                            )}

                            <button className="btn btn-success" type="submit">
                              {formLoading ? <Spinner /> : 
                              <FontAwesomeIcon icon={faSave} />}
                            </button>
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
