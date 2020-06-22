
import { Alert, Row, Col, Button, Input } from 'antd';
import React, { useState } from 'react';
import { Link, connect, Dispatch } from 'umi';
import { StateType } from '@/models/login';
import { LoginParamsType, getVerificationPicture } from '@/services/login';
import { ConnectState } from '@/models/connect';
import LoginFrom from './components/Login';

import styles from './style.less';

const { Tab, UserName, Password, Mobile, Captcha, Captcha1, Submit, VertifyPic, TenancyName} = LoginFrom;
interface LoginProps {
  dispatch: Dispatch;
  userLogin: StateType;
  submitting?: boolean;
}
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 20,
    }}
    message={content}
    type="error"
    showIcon
  />
);
const Login: React.FC<LoginProps> = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState<string>('account');
  console.log(props)
  const handleSubmit = (values: LoginParamsType) => {
    
    const { dispatch } = props;
    
    dispatch({
      type: 'login/login',
      payload: { ...values, type }
    });

  }; 
  
  let pictureId = ''
  let pictureImg = ''
  // getVerificationPicture().then(res => {
  //   pictureId = res.id
  //   pictureImg = res.picture
  // }) 
  const getPicture = ()=>{
    getVerificationPicture().then(res => { 
      pictureId = res.id
    })    
  }
  
  // componentDidMount() { 

  // }
  // componentDidUpdate(){ 

  // }

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="账户或密码错误（admin/ant.design）" />
          )}
          <TenancyName
            name="TenancyName"
            placeholder="租户: admin or user"
            rules={[
              {
                required: true,
                message: '请选择租户!',
              },
            ]}
          />
          <UserName
            name="userName"
            placeholder="用户名: admin or user"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="密码: ant.design"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <Captcha1
            name="captcha1"
            placeholder="验证码"
            rules={[
              {
                required: true,
                message: '点击刷新图形码',
              },
            ]}
          />
          <Row gutter={8}>
            <Col span={18}>
              <VertifyPic
                name="userInput"
                placeholder="验证码: admin or user"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码!',
                  },
                ]}
              />
            </Col>
            <Col span={6}>
              <Button onClick={getPicture} name="pictureId">更新图片</Button>
              <img name="pictureImg" onChange={getPicture} src={pictureImg} alt=""/>
            </Col>
          </Row>
        </Tab>
        <Tab key="mobile" tab="手机号登录">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="验证码错误" />
          )}
          <Mobile
            name="mobile"
            placeholder="手机号"
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder="验证码"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="秒"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
          />
        </Tab>
        <Submit loading={submitting}>登录</Submit>
        <div>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
          <Link className={styles.register} to="/user/register">
            注册账户
          </Link>
        </div>
      </LoginFrom>
    </div>
  );

};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
