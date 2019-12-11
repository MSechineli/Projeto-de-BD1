import React, { useEffect } from 'react';
import './styles.css';
import { ConfigProvider } from 'antd';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './pages/home/home';
import Category from './components/category';

const categorys = [
  {
    path: '/1',
    name: 'doce',
  },
  {
    path: '/2',
    name: 'salgado',
  },
  {
    path: '/3',
    name: 'pastel',
  },
  {
    path: '/4',
    name: 'limonada',
  },
  {
    path: '/5',
    name: 'lasanha',
  },
  {
    path: '/6',
    name: 'bacon',
  },
];


export default function App(){
  const reflash = () => {
    console.log('oi');
  }

  return (
    <ConfigProvider>
      <BrowserRouter>
        <Switch>
          <Home links = {categorys} reflash = { reflash }>
            {
              categorys
                .map(c => (
                  <Route
                    key={c.path}
                    path = { c.path }
                    exact
                    children = { <h1>{c.name}</h1> }
                  />
                )
              )
            }
            <Route path = "/" exact children = { <h1>ola mundo</h1> } />
            <Route path = '/*' children = { <Redirect to="/" /> } />
          </Home>
        </Switch>
      </BrowserRouter>
    </ConfigProvider>
  );
};

