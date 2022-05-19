import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyInputField } from "../../components/field/index.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { Login } from "../../api/index.js";

const ContactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Is Required"),
  password: Yup.string().required("Password Is Required"),
});

function FormLogin() {

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        type: 1,
      }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        Login(values);
      }}
    >
      {(FormikProps) => (
        <Form>
          <div className="row g-3">
            <div className="fielddiv">
              <span>
                <FontAwesomeIcon icon={faUser} />
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

            <div className="fielddiv">
              <span>
                <FontAwesomeIcon icon={faUnlockKeyhole} />
              </span>
              <MyInputField
                name="password"
                type="password"
                placeholder="Password"
                onChange={FormikProps.handleChange("password")}
                value={FormikProps.values.password}
                onBlur={FormikProps.handleBlur}
              />
            </div>

            <div className="col-12 buttonfield">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormLogin;
/*
const submit = function name(params) {
      setLoading(true);
      console.log(params)
      const options = {
        method: "post",
        url: `${process.env.REACT_APP_API_BASEURL}/api/admin/login`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          // Authorization: `Bearer ${token}`,
        },
        data: {
          email: params.Email,
          password: params.Password,
          type: 1,
        },
      };
  
      axios(options)
        .then(function (response) {
          // handle success
  
          let login = async function () {
            console.log("    handle success");
            setServerMsg(null);
  
            console.log(response.data);
            dispatch(SetUser(response.data));
            setLoading(false);
  
            return response.data;
          };
          login().then((data) =>
            // data.status_code !== 200
            //   ?
            //    setServerMsg(response.data.message)
            //   :
  
            history.push("/Users")
          );
        })
        .catch(function (error) {
          // handle error
          console.log("    handle error");
          setServerMsg(error.response.data.message);
          setLoading(false);
  
          console.log(error);
        });
    };

*/