import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="logo">
          <span className="logo-icon">⬢</span>
          <span className="logo-text">36 Bikes</span>
        </div>
        <div className="header-actions">
          <a href="#" className="help-link">Help</a>
          <button className="join-btn">Join Marketplace</button>
        </div>
      </header>

      {/* Login Card */}
      <div className="login-card">
        <div className="login-title">
          <h1>Welcome Back</h1>
          <p>The premium marketplace for riders.</p>
        </div>

        <form>
          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <span className="icon">✉️</span>
              <input
                type="email"
                placeholder="name@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <div className="form-label-row">
              <label>Password</label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <div className="input-wrapper">
              <span className="icon">🔒</span>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="btn-primary">
            Sign In <span>→</span>
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        {/* Social */}
        <div className="social-buttons">
          <button className="social-btn google">
            <span>G</span> Google
          </button>
          <button className="social-btn facebook">
            <span>f</span> Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="login-footer">
          Don&apos;t have an account?{" "}
          <a href="#">Register as Buyer or Seller</a>
        </div>
      </div>

      {/* Footer bottom */}
      <footer className="page-footer">
        © 2024 36 Bikes. Built for the ride.
      </footer>
    </div>
  );
}
