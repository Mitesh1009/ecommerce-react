"use client";

import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  InputNumber,
  message,
} from "antd";
import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products } from "../utils/products";
import { useState } from "react";
import "./ProductDetailPage.css";

const { Title, Text, Paragraph } = Typography;

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const allProducts = [...products.mobile, ...products.tv, ...products.tablet];

  const product = allProducts.find((p) => p.id === Number.parseInt(id || "0"));

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="product-not-found">
          <Title level={2}>Product Not Found</Title>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    message.success(`${product.name} added to cart!`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleGoBack}
          className="back-button"
          size="large"
        >
          Back
        </Button>

        <Row gutter={[32, 32]} className="product-detail-row">
          <Col xs={24} md={12}>
            <div className="product-image-container">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="product-detail-image"
              />
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div className="product-info">
              <Title level={1} className="product-title">
                {product.name}
              </Title>
              <Title level={2} className="product-price">
                ${product.price}
              </Title>

              <Paragraph className="product-description">
                {product.description}
              </Paragraph>

              <Card title="Specifications" className="specifications-card">
                <div className="specifications-list">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="specification-item">
                      <Text strong>{spec.split(":")[0]}:</Text>
                      <Text>{spec.split(":")[1]}</Text>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="purchase-section">
                <Space
                  direction="vertical"
                  size="large"
                  className="purchase-controls"
                >
                  <div className="quantity-section">
                    <Text strong>Quantity:</Text>
                    <InputNumber
                      min={1}
                      max={10}
                      value={quantity}
                      onChange={(value) => setQuantity(value || 1)}
                      size="large"
                    />
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    onClick={handleAddToCart}
                    className="add-to-cart-button"
                    block
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailPage;
