import React, { useState } from 'react';
import './ProfilePage.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, Menu, message, Space, Switch, theme, Typography } from 'antd';
import { useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function ProfilePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const user = location.state?.user;
  const [passwordForm] = Form.useForm();
  const [profileForm] = Form.useForm();

  const toggleEdit = () => {
    setIsClicked(!isClicked);
  };

  const handleUpdate = () => {
    profileForm.submit();
    passwordForm.submit();
  };

  const handleProfileSubmit = (values) => {
    console.log('Profile Form Values: ', values);
  };

  const handlePasswordSubmit = (values) => {
    console.log('Password Form Values: ', values);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <div className="profile-edit-container">
          <Content
            style={{
              margin: '24px 16px',
              padding: '16px 32px',
              height: 493,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Col className='left-edit-form' span={12}>
              <h2>Edit profile</h2>
              <Form
                className='profile-edit-form'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                form={profileForm}
                onFinish={handleProfileSubmit}
              >
                <Form.Item label="Full name" name="fullName" initialValue={user.data?.fullName}>
                  <Input />
                </Form.Item>
                <Form.Item label="Username" name="username" initialValue={user.data?.username} rules={[
                  {
                    required: "true",
                    message: "Username cannot be blank",
                  }
                ]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Email address" name="email" initialValue={user.data?.email} rules={[
                  {
                    required: "true",
                    message: "Email cannot be blank",
                  }
                ]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Phone number" name="phone" rules={[
                  {
                    required: "true",
                    message: "Phone number cannot be blank"
                  },
                  {
                    pattern: '(84|0[3|5|7|8|9])+([0-9]{8})\\b',
                    message: "Illegal phone number",
                  }
                ]}
                  initialValue={user.data?.phone}
                >
                  <Input />
                </Form.Item>

                <Form.Item label="Address" name="address" initialValue={user.data?.address}>
                  <Input />
                </Form.Item>
              </Form>
            </Col>
            <Col className="right-edit-form" span={12}>
              <h2>Password</h2>
              <Form
                className='password-edit-form'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                form={passwordForm}
                onFinish={handlePasswordSubmit}>
                <Space style={{
                  width: '100%'
                }}>
                  {isClicked ? (
                    <div>
                      <Form.Item label="New Password" name="password" rules={[
                        {
                          required: "true",
                          message: "Please enter new password!",
                        }
                      ]}>
                        <Input.Password />
                      </Form.Item>
                      <Form.Item label="Confirm Password" name="retype_password" rules={[
                        {
                          required: "true",
                          message: "Please confirm your password",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error('The two passwords do not match!')
                            );
                          },
                        }),
                      ]}>
                        <Input.Password />
                      </Form.Item>
                    </div>
                  ) : (
                    <Button
                      type="primary"
                      shape="round"
                      onClick={toggleEdit}
                      style={{ backgroundColor: '#0051FF', color: '#fff' }}
                    >
                      Change password
                    </Button>
                  )}
                </Space>
              </Form>
              <div className="submit-edit-btn">
                <Button type="primary" onClick={handleUpdate}>Save</Button>
              </div>
            </Col>
          </Content>
        </div>
      case '2':
        return <div className="profile-edit-container">
          <Content
            style={{
              margin: '24px 16px',
              padding: '16px 32px',
              height: 493,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Col span={24}>
              <h2>Notifications</h2>
              <div className='notifi-container'>
                <div className='notifi-item'>
                  Order Confirmation
                  <Switch defaultChecked={false} />
                </div>
                <div className='notifi-item'>
                  Order Delivered
                  <Switch defaultChecked={false} />
                </div>
                <div className='notifi-item'>
                  Email Notification
                  <Switch defaultChecked={false} />
                </div>
              </div>
            </Col>
          </Content>
        </div>
      case '3':
        return <div className="profile-edit-container">
        <Content
          style={{
            margin: '24px 16px',
            padding: '16px 32px',
            height: 493,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Col span={24}>
            <h2>My Booking</h2>
          </Col>
        </Content>
      </div>
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null}
        collapsible collapsed={collapsed}
        style={{
          position: 'relative',
          backgroundColor: 'rgb(218, 177, 102)',
        }}>
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            backgroundColor: 'rgb(218, 177, 102)',
            color: '#eee',
            fontSize: '15px',
          }}
          onSelect={({ key }) => setSelectedKey(key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Notifications',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'My Booking',
            },
          ]}
        />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            position: "absolute",
            bottom: '10px',
          }}
        />
      </Sider>
      <Layout>
        <Header
          className='profile-header'
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex'
          }}
        >
          <Typography.Title
            level={2}
          >
            Welcome back, {user.data?.username}
          </Typography.Title>
        </Header>
        {
          renderContent()
        }
      </Layout>
    </Layout >
  );
};
export default ProfilePage