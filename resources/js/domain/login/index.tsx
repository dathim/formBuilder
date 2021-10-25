import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { Layout, Form, Input, Button, Checkbox, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { loginThunk } from '../../actions';
import type { AllState } from '../../components/types'

const Login = () => {
    const userToken = useSelector((state: AllState) => state.profile.apiCsrf)
    const dispatch = useDispatch()

    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(loginThunk(values))   

        // fFRKI0MyY5@gmail.com
        // password
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User </Breadcrumb.Item>
                    <Breadcrumb.Item>Sign In</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    Bill is a cat. 2
                </div>
            </Content>
        </Layout>
    );
};

export default Login
