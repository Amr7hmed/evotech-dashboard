import axios from "axios";
import { message } from "antd";

export default function FetchDataApi(
  options,
  setData,
  setDataLoading,
  setServerMsg
  ) {
  axios(options)
    .then(function (response) {
      console.log(response.data.data);
      setData(response.data.data)
      setDataLoading(false);
    })

    .catch(function (error) {
      message.error(`somthing wrong , ${error}`);
    });
}