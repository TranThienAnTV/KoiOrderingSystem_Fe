import React from 'react';
import { Input, DatePicker, Button, Space } from 'antd';
import { SearchOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';

const SearchBar = () => {
  return (
    <div className="search-bar" style={{ padding: '20px', textAlign: 'center' }}>
      <Space direction="horizontal" size="large">
        <Input
          size="large"
          placeholder="Choose your destination"
          prefix={<EnvironmentOutlined />}
        />
        <DatePicker size="large" placeholder="Select date" prefix={<CalendarOutlined />} />
        <Button type="primary" size="large" icon={<SearchOutlined />}>
          Search
        </Button>
      </Space>
    </div>
  );
};

export default SearchBar;
