import { useState } from "react";
import { Button, Typography, Badge } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { products } from "../../utils/products";
import { addToCart } from "../../store/cartSlice";
import "./HomePage.css";

const { Title, Text } = Typography;

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleViewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleViewAll = (category: string) => {
    navigate(`/products/${category}`);
  };

  const renderProductCard = (product: any) => (
    <div className="product-card" key={product.id}>
      <div className="product-image-container">
        <img
          alt={product.name}
          src={product.image || "/placeholder.svg"}
          className="product-image"
        />
        <div className="product-overlay">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => handleViewProduct(product.id)}
            className="product-action-button"
          >
            View
          </Button>
          <Button
            type="default"
            icon={<ShoppingCartOutlined />}
            onClick={() => handleAddToCart(product)}
            className="product-action-button"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">${product.price}</span>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-btn"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );

  const tabItems = [
    {
      key: "mobile",
      label: (
        <span className="tab-label">
          📱 Mobile Phones
          <Badge count={products.mobile.length} className="tab-badge" />
        </span>
      ),
      children: (
        <div>
          <h2 className="section-title">Latest Mobile Phones</h2>
          <Text className="section-subtitle">
            Discover the newest smartphones with cutting-edge technology
          </Text>
          <div className="products-grid">
            {products.mobile.slice(0, 10).map(renderProductCard)}
          </div>
          <div className="view-all-section">
            <Button
              type="primary"
              size="large"
              onClick={() => handleViewAll("mobile")}
              className="view-all-btn"
            >
              View All Mobile Phones ({products.mobile.length})
            </Button>
          </div>
        </div>
      ),
    },
    {
      key: "tv",
      label: (
        <span className="tab-label">
          📺 TVs
          <Badge count={products.tv.length} className="tab-badge" />
        </span>
      ),
      children: (
        <div>
          <h2 className="section-title">Premium Smart TVs</h2>
          <Text className="section-subtitle">
            Experience entertainment like never before with our TV collection
          </Text>
          <div className="products-grid">
            {products.tv.slice(0, 10).map(renderProductCard)}
          </div>
          <div className="view-all-section">
            <Button
              type="primary"
              size="large"
              onClick={() => handleViewAll("tv")}
              className="view-all-btn"
            >
              View All TVs ({products.tv.length})
            </Button>
          </div>
        </div>
      ),
    },
    {
      key: "tablet",
      label: (
        <span className="tab-label">
          📱 Tablets
          <Badge count={products.tablet.length} className="tab-badge" />
        </span>
      ),
      children: (
        <div>
          <h2 className="section-title">Powerful Tablets</h2>
          <Text className="section-subtitle">
            Perfect for work, creativity, and entertainment on the go
          </Text>
          <div className="products-grid">
            {products.tablet.slice(0, 10).map(renderProductCard)}
          </div>
          <div className="view-all-section">
            <Button
              type="primary"
              size="large"
              onClick={() => handleViewAll("tablet")}
              className="view-all-btn"
            >
              View All Tablets ({products.tablet.length})
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <Title level={1} className="hero-title">
            Welcome to TechStore
          </Title>
          <Text className="hero-subtitle">
            Discover the latest in mobile phones, smart TVs, and tablets.
            Premium quality, competitive prices.
          </Text>
        </div>
        <div className="hero-image">
          <img src="/modern-tech-devices-showcase.jpg" alt="Tech devices" />
        </div>
      </div>

      <div className="products-section">
        <h1 className="main-title">Our Products</h1>
        <Text className="main-subtitle">
          Choose from our wide range of premium tech products
        </Text>

        <div className="products-tabs">
          <div className="tab-header">
            {tabItems.map((tab) => (
              <div
                key={tab.key}
                className={`tab-label-item ${
                  activeTab === tab.key ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <div className="tab-content">
            {tabItems.find((tab) => tab.key === activeTab)?.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
