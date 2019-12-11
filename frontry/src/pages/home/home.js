import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import "./home.css";

const { Header, Content, Footer, Sider } = Layout;

export default function Home({ links, reflash, children }, ...props) {

  reflash();

  useEffect(() => {
    console.log(window.location.pathname);
  }, [props]);

  return (
    <Layout className="body">
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[(window.location.pathname === '/') ? 'home' : window.location.pathname]}>
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            <span className="nav-text">Todas Categorias</span>
          </Link>
        </Menu.Item>

        {
          links.map((link, index) => (
              <Menu.Item key={ link.path }>
                 <Link to={link.path}>
                  <Icon type="apple" />
                  <span className="nav-text">{ link.name}</span>
                </Link>
              </Menu.Item>
            )
          )
        }
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px' }}>
        <div className="innerBody" style={{ padding: 24, background: '#fff' }}>
          {children}
        </div>
      </Content>
    </Layout>
  </Layout>
  );
}