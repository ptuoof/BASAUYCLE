import { Form, Input, Button, Card, Typography, Divider, Space, ConfigProvider } from 'antd';
import { MailOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Header from "../../component/header";
import Footer from "../../component/footer";
import './login.css';

export default function Login() {
  const [form] = Form.useForm();
  const navLinks = [
    { label: 'Buy Bikes', href: '#' },
    { label: 'Sell Your Bike', href: '#' },
    { label: 'How it Works', href: '#' }
  ];

  const onFinish = (values) => {
    console.log('Login values:', values);
  };

  const customTheme = {
    token: {
      colorPrimary: '#00c2a8',
      borderRadius: 10,
      fontSize: 14,
    },
    components: {
      Input: {
        paddingBlock: 10,
        paddingInline: 14,
      },
      Button: {
        height: 48,
        fontSize: 16,
        fontWeight: 600,
      },
    },
  };

  return (
    <div className="login-page">
      <Header 
        navLinks={navLinks}
        showSearch={false}
        showAvatar={false}
        showLogin={false}
      />

      <ConfigProvider theme={customTheme}>
        <Card className="login-card">
          <div className="login-title">
            <Typography.Title level={2} style={{ margin: 0, marginBottom: 8, fontWeight: 700, color: '#0f172a' }}>
              Welcome Back
            </Typography.Title>
            <Typography.Text type="secondary" style={{ fontSize: 14 }}>
              The premium marketplace for riders.
            </Typography.Text>
          </div>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: '#94a3b8' }} />}
                placeholder="name@example.com"
                style={{ borderRadius: 10 }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Space direction="vertical" size={4} style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography.Text style={{ fontSize: 14, color: '#334155' }}>Password</Typography.Text>
                  <Link to="#" style={{ fontSize: 13, color: '#00c2a8', textDecoration: 'none' }}>
                    Forgot password?
                  </Link>
                </div>
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#94a3b8' }} />}
                  placeholder="Enter your password"
                  style={{ borderRadius: 10 }}
                />
              </Space>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                style={{
                  backgroundColor: '#00c2a8',
                  borderColor: '#00c2a8',
                  borderRadius: 12,
                  marginTop: 10,
                }}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <Divider style={{ margin: '24px 0 16px' }}>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              OR CONTINUE WITH
            </Typography.Text>
          </Divider>

          <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
            <Button
              icon={
                <svg width={20} height={20} viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              }
              style={{
                height: 44,
                borderRadius: 10,
                border: '1px solid #e2e8f0',
                backgroundColor: 'white',
                color: '#1A1A1A',
                fontWeight: 500,
              }}
            >
              Google
            </Button>
          </Space>

          <div className="login-footer">
            <Typography.Text type="secondary" style={{ fontSize: 14 }}>
              Don&apos;t have an account?{' '}
              <Link to="/register" style={{ color: '#00c2a8', fontWeight: 600, textDecoration: 'none' }}>
                Register as Buyer or Seller
              </Link>
            </Typography.Text>
          </div>
        </Card>
      </ConfigProvider>

      <Footer showSubscribe={false} />
    </div>
  );
}
