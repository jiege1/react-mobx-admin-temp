import React from 'react';
import Loadable from 'react-loadable';
import {Spin} from 'antd';

const loading = (err) => {

  if (err.error) {
    console.error(err.error);
  }

  return (
    <Spin size="large" style={{width: '100%', margin: '40px 0'}}/>
  );
};

const lazyComponent = (path) => {
  return Loadable({
    loader: () => import(`pages/${path}`),
    loading,
  });
};


const routeData = [
  {
    key: 'home',
    label: '首页',
    // noSideShow: true,
    path: '/',
    desc: '首页',
    component: lazyComponent('home'),
    isAuth: true,
  },
];

export default routeData;