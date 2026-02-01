import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Input, Select, Button, Upload, message } from "antd";
import {
  InfoCircleOutlined,
  SettingOutlined,
  CameraOutlined,
  CreditCardOutlined,
  InboxOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Header from "../../components/header";
import Footer from "../../components/footer";
import StepProgress from "../../components/StepProgress";
import { usePostings } from "../../contexts/PostingContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNotifications } from "../../contexts/useNotifications";
import { POSTING_STATUS } from "../../constants/postingStatus";
import "./index.css";

const { Dragger } = Upload;

export default function PostBike() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addPosting } = usePostings();
  const { addNotification } = useNotifications();
  const sellerId = user?.id ?? user?.email ?? null;
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);

  // Form field states
  const [bikeName, setBikeName] = useState("");
  const [brand, setBrand] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [frameSize, setFrameSize] = useState("");
  const [frameMaterial, setFrameMaterial] = useState(undefined);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImageDataUrls, setUploadedImageDataUrls] = useState([]);
  const [price, setPrice] = useState("");

  // Section IDs for scroll detection
  const sectionIds = [
    "basic-info",
    "technical-specs",
    "photos-videos",
    "pricing",
  ];

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

    // Photos/Videos: exactly 6 photos required
    if (uploadedFiles.length >= 6) {
      completed.push(2);
    }

    // Pricing: price entered
    if (price.trim()) {
      completed.push(3);
    }

    setCompletedSections(completed);
  }, [
    bikeName,
    brand,
    category,
    frameSize,
    frameMaterial,
    uploadedFiles,
    price,
  ]);

  // Scroll detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

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
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const readAllImageFilesAsDataUrls = (fileList) => {
    const imageFiles = fileList
      .map((f) => f.originFileObj)
      .filter((file) => file?.type?.startsWith("image/"));
    if (imageFiles.length === 0) {
      setUploadedImageDataUrls([]);
      return;
    }
    let loaded = 0;
    const results = [];
    imageFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        results[index] = reader.result;
        loaded += 1;
        if (loaded === imageFiles.length) {
          setUploadedImageDataUrls(results.filter(Boolean));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const uploadProps = {
    name: "file",
    multiple: true,
    maxCount: 6,
    listType: "picture-card",
    fileList: uploadedFiles,
    accept: "image/*",
    customRequest({ file, onSuccess }) {
      setTimeout(() => onSuccess({ url: "" }), 0);
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        setUploadedFiles(info.fileList);
        readAllImageFilesAsDataUrls(info.fileList);
      } else if (status === "uploading" && info.fileList.length > 0) {
        setUploadedFiles(info.fileList);
        readAllImageFilesAsDataUrls(info.fileList);
      } else if (status === "error") {
        message.error(`${info.file.name} upload failed.`);
      }
    },
    onRemove(file) {
      setUploadedFiles((prev) => {
        const next = prev.filter((f) => f.uid !== file.uid);
        if (next.length === 0) setUploadedImageDataUrls([]);
        else readAllImageFilesAsDataUrls(next);
        return next;
      });
    },
  };

  const buildPayload = () => ({
    bikeName: bikeName.trim() || "Untitled Listing",
    brand,
    category,
    frameSize,
    frameMaterial,
    price: price.trim(),
    imageUrl:
      uploadedImageDataUrls[0] ||
      uploadedFiles[0]?.thumbUrl ||
      uploadedFiles[0]?.response?.url ||
      null,
    imageUrls: uploadedImageDataUrls.length > 0 ? uploadedImageDataUrls : null,
  });

  const handleSaveDraft = () => {
    if (uploadedFiles.length < 6) {
      message.warning("Please upload exactly 6 photos before saving.");
      return;
    }
    addPosting(buildPayload(), POSTING_STATUS.DRAFT, sellerId);
    addNotification({
      title: "Draft saved",
      message: "Your listing was saved. View it in My Postings.",
      type: "info",
    });
    message.success("Draft saved. View in My Postings.");
    navigate("/postings");
  };

  const handlePublish = () => {
    if (!bikeName.trim() || !brand || !category || !price.trim()) {
      message.warning("Please fill in basic info and price.");
      return;
    }
    if (uploadedFiles.length < 6) {
      message.warning("Please upload exactly 6 photos before publishing.");
      return;
    }
    addPosting(buildPayload(), POSTING_STATUS.PENDING_REVIEW, sellerId);
    addNotification({
      title: "Listing submitted",
      message:
        "Your listing is now pending review. It will appear on Marketplace and Home.",
      type: "success",
    });
    message.success("Listing submitted. View in My Postings.");
    navigate("/postings");
  };

  return (
    <div className="post-bike-container">
      <Header />

      <main className="post-main-content">
        {/* Breadcrumb */}
        <Breadcrumb
          className="post-breadcrumb"
          separator=">"
          items={[{ title: "Marketplace" }, { title: "Sell Your Bike" }]}
        />

        {/* Page Header */}
        <div className="post-header">
          <h1 className="post-title">Post a Bike for Sale</h1>
          <p className="post-subtitle">
            Reach over 50,000 cycling enthusiasts worldwide
          </p>
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
                      { value: "specialized", label: "Specialized" },
                      { value: "trek", label: "Trek" },
                      { value: "giant", label: "Giant" },
                      { value: "cannondale", label: "Cannondale" },
                      { value: "bianchi", label: "Bianchi" },
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
                      { value: "road", label: "Road Bike" },
                      { value: "mountain", label: "Mountain Bike" },
                      { value: "hybrid", label: "Hybrid" },
                      { value: "electric", label: "Electric" },
                      { value: "folding", label: "Folding" },
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
                      { value: "carbon", label: "Carbon Fiber" },
                      { value: "aluminum", label: "Aluminum" },
                      { value: "steel", label: "Steel" },
                      { value: "titanium", label: "Titanium" },
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
                <span className="upload-counter">
                  {uploadedFiles.length}/6 photos
                  {uploadedFiles.length < 6 && " (6 required)"}
                </span>
              </div>

              <Dragger {...uploadProps} className="upload-dragger">
                <p className="upload-icon">
                  <InboxOutlined style={{ fontSize: 48, color: "#1ABC9C" }} />
                </p>
                <p className="upload-text">Drag & drop your bike photos here</p>
                <p className="upload-hint">
                  Supports High-Quality JPG, PNG, and MP4 (Max 50MB)
                </p>
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
            <Button
              size="large"
              className="action-btn-draft"
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={handleSaveDraft}
            >
              Save as Draft
            </Button>

            <div className="action-btn-group">
              <Button
                type="primary"
                size="large"
                className="action-btn-publish"
                onClick={handlePublish}
                style={{
                  backgroundColor: "#16a34a",
                  borderColor: "#16a34a",
                }}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer
        exploreLinks={[
          { label: "Featured Road Bikes", href: "#" },
          { label: "New MTB Arrivals", href: "#" },
          { label: "Certified Pre-owned", href: "#" },
          { label: "Popular Categories", href: "#" },
        ]}
        supportLinks={[
          { label: "Help Center", href: "#" },
          { label: "Safety Guidelines", href: "#" },
          { label: "Listing Fees", href: "#" },
          { label: "Contact Us", href: "#" },
        ]}
      />
    </div>
  );
}
