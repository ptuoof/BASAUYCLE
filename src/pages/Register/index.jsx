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
          <h1 className="auth-card__title">Đăng ký</h1>
          <p className="auth-card__subtitle">Tạo tài khoản để mua bán xe đạp</p>

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

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                { min: 8, message: "Mật khẩu tối thiểu 8 ký tự!" },
              ]}
            >
              <Input.Password
                placeholder="MẬT KHẨU"
                className="auth-form__input"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="XÁC NHẬN MẬT KHẨU"
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
                      : Promise.reject(new Error("Bạn cần đồng ý điều khoản!")),
                },
              ]}
              className="auth-form__remember"
            >
              <Checkbox>
                Tôi đồng ý với{" "}
                <Link to="#" className="auth-card__link-inline">
                  Điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link to="#" className="auth-card__link-inline">
                  Chính sách quyền riêng tư
                </Link>
              </Checkbox>
            </Form.Item>

            <Form.Item className="auth-form__submit">
              <button
                type="submit"
                className="auth-card__btn-submit"
                aria-label="Đăng ký"
              >
                <ArrowRightOutlined className="auth-card__btn-icon" />
              </button>
            </Form.Item>
          </Form>

          <div className="auth-card__links">
            <span className="auth-card__links-text">
              Đã có tài khoản?{" "}
              <Link
                to="/login"
                className="auth-card__link auth-card__link--primary"
              >
                Đăng nhập
              </Link>
            </span>
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
