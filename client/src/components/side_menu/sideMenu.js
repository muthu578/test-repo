import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Icon from "@ant-design/icons";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./sideMenu.scss";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

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
            <div className='logo' />
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}>
              <Menu.Item key='1'>nav 1</Menu.Item>
              <Menu.Item key='2'>nav 2</Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}>
              <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
                <Menu.Item key='1' icon={<UserOutlined />}>
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key='2' icon={<VideoCameraOutlined />}>
                  <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                  key='sub1'
                  title={
                    <span>
                      <UploadOutlined />
                      <span>User</span>
                    </span>
                  }>
                  <Menu.Item key='3' icon={<MenuFoldOutlined />}>
                    Tom
                  </Menu.Item>
                  <Menu.Item key='4' icon={<MenuUnfoldOutlined />}>
                    Bill
                  </Menu.Item>
                  <Menu.Item key='5' icon={<VideoCameraOutlined />}>
                    Alex
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key='sub2'
                  title={
                    <span>
                      <Icon type='team' />
                      <span>Team</span>
                    </span>
                  }>
                  <Menu.Item key='6'>Team 1</Menu.Item>
                  <Menu.Item key='8'>Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key='9'>
                  <Icon type='file' />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
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
