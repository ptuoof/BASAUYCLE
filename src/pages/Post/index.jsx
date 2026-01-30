import { useState, useEffect } from 'react';
import { Breadcrumb, Input, Select, Button, Upload } from 'antd';
import {
  InfoCircleOutlined,
  SettingOutlined,
  CameraOutlined,
  CreditCardOutlined,
  InboxOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import Header from '../../component/header';
import Footer from '../../component/footer';
import StepProgress from '../../component/StepProgress';
import './index.css';

const { Dragger } = Upload;

export default function PostBike() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);

  // Form field states
  const [bikeName, setBikeName] = useState('');
  const [brand, setBrand] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [frameSize, setFrameSize] = useState('');
  const [frameMaterial, setFrameMaterial] = useState(undefined);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [price, setPrice] = useState('');

  // Section IDs for scroll detection
  const sectionIds = ['basic-info', 'technical-specs', 'photos-videos', 'pricing'];

  // Check section completion and update completedSections
  useEffect(() => {
    const completed = [];

    // Basic Info: bikeName + brand + category
    if (bikeName.trim() && brand && category) {
      completed.push(0);
    }

    // Technical Specs: frameSize + frameMaterial
    if (frameSize.trim() && frameMaterial) {
      completed.push(1);
    }

    // Photos/Videos: at least 3 photos
    if (uploadedFiles.length >= 3) {
      completed.push(2);
    }

    // Pricing: price entered
    if (price.trim()) {
      completed.push(3);
    }

    setCompletedSections(completed);
  }, [bikeName, brand, category, frameSize, frameMaterial, uploadedFiles, price]);

  // Scroll detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) setCurrentStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle step click navigation
  const handleStepClick = (stepIndex) => {
    const sectionId = sectionIds[stepIndex];
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset for header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        console.log(`${info.file.name} file uploaded successfully.`);
        setUploadedFiles(info.fileList);
      } else if (status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(file) {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
    },
  };

  return (
    <div className="post-bike-container">
      <Header showSearch={true} showAvatar={true} showSellButton={false} showLogin={true} />

      <main className="post-main-content">
        {/* Breadcrumb */}
        <Breadcrumb
          className="post-breadcrumb"
          separator=">"
          items={[{ title: 'Marketplace' }, { title: 'Sell Your Bike' }]}
        />

        {/* Page Header */}
        <div className="post-header">
          <h1 className="post-title">Post a Bike for Sale</h1>
          <p className="post-subtitle">Reach over 50,000 cycling enthusiasts worldwide</p>
        </div>

        {/* Step Progress */}
        <StepProgress
          currentStep={currentStep}
          completedSections={completedSections}
          onStepClick={handleStepClick}
        />

        {/* Form Container */}
        <div className="post-form-container">
          {/* Basic Information */}
          <div id="basic-info" className="form-section">
            <div className="section-content">
              <div className="section-title-row">
                <InfoCircleOutlined className="section-icon-teal" />
                <h2 className="section-title">Basic Information</h2>
              </div>

              <div className="form-field">
                <label className="field-label">Bike Name / Listing Title</label>
                <Input
                  placeholder="e.g. 2023 Specialized Tarmac SL7 Pro"
                  size="large"
                  className="field-input"
                  value={bikeName}
                  onChange={(e) => setBikeName(e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Brand</label>
                  <Select
                    placeholder="Select Brand"
                    size="large"
                    className="field-select"
                    value={brand}
                    onChange={(value) => setBrand(value)}
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
                    value={category}
                    onChange={(value) => setCategory(value)}
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
            </div>
          </div>

          {/* Technical Specifications */}
          <div id="technical-specs" className="form-section">
            <div className="section-content">
              <div className="section-title-row">
                <SettingOutlined className="section-icon-teal" />
                <h2 className="section-title">Technical Specifications</h2>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Frame Size</label>
                  <Input
                    placeholder="e.g. 56cm M, 19 inch"
                    size="large"
                    className="field-input"
                    value={frameSize}
                    onChange={(e) => setFrameSize(e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Frame Material</label>
                  <Select
                    placeholder="Select Material"
                    size="large"
                    className="field-select"
                    value={frameMaterial}
                    onChange={(value) => setFrameMaterial(value)}
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
          <div id="photos-videos" className="form-section">
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
                <p className="upload-hint">Supports High-Quality JPG, PNG, and MP4 (Max 50MB)</p>
                <Button type="primary" className="upload-browse-btn">
                  Browse Files
                </Button>
              </Dragger>
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="form-section">
            <div className="section-content">
              <div className="section-title-row">
                <CreditCardOutlined className="section-icon-teal" />
                <h2 className="section-title">Pricing</h2>
              </div>

              <div className="form-field price-field">
                <label className="field-label">Sale Price ($)</label>
                <Input
                  prefix="$"
                  placeholder="0.00"
                  size="large"
                  className="field-input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <Button size="large" className="action-btn-draft" type="text" icon={<ArrowLeftOutlined />}>
              Save as Draft
            </Button>

            <div className="action-btn-group">
              <Button size="large" className="action-btn-prev">
                Previous
              </Button>
              <Button type="primary" size="large" className="action-btn-next">
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
          { label: 'Popular Categories', href: '#' },
        ]}
        supportLinks={[
          { label: 'Help Center', href: '#' },
          { label: 'Safety Guidelines', href: '#' },
          { label: 'Listing Fees', href: '#' },
          { label: 'Contact Us', href: '#' },
        ]}
      />
    </div>
  );
}
