import "./index.css";
import { Link } from "react-router-dom";
import Header from "../../component/header";
import Footer from "../../component/footer";

export default function Register() {
  const navLinks = [
    { label: 'Buy Bikes', href: '#' },
    { label: 'Sell Your Bike', href: '#' },
    { label: 'How it Works', href: '#' }
  ];

  return (
    <div className="register-page">
      <Header 
        navLinks={navLinks}
        showSearch={false}
        showAvatar={false}
        showLogin={true}
      />

      {/* Main Content */}
      <main className="register-main">
        <div className="register-card">
          {/* Title */}
          <div className="register-title">
            <h1>Create Your Account</h1>
            <p>Join the community for buying, selling, and inspecting bicycles.</p>
          </div>

          {/* Form */}
          <form className="register-form">
            <div className="register-form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g., John Doe" />
            </div>

            <div className="register-form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@email.com" />
            </div>

            <div className="register-form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="register-form-row">
              <div className="register-form-group">
                <label>Password</label>
                <input type="password" placeholder="8+ characters" />
              </div>
              <div className="register-form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Repeat password" />
              </div>
            </div>

            <div className="register-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="#" className="register-link">Terms of Service</a> and{" "}
                <a href="#" className="register-link">Privacy Policy</a>.
              </label>
            </div>

            <button type="submit" className="register-btn-primary">
              Create Account
            </button>

            <div className="register-divider">
              <span>Or sign up with</span>
            </div>

            <div className="register-social-buttons">
              <button type="button" className="register-social-btn">
                <svg className="register-social-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>

            <div className="register-footer-link">
              Already have an account?{" "}
              <Link to="/login" className="register-link">Log In</Link>
            </div>
          </form>
        </div>
      </main>

      <Footer showSubscribe={false} />
    </div>
  );
}
