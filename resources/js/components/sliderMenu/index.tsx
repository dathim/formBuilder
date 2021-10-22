
import React from 'react';
import { Layout, Menu } from 'antd';
import {    DesktopOutlined,    PieChartOutlined,    FileOutlined,    TeamOutlined} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
import {  Link  } from "react-router-dom";

class SiderMenu extends React.Component {
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
                            <Menu.Item key="2"> <Link to="/">Bill</Link></Menu.Item>
                            <Menu.Item key="3">Bill</Menu.Item>
                            <Menu.Item key="4">Alex</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<PieChartOutlined />} title="Responses">
                            <Menu.Item key="5">Tom</Menu.Item>
                            <Menu.Item key="6">Bill</Menu.Item>
                            <Menu.Item key="7">Alex</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="33" icon={<TeamOutlined />}>User</Menu.Item>

                        <Menu.Item key="34" icon={<TeamOutlined />}>
                            <Link to="/profile">profile</Link>
                        </Menu.Item>
                        
                    </Menu>
                </Sider>

            </>
        );
    }
}

export default SiderMenu

