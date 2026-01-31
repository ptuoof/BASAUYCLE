import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Input, Checkbox } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import bikeLogo from "../../assets/bike-logo.png";
import { useAuth } from "../../contexts/AuthContext";
import "./login.css";

export default function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const onFinish = (values) => {
    login({ username: values.username, email: values.username });
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="auth-page auth-page--login auth-page--white">
      <Link to="/" className="auth-page__logo">
        <img src={bikeLogo} alt="BASAUYCLE" className="auth-page__logo-icon" />
        <span className="auth-page__logo-text">BASAUYCLE</span>
      </Link>

      <div className="auth-page__form-wrap">
        <div className="auth-card">
          <h1 className="auth-card__title">Sign In</h1>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
            className="auth-form"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input
                placeholder="USERNAME"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password
                placeholder="PASSWORD"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              className="auth-form__remember"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="auth-form__submit">
              <button
                type="submit"
                className="auth-card__btn-submit"
                aria-label="Sign In"
              >
                <ArrowRightOutlined className="auth-card__btn-icon" />
              </button>
            </Form.Item>
          </Form>

          <div className="auth-card__links">
            <Link to="/forgot-password" className="auth-card__link">
              CAN'T SIGN IN?
            </Link>
            <Link
              to="/register"
              className="auth-card__link auth-card__link--primary"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>

      <footer className="auth-page__footer">
        <Link to="#">Support</Link>
        <span className="auth-page__footer-sep">·</span>
        <Link to="#">Privacy Policy</Link>
        <span className="auth-page__footer-sep">·</span>
        <Link to="#">Terms of Service</Link>
        <span className="auth-page__footer-sep">·</span>
        <Link to="#">Cookie Settings</Link>
        <span className="auth-page__footer-sep">·</span>
        <span className="auth-page__footer-lang">VN</span>
      </footer>
    </div>
  );
}
