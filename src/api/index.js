import axios from "axios";
import { useState } from "react";
import { message } from "antd";

const Api = "http://dev1.evotech-co.com";

export const Login = function (params) {
  const options = {
    method: "post",
    url: `${Api}/api/admin/login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      email: params.email,
      password: params.password,
      type: 1,
    },
  };

  axios(options)
    .then(function (response) {
      // handle success
      console.log("handle success");
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
      window.location.pathname = "/";
    })
    .catch(function (error) {
      // handle error
      console.log("handle error");
      console.log(error);
    });
};

export const Logout = function () {
  const options = {
    method: "post",
    url: `${Api}/api/admin/logout`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      // handle success
      console.log("handle success");
      console.log(response);
      localStorage.removeItem("token");
      window.location.pathname = "/login";
    })
    .catch(function (error) {
      // handle error
      console.log("handle error");
      console.log(error);
    });
};



