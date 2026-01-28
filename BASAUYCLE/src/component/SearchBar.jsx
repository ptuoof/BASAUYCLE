import { Input, Select, Button, Space, Typography, ConfigProvider } from 'antd';
import { SearchOutlined, CalendarOutlined, DollarCircleOutlined } from '@ant-design/icons';
import './SearchBar.css';

const { Option } = Select;

export default function SearchBar() {
  const bikeTypes = ['All Types', 'Mountain', 'Road', 'Gravel', 'E-Bikes'];
  const priceRanges = ['Any Price', 'Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', 'Over $10,000'];

  const customTheme = {
    token: {
      borderRadius: 12,
      fontSize: 13,
    },
    components: {
      Input: {
        paddingBlock: 8,
        paddingInline: 14,
      },
      Select: {
        paddingBlock: 8,
        paddingInline: 14,
      },
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <div className="search-bar">
        <div className="search-bar-grid">
          <div className="search-bar-input-wrapper">
            <Typography.Text className="search-bar-label">SEARCH ANYTHING</Typography.Text>
            <Input
              prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
              placeholder="Brand or model..."
              size="large"
              style={{ borderRadius: 12 }}
            />
          </div>

          <div className="search-bar-select-wrapper">
            <Typography.Text className="search-bar-label">BIKE TYPE</Typography.Text>
            <Select
              defaultValue="All Types"
              size="large"
              style={{ width: '100%', borderRadius: 12 }}
              suffixIcon={<CalendarOutlined style={{ color: '#9ca3af' }} />}
            >
              {bikeTypes.map((type) => (
                <Option key={type} value={type}>{type}</Option>
              ))}
            </Select>
          </div>

          <div className="search-bar-select-wrapper">
            <Typography.Text className="search-bar-label">PRICE RANGE</Typography.Text>
            <Select
              defaultValue="Any Price"
              size="large"
              style={{ width: '100%', borderRadius: 12 }}
              suffixIcon={<DollarCircleOutlined style={{ color: '#9ca3af' }} />}
            >
              {priceRanges.map((range) => (
                <Option key={range} value={range}>{range}</Option>
              ))}
            </Select>
          </div>

          <Button
            type="primary"
            size="large"
            block
            style={{
              backgroundColor: '#020617',
              borderColor: '#020617',
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              height: 'fit-content',
              marginTop: 'auto',
            }}
          >
            Find My Ride
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
}
