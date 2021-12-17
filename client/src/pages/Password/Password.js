import React from "react";

import { Card, Input, Row, Col } from "antd";

import { PROFILE_IC } from "../../assets/images/icons/navigation/navigation";
import "../Profile/Profile.scss";
import useForm from "../../helper/useForm";
import validate from "../../helper/validationForm";
const Password = () => {
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
              <Card title='Password' bordered={false}>
                <div>
                  <div>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className='field'>
                        <label className='label'>Current Password</label>
                        <div className='control'>
                          <Input
                            className={`loginInput input ${
                              errors.password && "is-danger"
                            }`}
                            type='text'
                            name='password'
                            placeholder='Enter Current Password'
                            onChange={handleChange}
                            value={values.password || ""}
                            required
                          />
                        </div>
                        {errors.password && (
                          <p className='help is-danger error'>
                            {errors.password}
                          </p>
                        )}
                      </div>
                      <div className='field'>
                        <label className='label'>New Password</label>
                        <div className='control'>
                          <fieldset className='fieldset'>
                            <Input
                              className={`loginInput input ${
                                errors.newpassword && "is-danger"
                              }`}
                              type='text'
                              name='newpassword'
                              placeholder='Enter New Password'
                              onChange={handleChange}
                              value={values.newpassword || ""}
                              required
                            />
                          </fieldset>
                        </div>
                        {errors.newpassword && (
                          <p className='help is-danger error'>
                            {errors.newpassword}
                          </p>
                        )}
                      </div>
                      <div className='field'>
                        <label className='label'>Verify Password</label>
                        <div className='control'>
                          <fieldset className='fieldset'>
                            <Input
                              className={`loginInput input ${
                                errors.verifypassword && "is-danger"
                              }`}
                              type='text'
                              name='verifypassword'
                              placeholder='Enter Verify Password'
                              onChange={handleChange}
                              value={values.verifypassword || ""}
                              required
                            />
                          </fieldset>
                          {errors.verifypassword && (
                            <p className='help is-danger error'>
                              {errors.verifypassword}
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
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Password;
