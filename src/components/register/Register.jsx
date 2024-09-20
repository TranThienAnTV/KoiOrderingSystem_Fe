import React from 'react'
import './Register.scss'
import { Button, Col, Form, Input, Row } from 'antd'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
      <Row className='register'>
        <Col className='right-side' span={8}>
        </Col>
        <Col className='left-side' span={16}>
        <div className="container">
<Form>
  <Form.Item label="Full name" name="fullname">
    <Input/>
  </Form.Item>
  <Form.Item label="Email" name="email">
    <Input/>
  </Form.Item>
  <Form.Item label="Phone number" name="phoneNumber">
    <Input/>
  </Form.Item>
  <Form.Item label="Password" name="password">
    <Input/>
  </Form.Item>
  <Form.Item>
    <Button htmlType='submit'>Sign Up</Button>
  </Form.Item>
</Form>
<p>Already have an account? 
  <Link to={"/login"}>Login</Link>
</p>
        </div>
        <div>
          <Button>Sign in with Gmail</Button>
        </div>
        </Col>
      </Row></>
  )
}

export default Register