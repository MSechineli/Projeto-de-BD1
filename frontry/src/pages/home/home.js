import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './home.css'
const { Header, Sider, Content } = Layout;

class home extends Component {
    render() {
      return (
        <Layout className = "layout">
          <Sider >
            <Header><h1 color = 'white'>Categorias</h1></Header>
          </Sider>
          <Layout>
            <Header><h1>Receitas</h1></Header>
            <Content></Content>
          </Layout>
        </Layout>
    );
  }
}

  export default home;