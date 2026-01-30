import { Link } from "react-router-dom";
import { Form, Input, Checkbox } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import bikeLogo from "../../assets/bike-logo.png";
import "./login.css";

export default function Login() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Login values:", values);
  };

  return (
    <div className="auth-page auth-page--login auth-page--white">
      <Link to="/" className="auth-page__logo">
        <img src={bikeLogo} alt="BASAUYCLE" className="auth-page__logo-icon" />
        <span className="auth-page__logo-text">BASAUYCLE</span>
      </Link>

      <div className="auth-page__form-wrap">
        <div className="auth-card">
          <h1 className="auth-card__title">Đăng nhập</h1>

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
                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              ]}
            >
              <Input
                placeholder="TÊN NGƯỜI DÙNG"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                placeholder="MẬT KHẨU"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              className="auth-form__remember"
            >
              <Checkbox>Lưu đăng nhập</Checkbox>
            </Form.Item>

            <Form.Item className="auth-form__submit">
              <button
                type="submit"
                className="auth-card__btn-submit"
                aria-label="Đăng nhập"
              >
                <ArrowRightOutlined className="auth-card__btn-icon" />
              </button>
            </Form.Item>
          </Form>

          <div className="auth-card__links">
            <Link to="/forgot-password" className="auth-card__link">
              KHÔNG THỂ ĐĂNG NHẬP?
            </Link>
            <Link
              to="/register"
              className="auth-card__link auth-card__link--primary"
            >
              TẠO TÀI KHOẢN
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
