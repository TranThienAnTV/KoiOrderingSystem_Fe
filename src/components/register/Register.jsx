import React from 'react';
import './Register.scss';
import { Button, Col, Form, Input, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { provider } from '../../config/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function Register() {

  const navigate = useNavigate();

  function handleLoginGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        navigate("/")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const handleFinish = (values) => {
    console.log(values)
  }


  return (
    <>
      <Row className='register'>
        <Col className='left-side' span={10}>
          <div className="theme-container">
            <div className="theme-panel">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
            </div>
          </div>
        </Col>
        <Col className='right-side' span={14}>
          <div className="container" >
            <h1>Create Account</h1>
            <Form onFinish={handleFinish} layout='vertical' className='form-register'>
              <Form.Item label="Full name" name="fullname">
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
              <Form.Item label="Phone number" name="phoneNumber" rules={[
                {
                  required: "true",
                  message: "m quen nhap kia",
                },
                {
                  pattern: '(84|0[3|5|7|8|9])+([0-9]{8})\\b',
                  message: "m nhap sai kia nhap lai di",
                }
              ]}>
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password />
              </Form.Item>
              {/* <Form.Item className='btn-container'>
                <Button htmlType='submit'>Sign Up</Button>
              </Form.Item>  */}
              <Button className='btn-container' htmlType='submit'>
                Sign Up
              </Button>
            </Form>
            <p>Already have an account?
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
          <div className='login-option'>
            <Button onClick={handleLoginGoogle}>
              <img src="https://img.icons8.com/color/48/null/gmail-new.png" alt="" width='20px' />
              Sign in with Gmail
            </Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Register