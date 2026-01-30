import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import bikeLogo from "../../assets/bike-logo.png";
import "../Login/login.css";
import "./index.css";

export default function ForgotPassword() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Forgot password:", values);
    // TODO: gọi API gửi link đặt lại mật khẩu
  };

  return (
    <div className="auth-page auth-page--login auth-page--white auth-page--forgot">
      <Link to="/" className="auth-page__logo">
        <img src={bikeLogo} alt="BASAUYCLE" className="auth-page__logo-icon" />
        <span className="auth-page__logo-text">BASAUYCLE</span>
      </Link>

      <div className="auth-page__form-wrap">
        <div className="auth-card">
          <h1 className="auth-card__title">Quên mật khẩu</h1>
          <p className="auth-card__subtitle">
            Nhập email đăng ký để nhận link đặt lại mật khẩu
          </p>

          <Form
            form={form}
            name="forgot-password"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
            className="auth-form"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Vui lòng nhập email hợp lệ!" },
              ]}
            >
              <Input
                placeholder="EMAIL"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item className="auth-form__submit">
              <button
                type="submit"
                className="auth-card__btn-submit"
                aria-label="Gửi link đặt lại mật khẩu"
              >
                <ArrowRightOutlined className="auth-card__btn-icon" />
              </button>
            </Form.Item>
          </Form>

          <div className="auth-card__links">
            <Link
              to="/login"
              className="auth-card__link auth-card__link--primary"
            >
              Quay lại đăng nhập
            </Link>
          </div>
        </div>
      </div>

      <footer className="auth-page__footer">
        <Link to="#">Hỗ trợ</Link>
        <span className="auth-page__footer-sep">·</span>
        <Link to="#">Chính sách quyền riêng tư</Link>
        <span className="auth-page__footer-sep">·</span>
        <Link to="#">Điều khoản sử dụng</Link>
        <span className="auth-page__footer-sep">·</span>
        <Link to="#">Tùy chọn cookies</Link>
        <span className="auth-page__footer-sep">·</span>
        <span className="auth-page__footer-lang">VN</span>
      </footer>
    </div>
  );
}
