import React from "react";
import { Layout, Menu } from "antd";

import "./sideMenu.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { SubMenu } = Menu;

class SubMenuLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { islogout: false };
  }

  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    const { collapsed, pathKey } = this.props;

    console.log(pathKey);
    this.getComponent = () => {
      switch (pathKey) {
        case "profile":
        case "password":
          return (
            <div>
              <SubMenu key='sub1' title='User Management'>
                <Menu.Item key='1'>
                  {" "}
                  <Link to='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Link to='/password'>Change Password </Link>
                </Menu.Item>
              </SubMenu>
            </div>
          );
        case "events":
          return (
            <div>
              <SubMenu key='sub2' title='Navigation Two'>
                <Menu.Item key='5'>Option 5</Menu.Item>
                <Menu.Item key='6'>Option 6</Menu.Item>
                <SubMenu key='sub3' title='Submenu'>
                  <Menu.Item key='7'>Option 7</Menu.Item>
                  <Menu.Item key='8'>Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
            </div>
          );
        // .. etc
        default:
          return (
            <div>
              <SubMenu key='sub4' title='Navigation Three'>
                <Menu.Item key='9'>Option 9</Menu.Item>
                <Menu.Item key='10'>Option 10</Menu.Item>
                <Menu.Item key='11'>Option 11</Menu.Item>
                <Menu.Item key='12'>Option 12</Menu.Item>
              </SubMenu>
            </div>
          );
      }
    };
    return (
      <div className='sideMenu'>
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          className={collapsed ? "sub-menu-layout" : "sub-menu-layout fixed"}
          mode='inline'>
          {this.getComponent()}
        </Menu>
      </div>
    );
  }
}

export default SubMenuLayout;
