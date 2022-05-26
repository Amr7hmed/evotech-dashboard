import React from "react";
import {Api} from '../../api/options.js';
import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import Spinner from "../../components/spinner/Spinner.jsx";
import { useParams } from "react-router-dom";
import FetchDataApi from "../../api/fetchdataapi.js";

function EditPageHeader() {

    const [serverMsg, setServerMsg] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [data, setData] = useState({});
    let { id } = useParams();
  
    useEffect(() => {
      const options = {
        method: "get",
        url: `${Api}/api/admin/pageHeaders/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };
      FetchDataApi(options, setData, setDataLoading, setServerMsg);
    }, [dataLoading]);
  


    
  return (
    <main className="w-100">
      <div className="container">
        <h1 className="text-center"> Edit Page Header </h1>

        {dataLoading === true ? <>loding</>:

        <form>
            <div className="d-flex align-items-center justify-content-center">
            <input
              type="file"
              name="image"
              required
              className="mt-2 mb-3 mx-5"
            />
            </div>

            <button className="btn w-100 btn-primary" type="submit">
             Update
          </button>
        </form>

        }
        </div>
    </main>
  );
}

export default EditPageHeader;
