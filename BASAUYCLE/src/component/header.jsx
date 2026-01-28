import { Link } from 'react-router-dom';
import bikeLogo from '../assets/bike-logo.png';
import './header.css';

export default function Header({ 
  showSearch = false, 
  showAvatar = false,
  showSellButton = false,
  navLinks = [
    { label: 'Buy Bikes', href: '#' },
    { label: 'Sell Your Bike', href: '#' },
    { label: 'How it Works', href: '#' }
  ],
  activeLink = null,
  showLogin = true
}) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <Link to="/" className="app-header-logo" aria-label="36 Bikes Home">
          <img src={bikeLogo} alt="36 Bikes" className="app-header-logo-icon" />
          <span className="app-header-logo-text">36BIKES</span>
        </Link>

        {navLinks.length > 0 && (
          <nav className="app-header-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={activeLink === link.label ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {showSearch && (
          <div className="app-header-search-wrapper">
            <div className="app-header-search">
              <div className="app-header-search-icon" />
              <input placeholder="Search bikes..." />
            </div>
          </div>
        )}

        <div className="app-header-right">
          {showSellButton && (
            <button className="app-header-sell-button">
              Sell Your Bike
            </button>
          )}
          {showLogin && (
            <Link to="/login" className="app-header-login-button">
              Login
            </Link>
          )}
          {showAvatar && (
            <div className="app-header-avatar" />
          )}
        </div>
      </div>
    </header>
  );
}

