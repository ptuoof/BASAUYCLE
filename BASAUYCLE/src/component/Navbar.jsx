import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">BASAUYCLE</span>
                    </div>

                    {/* Menu Items */}
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                            Buy
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                            Sell
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                            Service
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                            Community
                        </a>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-8">
                        <Input
                            placeholder="Search bikes..."
                            prefix={<SearchOutlined className="text-gray-400" />}
                            className="rounded-full"
                            size="large"
                        />
                    </div>

                    {/* User Avatar */}
                    <Avatar
                        size={40}
                        icon={<UserOutlined />}
                        className="bg-primary cursor-pointer"
                    />
                </div>
            </div>
        </nav>
    );
}
