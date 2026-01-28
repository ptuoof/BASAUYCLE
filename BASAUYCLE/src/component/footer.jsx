import { Row, Col, Typography, Space } from 'antd';
import { ShareAltOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import bikeLogo from '../assets/bike-logo.png';
import './footer.css';

const { Title, Text } = Typography;

export default function Footer({
  exploreLinks = [
    { label: 'Featured Road Bikes', href: '#' },
    { label: 'New MTB Arrivals', href: '#' },
    { label: 'Certified Pre-owned', href: '#' },
    { label: 'Popular Categories', href: '#' }
  ],
  supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Safety Guidelines', href: '#' },
    { label: 'Listing Fees', href: '#' },
    { label: 'Contact Us', href: '#' }
  ],
  bottomLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ]
}) {
  return (
    <footer className="app-footer app-footer-light">
      <div className="app-footer-inner">
        <Row gutter={[48, 32]} className="app-footer-top">
          {/* Logo and Description */}
          <Col xs={24} md={8}>
            <Link to="/" className="app-footer-logo">
              <img src={bikeLogo} alt="BASAUYCLE " className="app-footer-logo-icon" />
              <Title level={5} className="app-footer-logo-text">
                BASAUYCLE
              </Title>
            </Link>
            <Text className="app-footer-description">
              The world's most trusted marketplace for premium bicycles and components. Built for riders, by riders.
            </Text>
          </Col>

          {/* Explore Links */}
          <Col xs={12} sm={8} md={5}>
            <Title level={5} className="app-footer-section-title">
              Explore
            </Title>
            <Space direction="vertical" size={8} className="app-footer-links">
              {exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="app-footer-link"
                >
                  {link.label}
                </a>
              ))}
            </Space>
          </Col>

          {/* Support Links */}
          <Col xs={12} sm={8} md={5}>
            <Title level={5} className="app-footer-section-title">
              Support
            </Title>
            <Space direction="vertical" size={8} className="app-footer-links">
              {supportLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="app-footer-link"
                >
                  {link.label}
                </a>
              ))}
            </Space>
          </Col>

          {/* Connect */}
          <Col xs={24} sm={8} md={6}>
            <Title level={5} className="app-footer-section-title">
              Connect
            </Title>
            <Space size={12} className="app-footer-social">
              <a href="#" className="app-footer-social-icon" aria-label="Share">
                <ShareAltOutlined />
              </a>
              <a href="#" className="app-footer-social-icon" aria-label="Globe">
                <GlobalOutlined />
              </a>
              <a href="#" className="app-footer-social-icon" aria-label="Email">
                <MailOutlined />
              </a>
            </Space>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="app-footer-bottom">
          <Text className="app-footer-copyright">
            © 2026 BASAUYCLE Inc. All rights reserved.
          </Text>
          <Space size={20} className="app-footer-bottom-links">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="app-footer-bottom-link"
              >
                {link.label}
              </a>
            ))}
          </Space>
        </div>
      </div>
    </footer>
  );
}
