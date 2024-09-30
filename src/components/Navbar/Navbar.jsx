import React from 'react';
import { Menu, Button } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import './Navbar.scss'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Koi Fish Logo" />
      </div>
      <Menu mode="horizontal" theme="light">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="koiFarm">Koi Farm</Menu.Item>
        <Menu.Item key="tour">Tour</Menu.Item>
        <Menu.Item key="koiFish">Koi Fish</Menu.Item>
      </Menu>
      <div className='auth-buttons'>
        <Button type="text" icon={<LoginOutlined />} onClick={() => navigate("/login")}>Log in</Button>
        <Button type="primary" icon={<UserAddOutlined />} onClick={() => navigate("/register")}>Sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
