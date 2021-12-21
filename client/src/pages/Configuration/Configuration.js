import React, { Component } from "react";
import { Table, Button, Pagination } from "antd";
import "./Configuration.scss";
import BtnAdd from "../../../src/assets/images/icons/navigation/btn_Add.svg";
import EditIcon from "../../../src/assets/images/icons/navigation/edit.svg";
import DeleteIcon from "../../../src/assets/images/icons/navigation/ic_delete.svg";
import DisableIcon from "../../../src/assets/images/icons/navigation/disable.svg";
import SearcheIcon from "../../../src/assets/images/icons/navigation/search.svg";
import EyeIcon from "../../../src/assets/images/icons/navigation/eye.png";
import RefreshIcon from "../../../src/assets/images/icons/navigation/refresh.svg";

import qs from "qs";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class Configuration extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          data: data.results,
          pagination: {
            ...params.pagination,
            total: 100,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <section className='configuration layout-white'>
        <h1> Users </h1>
        <div className='btnGrp'>
          <div className='iconbtnGrp'>
            <Button type='primary' icon={<img src={BtnAdd} />} size='large' />
            <Button type='primary' icon={<img src={EditIcon} />} size='large' />
            <Button
              type='primary'
              icon={<img src={DeleteIcon} />}
              size='large'
            />
            <Button
              type='primary'
              icon={<img src={DisableIcon} />}
              size='large'
            />
          </div>
          <div className='iconbtnGrp'>
            <Button shape='circle' icon={<img src={SearcheIcon} />} />
            <Button shape='circle' icon={<img src={EyeIcon} />} />
            <Button shape='circle' icon={<img src={RefreshIcon} />} />
          </div>
        </div>

        <Table
          columns={columns}
          rowKey={(record) => record.login.uuid}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </section>
    );
  }
}

export default Configuration;
