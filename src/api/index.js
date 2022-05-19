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

// GetBlogs

export const GetBlogs = function (setResponse, setPending, setPage) {
  const options = {
    method: "get",
    url: `${Api}/api/admin/blogs`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.data);
      setResponse(response.data.data.data);
      setPage(response.data.data.meta);
      setPending(false);
      console.log(response.data.data.meta);
    })
    .catch(function (error) {
      console.log("hande rror");
      console.log(error);
    });
};

// Handle Change Page in Blogs 
export const handleChangePage= function(id,setResponse, setPending, setPage){
  const options = {
    method: "get",
    url: `${Api}/api/admin/blogs?page=${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.data);
      setResponse(response.data.data.data);
      setPage(response.data.data.meta);
      setPending(false);
    })
    .catch(function (error) {
      console.log("hande rror");
      console.log(error);
    });
}



// GetAllClient

export const GetAllClient = function (setResponse, setPending, setPage) {
  const options = {
    method: "get",
    url: `${Api}/api/admin/blogs`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.data);
      setResponse(response.data.data.data);
      setPage(response.data.data.meta);
      setPending(false);
      console.log(response.data.data.meta);
    })
    .catch(function (error) {
      console.log("hande rror");
      console.log(error);
    });
};


// Get Static Content
export const GetStaticContent = function(group){
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
    })
    .catch(function (error) {
      message.error(`somthing wrong , ${error}`);
      console.log(error)
    });
}