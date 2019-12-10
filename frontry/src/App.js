import React from 'react';
import './styles.css';
import { ConfigProvider } from 'antd';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home/home';


export default function App(){
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = { Home } />
          >
        </Switch>
      </BrowserRouter>
    </ConfigProvider>
  );
};

