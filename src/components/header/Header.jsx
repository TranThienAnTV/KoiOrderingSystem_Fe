import React from 'react'
import { Menu, Button } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import './Header.scss'
import { useNavigate } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar">
      <img src="src\image\koi logo - remove bg.png" alt="Koi Fish Logo" width={'70px'} />
      <Menu mode="horizontal" theme="light" className='menu-items'>
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
  )
}

export default Header