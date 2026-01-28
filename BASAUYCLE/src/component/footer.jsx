import { Row, Col, Typography, Button, Input, Space } from 'antd';
import { ShareAltOutlined, EnvironmentOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import bikeLogo from '../assets/bike-logo.png';
import './footer.css';

const { Title, Text } = Typography;

export default function Footer({ 
  showSubscribe = false,
  marketplaceLinks = [
    { label: 'All Bikes', href: '#' },
    { label: 'Road Bikes', href: '#' },
    { label: 'Mountain Bikes', href: '#' },
    { label: 'E-Bikes', href: '#' },
    { label: 'Components', href: '#' }
  ],
  servicesLinks = [
    { label: 'Inspection Pro', href: '#' },
    { label: 'Bike Shipping', href: '#' },
    { label: 'Sell Your Bike', href: '#' },
    { label: 'Bike Financing', href: '#' },
    { label: 'Trade-In Program', href: '#' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ],
  bottomLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Settings', href: '#' }
  ]
}) {
  return (
    <footer className="app-footer app-footer-dark">
      <div className="app-footer-inner">
        <Row gutter={[24, 24]} className="app-footer-top">
          <Col xs={24} md={10}>
            <Link to="/" className="app-footer-logo">
              <img src={bikeLogo} alt="36 Bikes" className="app-footer-logo-icon" />
              <Title level={5} style={{ margin: 0, color: 'white', fontSize: 18, fontWeight: 700 }}>
                36BIKES
              </Title>
            </Link>
            <Text style={{ color: '#9ca3af', fontSize: 13, display: 'block', marginBottom: 16, lineHeight: 1.5 }}>
              The premium destination for cyclists to buy and sell high-performance equipment with confidence and ease.
            </Text>
            <Space size={8}>
              <Button
                type="text"
                icon={<ShareAltOutlined />}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#1f2937',
                  color: '#9ca3af',
                  border: 'none',
                }}
                aria-label="Share"
              />
              <Button
                type="text"
                icon={<EnvironmentOutlined />}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#1f2937',
                  color: '#9ca3af',
                  border: 'none',
                }}
                aria-label="Location"
              />
              <Button
                type="text"
                icon={<GlobalOutlined />}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#1f2937',
                  color: '#9ca3af',
                  border: 'none',
                }}
                aria-label="Globe"
              />
            </Space>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Title level={5} style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'white' }}>
              Marketplace
            </Title>
            <Space direction="vertical" size={6} style={{ width: '100%' }}>
              {marketplaceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: 'block',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: 13,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  {link.label}
                </a>
              ))}
            </Space>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Title level={5} style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'white' }}>
              Services
            </Title>
            <Space direction="vertical" size={6} style={{ width: '100%' }}>
              {servicesLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: 'block',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: 13,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  {link.label}
                </a>
              ))}
            </Space>
          </Col>

          <Col xs={24} sm={8} md={4}>
            {showSubscribe ? (
              <>
                <Title level={5} style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'white' }}>
                  Subscribe
                </Title>
                <Text style={{ color: '#9ca3af', fontSize: 13, display: 'block', marginBottom: 8 }}>
                  Get the latest deals and updates.
                </Text>
                <Space.Compact style={{ width: '100%' }}>
                  <Input placeholder="Email" style={{ borderRadius: '999px 0 0 999px' }} />
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: '#1ABC9C',
                      borderColor: '#1ABC9C',
                      borderRadius: '0 999px 999px 0',
                    }}
                  >
                    Join
                  </Button>
                </Space.Compact>
              </>
            ) : (
              <>
                <Title level={5} style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'white' }}>
                  Company
                </Title>
                <Space direction="vertical" size={6} style={{ width: '100%' }}>
                  {companyLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      style={{
                        display: 'block',
                        color: '#9ca3af',
                        textDecoration: 'none',
                        fontSize: 13,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {link.label}
                    </a>
                  ))}
                </Space>
              </>
            )}
          </Col>
        </Row>

        <div className="app-footer-bottom">
          <Text style={{ color: '#9ca3af', fontSize: 12 }}>
            © 2024 36 Bikes Marketplace Inc. All rights reserved.
          </Text>
          <Space size={14}>
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: 12,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#111827'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
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

