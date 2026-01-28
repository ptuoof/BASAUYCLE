import { Card, Tag, Button, Space, Typography } from 'antd';
import { HeartOutlined, AppstoreOutlined, SettingOutlined, ThunderboltOutlined } from '@ant-design/icons';
import './BikeCard.css';

export default function BikeCard({ bike }) {
  const getBadgeColor = (badge) => {
    const colors = {
      'NEW ARRIVAL': '#1ABC9C',
      'INSPECTED': '#10b981',
      'TOP RATED': '#34d399',
    };
    return colors[badge] || '#1a1a1a';
  };

  return (
    <Card
      className="bike-card"
      hoverable
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      cover={
        <div className="bike-card-image-wrapper" style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
          <img 
            src={bike.image} 
            alt={bike.name}
            className="bike-card-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
          />
          {bike.badge && (
            <Tag
              color={getBadgeColor(bike.badge)}
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                fontSize: 11,
                fontWeight: 700,
                height: 24,
                lineHeight: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                border: 'none',
                zIndex: 1,
              }}
            >
              {bike.badge}
            </Tag>
          )}
          <Button
            type="text"
            icon={<HeartOutlined />}
            className="bike-card-favorite"
            aria-label="Add to favorites"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 36,
              height: 36,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          />
        </div>
      }
      styles={{
        body: { padding: 20 },
      }}
    >
      <Typography.Text type="secondary" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>
        {bike.category}
      </Typography.Text>
      <Typography.Text strong style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: 12 }}>
        {bike.price}
      </Typography.Text>
      <Typography.Text strong style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: 16 }}>
        {bike.name}
      </Typography.Text>
      <Space size="middle" wrap>
        {bike.specs.weight && (
          <Space size={6}>
            <AppstoreOutlined style={{ color: '#6b7280', fontSize: 16 }} />
            <Typography.Text style={{ fontSize: 14, color: '#6b7280' }}>
              {bike.specs.weight}
            </Typography.Text>
          </Space>
        )}
        {bike.specs.groupset && (
          <Space size={6}>
            <SettingOutlined style={{ color: '#6b7280', fontSize: 16 }} />
            <Typography.Text style={{ fontSize: 14, color: '#6b7280' }}>
              {bike.specs.groupset}
            </Typography.Text>
          </Space>
        )}
        {bike.specs.motorPower && (
          <Space size={6}>
            <ThunderboltOutlined style={{ color: '#6b7280', fontSize: 16 }} />
            <Typography.Text style={{ fontSize: 14, color: '#6b7280' }}>
              {bike.specs.motorPower}
            </Typography.Text>
          </Space>
        )}
      </Space>
    </Card>
  );
}
