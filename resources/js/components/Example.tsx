
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;




class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="1" icon={<FileOutlined />}>
                            Add Form
                        </Menu.Item>

                        <SubMenu key="sub1" icon={<DesktopOutlined />} title="My forms">
                            <Menu.Item key="2">Tom</Menu.Item>
                            <Menu.Item key="3">Bill</Menu.Item>
                            <Menu.Item key="4">Alex</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<PieChartOutlined />} title="Responses">
                            <Menu.Item key="5">Tom</Menu.Item>
                            <Menu.Item key="6">Bill</Menu.Item>
                            <Menu.Item key="7">Alex</Menu.Item>
                        </SubMenu>

                        <Menu.Item key="33" icon={<TeamOutlined />}>User</Menu.Item>


                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
              </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </>
        );
    }
}

export default SiderDemo

