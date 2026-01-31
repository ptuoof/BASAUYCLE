import { Link } from "react-router-dom";
import { Form, Input, Checkbox } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import bikeLogo from "../../assets/bike-logo.png";
import "../Login/login.css";
import "./index.css";

export default function Register() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Register values:", values);
  };

  return (
    <div className="auth-page auth-page--register auth-page--white">
      <Link to="/" className="auth-page__logo">
        <img src={bikeLogo} alt="BASAUYCLE" className="auth-page__logo-icon" />
        <span className="auth-page__logo-text">BASAUYCLE</span>
      </Link>

      <div className="auth-page__form-wrap">
        <div className="auth-card auth-card--register">
          <h1 className="auth-card__title">Register</h1>
          <p className="auth-card__subtitle">Create an account to buy and sell bicycles</p>

          <Form
            form={form}
            name="register"
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
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="EMAIL"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 8, message: "Password must be at least 8 characters!" },
              ]}
            >
              <Input.Password
                placeholder="PASSWORD"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="CONFIRM PASSWORD"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("You must agree to the terms!")),
                },
              ]}
              className="auth-form__remember"
            >
              <Checkbox>
                I agree to the{" "}
                <Link to="#" className="auth-card__link-inline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="auth-card__link-inline">
                  Privacy Policy
                </Link>
              </Checkbox>
            </Form.Item>

            <Form.Item className="auth-form__submit">
              <button
                type="submit"
                className="auth-card__btn-submit"
                aria-label="Register"
              >
                <ArrowRightOutlined className="auth-card__btn-icon" />
              </button>
            </Form.Item>
          </Form>

          <div className="auth-card__links">
            <span className="auth-card__links-text">
              Already have an account?{" "}
              <Link
                to="/login"
                className="auth-card__link auth-card__link--primary"
              >
                Sign In
              </Link>
            </span>
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
