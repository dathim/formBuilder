import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Profile extends React.Component {
    render() {
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Profile</Breadcrumb.Item>
                        <Breadcrumb.Item>Edit</Breadcrumb.Item> 
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat. 2
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default Profile

