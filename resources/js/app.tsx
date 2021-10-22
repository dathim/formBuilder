//require('./components/Example.tsx');  
  
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";  

import { Provider } from 'react-redux'
import store from "./redux" 
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router'
import { Layout } from 'antd';
import SiderMenu from './components/sliderMenu'

export default function Example() {
    return (  
       
        <Provider store={store}>
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderMenu/>
                    <Router/>
                </Layout>
            </BrowserRouter>
        </Provider>
                   
    );
}

ReactDOM.render(<Example />, document.getElementById('app'));  