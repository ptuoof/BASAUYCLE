import { Input, Select, Button, Space, Typography, ConfigProvider } from 'antd';
import { SearchOutlined, CalendarOutlined, DollarCircleOutlined } from '@ant-design/icons';
import './SearchBar.css';

const { Option } = Select;

export default function SearchBar() {
  const bikeTypes = ['All Types', 'Mountain', 'Road', 'Gravel', 'E-Bikes'];
  const priceRanges = ['Any Price', 'Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', 'Over $10,000'];

  const customTheme = {
    token: {
      borderRadius: 8,
      fontSize: 13,
    },
    components: {
      Input: {
        paddingBlock: 6,
        paddingInline: 12,
        controlHeight: 38,
      },
      Select: {
        paddingBlock: 6,
        paddingInline: 12,
        controlHeight: 38,
      },
      Button: {
        controlHeight: 38,
        paddingBlock: 6,
        paddingInline: 16,
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
              prefix={<SearchOutlined style={{ color: '#20c997', fontSize: 14 }} />}
              placeholder="Brand or model..."
              size="middle"
              style={{ borderRadius: 8 }}
            />
          </div>

          <div className="search-bar-select-wrapper">
            <Typography.Text className="search-bar-label">BIKE TYPE</Typography.Text>
            <Select
              defaultValue="All Types"
              size="middle"
              style={{ width: '100%', borderRadius: 8 }}
              suffixIcon={<CalendarOutlined style={{ color: '#9ca3af', fontSize: 12 }} />}
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
              size="middle"
              style={{ width: '100%', borderRadius: 8 }}
              suffixIcon={<DollarCircleOutlined style={{ color: '#9ca3af', fontSize: 12 }} />}
            >
              {priceRanges.map((range) => (
                <Option key={range} value={range}>{range}</Option>
              ))}
            </Select>
          </div>

          <Button
            type="primary"
            size="middle"
            block
            style={{
              backgroundColor: '#171D2F',
              borderColor: '#171D2F',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
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
