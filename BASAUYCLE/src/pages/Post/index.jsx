import { useState } from 'react';
import { Breadcrumb, Input, Select, Button, Upload, Switch } from 'antd';
import { InboxOutlined, FileTextOutlined, StarOutlined, ClockCircleOutlined, ToolOutlined, CameraOutlined, DollarOutlined } from '@ant-design/icons';
import Header from '../../component/header';
import Footer from '../../component/footer';
import StepProgress from '../../component/StepProgress';
import './index.css';

const { Dragger } = Upload;

export default function PostBike() {
    const [condition, setCondition] = useState('new');
    const [requireInspection, setRequireInspection] = useState(false);

    const uploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                console.log(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div className="post-bike-container">
            <Header
                showSearch={true}
                showAvatar={true}
                showSellButton={false}
                showLogin={true}
            />

            <main className="post-main-content">
                {/* Breadcrumb */}
                <Breadcrumb
                    className="post-breadcrumb"
                    separator=">"
                    items={[
                        { title: 'Marketplace' },
                        { title: 'Sell Your Bike' },
                    ]}
                />

                {/* Page Header */}
                <div className="post-header">
                    <h1 className="post-title">Post a Bike for Sale</h1>
                    <p className="post-subtitle">Reach over 50,000 cycling enthusiasts worldwide</p>
                </div>

                {/* Step Progress */}
                <StepProgress currentStep={0} />

                {/* Form Container */}
                <div className="post-form-container">
                    {/* Basic Information */}
                    <div className="form-section">
                        <div className="section-content">
                            {/* Section Title Inside */}
                            <div className="section-title-row">
                                <FileTextOutlined className="section-icon-teal" />
                                <h2 className="section-title">Basic Information</h2>
                            </div>

                            {/* Bike Name */}
                            <div className="form-field">
                                <label className="field-label">Bike Name / Listing Title</label>
                                <Input
                                    placeholder="e.g. 2023 Specialized Tarmac SL7 Pro"
                                    size="large"
                                    className="field-input"
                                />
                            </div>

                            {/* Brand and Category */}
                            <div className="form-row">
                                <div className="form-field">
                                    <label className="field-label">Brand</label>
                                    <Select
                                        placeholder="Select Brand"
                                        size="large"
                                        className="field-select"
                                        options={[
                                            { value: 'specialized', label: 'Specialized' },
                                            { value: 'trek', label: 'Trek' },
                                            { value: 'giant', label: 'Giant' },
                                            { value: 'cannondale', label: 'Cannondale' },
                                            { value: 'bianchi', label: 'Bianchi' },
                                        ]}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="field-label">Category</label>
                                    <Select
                                        placeholder="Select Category"
                                        size="large"
                                        className="field-select"
                                        options={[
                                            { value: 'road', label: 'Road Bike' },
                                            { value: 'mountain', label: 'Mountain Bike' },
                                            { value: 'hybrid', label: 'Hybrid' },
                                            { value: 'electric', label: 'Electric' },
                                            { value: 'folding', label: 'Folding' },
                                        ]}
                                    />
                                </div>
                            </div>

                            {/* Condition */}
                            <div className="form-field">
                                <label className="field-label">Condition</label>
                                <div className="condition-buttons">
                                    <Button
                                        size="large"
                                        onClick={() => setCondition('new')}
                                        className={`condition-btn ${condition === 'new' ? 'condition-btn-new-active' : 'condition-btn-inactive'}`}
                                    >
                                        <StarOutlined className="condition-icon" />
                                        New
                                    </Button>
                                    <Button
                                        size="large"
                                        onClick={() => setCondition('used')}
                                        className={`condition-btn ${condition === 'used' ? 'condition-btn-used-active' : 'condition-btn-inactive'}`}
                                    >
                                        <ClockCircleOutlined className="condition-icon" />
                                        Used
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="form-section">
                        <div className="section-content">
                            <div className="section-title-row">
                                <ToolOutlined className="section-icon-teal" />
                                <h2 className="section-title">Technical Specifications</h2>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label className="field-label">Frame Size</label>
                                    <Input
                                        placeholder="e.g. 56cm M, 19 inch"
                                        size="large"
                                        className="field-input"
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="field-label">Frame Material</label>
                                    <Select
                                        placeholder="Select Material"
                                        size="large"
                                        className="field-select"
                                        options={[
                                            { value: 'carbon', label: 'Carbon Fiber' },
                                            { value: 'aluminum', label: 'Aluminum' },
                                            { value: 'steel', label: 'Steel' },
                                            { value: 'titanium', label: 'Titanium' },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Photos & Videos */}
                    <div className="form-section">
                        <div className="section-content">
                            <div className="section-title-row">
                                <CameraOutlined className="section-icon-teal" />
                                <h2 className="section-title">Photos & Videos</h2>
                                <span className="upload-counter">REQUIRED: MIN 3 PHOTOS</span>
                            </div>

                            <Dragger {...uploadProps} className="upload-dragger">
                                <p className="upload-icon">
                                    <InboxOutlined style={{ fontSize: 48, color: '#1ABC9C' }} />
                                </p>
                                <p className="upload-text">Drag & drop your bike photos here</p>
                                <p className="upload-hint">or</p>
                                <Button type="primary" className="upload-browse-btn">
                                    Browse Files
                                </Button>
                            </Dragger>
                        </div>
                    </div>

                    {/* Pricing & Inspection */}
                    <div className="form-section">
                        <div className="section-content">
                            <div className="section-title-row">
                                <DollarOutlined className="section-icon-teal" />
                                <h2 className="section-title">Pricing & Inspection</h2>
                            </div>

                            <div className="form-field">
                                <label className="field-label">Sale Price ($)</label>
                                <Input
                                    prefix="$"
                                    placeholder="0.00"
                                    size="large"
                                    className="field-input"
                                />
                            </div>

                            <div className="inspection-toggle-card">
                                <div className="inspection-info">
                                    <h3 className="inspection-title">Require Professional Inspection</h3>
                                    <p className="inspection-desc">Increase buyer confidence with verified condition</p>
                                </div>
                                <Switch
                                    checked={requireInspection}
                                    onChange={setRequireInspection}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="form-actions">
                        <Button size="large" className="action-btn-draft">
                            Save as Draft
                        </Button>
                        <div className="action-btn-group">
                            <Button size="large" className="action-btn-prev">
                                Previous
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                className="action-btn-next"
                            >
                                Next: Technical Specs
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer
                exploreLinks={[
                    { label: 'Featured Road Bikes', href: '#' },
                    { label: 'New MTB Arrivals', href: '#' },
                    { label: 'Certified Pre-owned', href: '#' },
                    { label: 'Popular Categories', href: '#' }
                ]}
                supportLinks={[
                    { label: 'Help Center', href: '#' },
                    { label: 'Safety Guidelines', href: '#' },
                    { label: 'Listing Fees', href: '#' },
                    { label: 'Contact Us', href: '#' }
                ]}
            />
        </div>
    );
}
