import { Form, Input, Button, Card, Typography, Checkbox, Divider, Space, Row, Col, ConfigProvider } from 'antd';
import { Link } from "react-router-dom";
import Header from "../../component/header";
import Footer from "../../component/footer";
import './index.css';

export default function Register() {
  const [form] = Form.useForm();
  const navLinks = [
    { label: 'Buy Bikes', href: '#' },
    { label: 'Sell Your Bike', href: '#' },
    { label: 'How it Works', href: '#' }
  ];

  const onFinish = (values) => {
    console.log('Register values:', values);
  };

  const customTheme = {
    token: {
      colorPrimary: '#1ABC9C',
      borderRadius: 8,
      fontSize: 14,
    },
    components: {
      Input: {
        paddingBlock: 10,
        paddingInline: 12,
      },
      Button: {
        height: 48,
        fontSize: 16,
        fontWeight: 600,
      },
    },
  };

  return (
    <div className="register-page">
      <Header 
        navLinks={navLinks}
        showSearch={false}
        showAvatar={false}
        showLogin={true}
      />

      <div className="register-main">
        <ConfigProvider theme={customTheme}>
          <Card className="register-card">
            <div className="register-title">
              <Typography.Title level={2} style={{ margin: 0, marginBottom: 8, fontWeight: 700, color: '#1A1A1A' }}>
                Create Your Account
              </Typography.Title>
              <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                Join the community for buying, selling, and inspecting bicycles.
              </Typography.Text>
            </div>

            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
              size="large"
            >
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input placeholder="e.g., John Doe" style={{ borderRadius: 8 }} />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input placeholder="name@email.com" style={{ borderRadius: 8 }} />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input placeholder="+1 (555) 000-0000" style={{ borderRadius: 8 }} />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: 'Please input your password!' },
                      { min: 8, message: 'Password must be at least 8 characters!' }
                    ]}
                  >
                    <Input.Password placeholder="8+ characters" style={{ borderRadius: 8 }} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                      { required: true, message: 'Please confirm your password!' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder="Repeat password" style={{ borderRadius: 8 }} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('You must agree to the terms!')),
                  },
                ]}
              >
                <Checkbox>
                  <Typography.Text style={{ fontSize: 14, color: '#343A40' }}>
                    I agree to the{' '}
                    <Link to="#" style={{ color: '#1ABC9C', fontWeight: 500 }}>
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="#" style={{ color: '#1ABC9C', fontWeight: 500 }}>
                      Privacy Policy
                    </Link>.
                  </Typography.Text>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    backgroundColor: '#1ABC9C',
                    borderColor: '#1ABC9C',
                    borderRadius: 8,
                    marginTop: 4,
                  }}
                >
                  Create Account
                </Button>
              </Form.Item>
            </Form>

            <Divider style={{ margin: '24px 0' }}>
              <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                Or sign up with
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
                  borderRadius: 8,
                  border: '1px solid #CED4DA',
                  backgroundColor: 'white',
                  color: '#1A1A1A',
                  fontWeight: 500,
                  minWidth: 150,
                }}
              >
                Google
              </Button>
            </Space>

            <div className="register-footer-link">
              <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#1ABC9C', fontWeight: 600, textDecoration: 'none' }}>
                  Log In
                </Link>
              </Typography.Text>
            </div>
          </Card>
        </ConfigProvider>
      </div>

      <Footer showSubscribe={false} />
    </div>
  );
}
