import React, { useState, useEffect } from "react";

import { Card, Input, Row, Col } from "antd";

import { PROFILE_IC } from "../../assets/images/icons/navigation/navigation";
import "./Profile.scss";

// export default function Profile() {
//   return (
//     <>
{
  /* <section className='profile'>
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
      <Card title='Profile' bordered={false} style={{ width: 300 }}>
        <div>
          <div>
            <form
              name='contactform'
              className='contactform form-signin'
              onSubmit={this.contactSubmit.bind(this)}>
              <fieldset className='fieldset'>
                <label>First Name</label>
                <Input
                  type='text'
                  name='user_id'
                  className='loginInput'
                  placeholder='Enter First Name'
                />
              </fieldset>
              <fieldset className='fieldset'>
                <label>Last Name</label>
                <Input
                  type='password'
                  className='loginInput'
                  name='user_password'
                  placeholder='Enter Last Name'
                />
              </fieldset>
              <fieldset className='fieldset'>
                <label>Email</label>
                <Input
                  type='password'
                  className='loginInput'
                  name='user_password'
                  placeholder='Enter Email Address'
                />
              </fieldset>
              <p className='local-user'>Local User</p>
              <input
                type='submit'
                className='btn-primary btn-input'
                value='Login'
              />
            </form>
          </div>
        </div>
      </Card>
    </div>
    ,
  </div>
</section>; */
}

//     </>
//   );
// }

const Profile = () => {
  const [count, setCount] = useState(0);

  useEffect(() => setCount((currentCount) => currentCount + 1), []);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

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
          <Card title='Profile' bordered={false} style={{ width: 300 }}>
            <div>
              <div>
                <form className='contactform form-signin'>
                  <fieldset className='fieldset'>
                    <label>First Name</label>
                    <Input
                      type='text'
                      name='user_id'
                      className='loginInput'
                      placeholder='Enter First Name'
                    />
                  </fieldset>
                  <fieldset className='fieldset'>
                    <label>Last Name</label>
                    <Input
                      type='password'
                      className='loginInput'
                      name='user_password'
                      placeholder='Enter Last Name'
                    />
                  </fieldset>
                  <fieldset className='fieldset'>
                    <label>Email</label>
                    <Input
                      type='password'
                      className='loginInput'
                      name='user_password'
                      placeholder='Enter Email Address'
                    />
                  </fieldset>
                  <p className='local-user'>Local User</p>
                  <input
                    type='submit'
                    className='btn-primary btn-input'
                    value='Login'
                  />
                </form>
              </div>
            </div>
          </Card>
        </div>
        ,
      </div>
    </section>
  );
};

export default Profile;
