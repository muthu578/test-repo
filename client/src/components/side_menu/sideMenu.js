import React from "react";
import { Layout, Menu, Breadcrumb, Dropdown, List, Avatar, Button } from "antd";

import logo from "../../../src/assets/images/logo.svg";

import {
  DASHBOARD_IC,
  ANALYSIS_IC,
  ENTITIES_IC,
  EVENTS_IC,
  POLICIES_IC,
  REPORT_IC,
  SETTINGS_IC,
  ALERT_IC,
  LANG_IC,
  PROFILE_IC,
  RIGHT_IC,
} from "../../assets/images/icons/navigation/navigation";
import "./sideMenu.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Dashboard from "../../pages/Dashboard/Dashboard";
import Entities from "../../pages/Entities/Entities";
import Events from "../../pages/Events/Events";
import Policies from "../../pages/Policies/Policies";
import Report from "../../pages/Report/Report";
import Analysis from "../../pages/Analysis/Analysis";
import Configuration from "../../pages/Configuration/Configuration";
import Profile from "../../pages/Profile/Profile";
import Password from "../../pages/Password/Password";

const { Header, Content, Sider } = Layout;
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const ProfieListdata = [
  {
    title: "Profile",
    img: <PROFILE_IC />,
    desc: "Account settings and more",
    url: "/profile",
  },
  {
    title: "Change Password",
    img: <LANG_IC />,
    desc: "Identity and authority confirmation",
    url: "/password",
  },
];
class Sidemenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true, islogout: false };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true,
    });
  };

  render() {
    if (this.state.islogout) {
      return <Redirect to='/login' />;
    }
    return (
      <div className='sideMenu'>
        <Layout>
          <Header className='header'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <p> Supermicro Power Manager </p>
            </div>

            <div className='header-grp'>
              <>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key='0'>English</Menu.Item>
                      <Menu.Item key='1'>Chinese</Menu.Item>
                      <Menu.Item key='1'>Chinese traditional</Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}>
                  <span
                    className='ant-dropdown-link'
                    onClick={(e) => e.preventDefault()}>
                    <LANG_IC />
                  </span>
                </Dropdown>
              </>
              <>
                <Dropdown
                  overlay={
                    <List
                      itemLayout='horizontal'
                      className='list_item no-padding-list'
                      dataSource={data}
                      header={
                        <div className='list-header'>
                          <div className='list-header__grp'>
                            <div className='flex-grp'>
                              <h1>
                                <ALERT_IC />
                              </h1>
                              <p>
                                <span>11 New</span>
                                <span>Activity</span>
                              </p>
                            </div>
                            <Button className='btn-secondary'>
                              {" "}
                              Clear All
                            </Button>
                          </div>
                        </div>
                      }
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar src='https://joeschmoe.io/api/v1/random' />
                            }
                            title={<p>{item.title}</p>}
                            description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                          />
                        </List.Item>
                      )}
                    />
                  }
                  trigger={["click"]}>
                  <span
                    className='ant-dropdown-link'
                    onClick={(e) => e.preventDefault()}>
                    <ALERT_IC />
                  </span>
                </Dropdown>
              </>
              <>
                {/* <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key='0'>Menu Item One</Menu.Item>
                      <Menu.Item key='1'>Menu Item Two</Menu.Item>
                      <Menu.Item key='1'>Menu Item Three</Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}>
                  <span
                    className='ant-dropdown-link'
                    onClick={(e) => e.preventDefault()}>
                    <PROFILE_IC />
                  </span>
                </Dropdown> */}
                <Dropdown
                  overlay={
                    <List
                      itemLayout='horizontal'
                      className='list_item no-padding-list'
                      dataSource={ProfieListdata}
                      header={
                        <div className='list-header'>
                          <div className='list-header__grp'>
                            <div className='flex-grp'>
                              <h1>
                                <PROFILE_IC />
                              </h1>
                              <p>
                                <span>Lucas Stark</span>
                                <span>Global Admin</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                      footer={
                        <div>
                          {" "}
                          <Button onClick={this.signOut} type='primary'>
                            Sign out
                          </Button>
                        </div>
                      }
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Link to={item.url}>
                              <RIGHT_IC />
                            </Link>,
                          ]}>
                          <List.Item.Meta
                            avatar={item.img}
                            title={<p>{item.title}</p>}
                            description={item.desc}
                          />
                        </List.Item>
                      )}
                    />
                  }
                  trigger={["click"]}>
                  <span
                    className='ant-dropdown-link'
                    onClick={(e) => e.preventDefault()}>
                    <PROFILE_IC />
                  </span>
                </Dropdown>
              </>
            </div>
          </Header>
          <Layout className='sideLayout'>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              width={260}
              collapsedWidth={75}
              onCollapse={this.onCollapse}>
              <Menu
                theme='dark'
                onMouseEnter={() => this.setState({ collapsed: false })}
                onMouseLeave={() => this.setState({ collapsed: true })}
                defaultSelectedKeys={["1"]}
                mode='inline'>
                <Menu.Item key='1' icon={<DASHBOARD_IC />}>
                  <span>Dashboard</span>
                  <Link to='/' />
                </Menu.Item>
                <Menu.Item key='2' icon={<ENTITIES_IC />}>
                  <span>Entities</span>
                  <Link to='/entities' />
                </Menu.Item>
                <Menu.Item key='3' icon={<POLICIES_IC />}>
                  <span>Policies</span>
                  <Link to='/policies' />
                </Menu.Item>
                <Menu.Item key='4' icon={<EVENTS_IC />}>
                  <span>Events</span>
                  <Link to='/events' />
                </Menu.Item>
                <Menu.Item key='5' icon={<REPORT_IC />}>
                  <span>Report</span>
                  <Link to='/Report' />
                </Menu.Item>
                <Menu.Item key='6' icon={<ANALYSIS_IC />}>
                  <span>Analysis</span>
                  <Link to='/analysis' />
                </Menu.Item>
                <Menu.Item key='7' icon={<SETTINGS_IC />}>
                  <span>Configuration</span>
                  <Link to='/configuration' />
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <div className='content-header'>
                <h2> </h2>

                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                }}>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route path='/entities' component={Entities} />
                <Route path='/policies' component={Policies} />
                <Route path='/events' component={Events} />
                <Route path='/report' component={Report} />
                <Route path='/analysis' component={Analysis} />
                <Route path='/configuration' component={Configuration} />
                <Route path='/profile' component={Profile} />
                <Route path='/password' component={Password} />
              </Content>
              <div className='copyright-grp'>
                <p> Copyright © 2014-2019 Super Micro Computer, Inc. </p>
              </div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Sidemenu;
