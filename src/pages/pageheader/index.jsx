import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Space, Table } from "antd";
import { Api } from "../../api/options.js";
import { Link } from "react-router-dom";

function PageHeader() {
  const [data, setData] = useState("");
  const [dataLoading, setDataLoading] = useState(true);
  const [serverMsg, setServerMsg] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const options = {
      method: "get",
      url: `${Api}/api/admin/pageHeaders`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options)
      .then(function (response) {
        setData(response.data.data);
        setServerMsg(null);
        setDataLoading(false);
        console.log(response.data.data.data);
      })

      .catch(function (error) {
        message.error(`somthing wrong , ${error}`);
      });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },

    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      width: "100px",

      render: (t, r) => <img src={`${r.photo}`} alt="Header" />,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle" key={record.id}>
          <Link
            to={`/editpageheader/${record.id}`}
            className="btn btn btn-info text-white text-center"
          >
            <i className="fa fa-edit me-1" aria-hidden="true"></i>
            Edit
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <main className="mx-auto py-3 w-90 pageheader">
      {console.log(columns)}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fw-bold">Page Header</h1>
        </div>
        <h1>{serverMsg}</h1>
        <Table
          dataSource={data.data}
          columns={columns}
          bordered
          loading={dataLoading}
          pagination={false}
          rowClassName={"colSpan"}
          scroll={{ x: 400 }}
          size={"small"}
        />
      </div>
    </main>
  );
}

export default PageHeader;
