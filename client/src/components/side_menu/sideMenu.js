import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import logo from "../../../src/assets/images/logo.svg";
import {
  DASHBOARD_IC,
  ANALYSIS_IC,
  ENTITIES_IC,
  EVENTS_IC,
  POLICIES_IC,
  REPORT_IC,
  SETTINGS_IC,
} from "../../assets/images/icons/navigation/navigation";
import "./sideMenu.scss";

const { Header, Content, Sider } = Layout;

class Sidemenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className='sideMenu'>
        <Layout>
          <Header className='header'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <p> Supermicro Power Manager </p>
            </div>
          </Header>
          <Layout className='sideLayout'>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              width={260}
              collapsedWidth={75}
              onCollapse={this.onCollapse}>
              <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
                <Menu.Item key='1' icon={<DASHBOARD_IC />}>
                  <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item key='2' icon={<ENTITIES_IC />}>
                  <span>Entities</span>
                </Menu.Item>
                <Menu.Item key='3' icon={<POLICIES_IC />}>
                  <span>Policies</span>
                </Menu.Item>
                <Menu.Item key='4' icon={<EVENTS_IC />}>
                  <span>Events</span>
                </Menu.Item>
                <Menu.Item key='5' icon={<REPORT_IC />}>
                  <span>Report</span>
                </Menu.Item>
                <Menu.Item key='6' icon={<ANALYSIS_IC />}>
                  <span>Analysis</span>
                </Menu.Item>
                <Menu.Item key='7' icon={<SETTINGS_IC />}>
                  <span>Configuration</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <div className='content-header'>
                <h2>Dashboard</h2>

                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}>
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Sidemenu;
