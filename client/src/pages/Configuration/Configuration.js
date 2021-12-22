import React, { Component } from "react";
import { Table, Button, Modal, Input, Row, Col } from "antd";
import "./Configuration.scss";
import BtnAdd from "../../../src/assets/images/icons/navigation/btn_Add.svg";
import EditIcon from "../../../src/assets/images/icons/navigation/edit.svg";
import DeleteIcon from "../../../src/assets/images/icons/navigation/ic_delete.svg";
import DisableIcon from "../../../src/assets/images/icons/navigation/disable.svg";
import SearcheIcon from "../../../src/assets/images/icons/navigation/search.svg";
import EyeIcon from "../../../src/assets/images/icons/navigation/eye.svg";
import RefreshIcon from "../../../src/assets/images/icons/navigation/refresh.svg";

import validate from "../../helper/validationForm";
import qs from "qs";
const { TextArea } = Input;

const columns = [
  {
    title: "Name",
    dataIndex: "username",
    sorter: true,
  },
  {
    title: "User",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile Phone",
    dataIndex: "mobile",
  },
  {
    title: "Role",
    dataIndex: "role",
    render(text, record) {
      return {
        children: <div className='role'>{text}</div>,
      };
    },
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Create Time",
    dataIndex: "createtime",
    sorter: true,
  },
  {
    title: "Update Time",
    dataIndex: "updatetime",
    sorter: true,
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
    modal2Visible: false,
    fields: {},
    errors: {},
    pagination: {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
    },
    loading: false,
    selectedRowKeys: [],
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
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
    // fetch(
    //   `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    // )
    fetch(
      `https://mocki.io/v1/27da5f26-9587-4963-b1d0-43ddd5274ba5?${qs.stringify(
        getRandomuserParams(params)
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          fields: {},
          errors: {},
          data: data,
          pagination: {
            ...params.pagination,
            total: 30,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      console.log("1");
    } else {
      console.log("2");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const {
      data,
      pagination,
      loading,
      fields,
      errors,
      selectedRowKeys,
    } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <section className='configuration layout-white'>
        <h1> Users </h1>
        <div className='btnGrp'>
          <div className='iconbtnGrp'>
            <Button
              type='primary'
              onClick={() => this.setModal2Visible(true)}
              icon={<img src={BtnAdd} />}
              size='large'
            />
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
            <Button shape='circle' icon={<img src={RefreshIcon} />} />
            <Button shape='circle' icon={<img src={EyeIcon} />} />
            <Button shape='circle' icon={<img src={SearcheIcon} />} />
          </div>
        </div>

        <Table
          columns={columns}
          // rowKey={(record) => record.id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
          rowSelection={rowSelection}
        />
        <Modal
          title={
            <div className='adduserModaltitle'>
              <p> Add User </p>
              <span>
                {" "}
                An email for setting a password will be sent automatically
              </span>
            </div>
          }
          width='670px'
          className='addUserModal'
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}>
          <section>
            <div>
              <form
                name='contactform'
                className='contactform form-signin'
                onSubmit={this.contactSubmit.bind(this)}>
                <div className='col-md-24'>
                  <fieldset className='fieldset'>
                    <div className='field'>
                      <label className='label'>
                        User Name <span> *</span>
                      </label>
                      <Input
                        refs='name'
                        type='text'
                        className='loginInput'
                        size='30'
                        placeholder='User Name'
                        onChange={this.handleChange.bind(this, "name")}
                        value={fields["name"]}
                      />
                      <span className='error'>{errors["name"]}</span>
                    </div>
                  </fieldset>
                </div>
                <Row>
                  <Col span={12}>
                    <div className='col-md-6'>
                      <fieldset className='fieldset'>
                        <div className='field margin-right-20'>
                          <label className='label'>First Name</label>
                          <Input
                            type='text'
                            className='loginInput'
                            size='30'
                            placeholder='First Name'
                          />
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='col-md-6'>
                      <fieldset className='fieldset'>
                        <div className='field'>
                          <label className='label'>Last Name</label>
                          <Input
                            type='text'
                            className='loginInput'
                            size='30'
                            placeholder='Last Name'
                          />
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <div className='col-md-6'>
                      <fieldset className='fieldset'>
                        <div className='field margin-right-20'>
                          <label className='label'>
                            Email <span> *</span>
                          </label>
                          <Input
                            refs='email'
                            type='text'
                            className='loginInput'
                            size='30'
                            placeholder='Email'
                            onChange={this.handleChange.bind(this, "email")}
                            value={fields["email"]}
                          />
                          <span className='error'>{errors["email"]}</span>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col span={12}>
                    {" "}
                    <div className='col-md-6'>
                      <fieldset className='fieldset'>
                        <div className='field'>
                          <label className='label'>Mobile Phone</label>
                          <Input
                            type='text'
                            className='loginInput'
                            size='30'
                            placeholder='Mobile Phone'
                          />
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                </Row>

                <div className='col-md-6'>
                  <fieldset className='fieldset'>
                    <div className='field'>
                      <label className='label'>
                        Role <span> *</span>
                      </label>
                      <Input
                        type='text'
                        className='loginInput'
                        size='30'
                        placeholder='Role'
                      />
                    </div>
                  </fieldset>
                </div>
                <div className='col-md-6'>
                  <fieldset className='fieldset'>
                    <div className='field'>
                      <label className='label'>Description</label>
                      <TextArea rows={4} />
                    </div>
                  </fieldset>
                </div>
                <div className='btn-grp'>
                  <button
                    type='submit'
                    className='button is-block is-info is-fullwidth ant-btn-primary'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </Modal>
      </section>
    );
  }
}

export default Configuration;
