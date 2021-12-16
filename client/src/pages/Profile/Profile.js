import React, { useState, useEffect } from "react";

import { Card, Input, Row, Col } from "antd";

import { PROFILE_IC } from "../../assets/images/icons/navigation/navigation";
import "./Profile.scss";
import useForm from "../../helper/useForm";
import validate from "../../helper/validationForm";
const Profile = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  return (
    <section className='profile'>
      <div>
        <div className='list-header'>
          <div className='list-header__grp'>
            <div className='flex-grp'>
              <h1>
                <PROFILE_IC />
              </h1>
              <p>
                <span>Lucas Stark</span>
                <label>Global Admin</label>
              </p>
            </div>
          </div>
        </div>
        <div className='site-card-border-less-wrapper'>
          <Row gutter={24}>
            <Col span={14}>
              <Card title='Profile' bordered={false}>
                <div>
                  <div>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className='field'>
                        <label className='label'>FirstName</label>
                        <div className='control'>
                          <Input
                            className={`loginInput input ${
                              errors.fname && "is-danger"
                            }`}
                            type='text'
                            placeholder='Enter First Name'
                            name='fname'
                            onChange={handleChange}
                            value={values.fname || ""}
                            required
                          />
                        </div>
                        {errors.fname && (
                          <p className='help is-danger error'>{errors.fname}</p>
                        )}
                      </div>
                      <div className='field'>
                        <label className='label'>Last Name</label>
                        <div className='control'>
                          <Input
                            className={`loginInput input ${
                              errors.lname && "is-danger"
                            }`}
                            type='text'
                            name='lname'
                            placeholder='Enter Last Name'
                            onChange={handleChange}
                            value={values.lname || ""}
                            required
                          />
                        </div>
                        {errors.lname && (
                          <p className='help is-danger error'>{errors.lname}</p>
                        )}
                      </div>
                      <div className='field'>
                        <label className='label'>Email Address</label>
                        <div className='control'>
                          <Input
                            autoComplete='off'
                            className={`loginInput input ${
                              errors.email && "is-danger"
                            }`}
                            type='email'
                            name='email'
                            placeholder='Enter Email Address'
                            onChange={handleChange}
                            value={values.email || ""}
                            required
                          />
                          {errors.email && (
                            <p className='help is-danger error'>
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className='btn-grp'>
                        <button
                          type='submit'
                          className='button is-block is-info is-fullwidth ant-btn-primary'>
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={10}>
              <Card title='Account Information' bordered={false}>
                <div className='accout_grp'>
                  <div className='accout_grp--details'>
                    <Row>
                      <Col span={12}>
                        {" "}
                        <label>User Name</label>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <span>AAAAAA</span>
                      </Col>
                    </Row>
                  </div>
                  <div className='accout_grp--details'>
                    <Row>
                      <Col span={12}>
                        {" "}
                        <label>API Role</label>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <span>Global Admin</span>
                      </Col>
                    </Row>
                  </div>
                  <div className='accout_grp--details'>
                    <Row>
                      <Col span={12}>
                        {" "}
                        <label>Web Role</label>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <span>Web Global Admin</span>
                      </Col>
                    </Row>
                  </div>
                  <div className='accout_grp--details'>
                    <Row>
                      <Col span={12}>
                        {" "}
                        <label>Created Date</label>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <span>2019/05/10 04:50:28</span>
                      </Col>
                    </Row>
                  </div>
                  <div className='accout_grp--details no-margin'>
                    <Row>
                      <Col span={12}>
                        {" "}
                        <label>Updated Date</label>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <span>2019/05/10 04:50:28</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Profile;
