import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography, Space, Breadcrumb } from "antd";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products } from "../utils/products";
import "./ProductsPage.css";

const { Title, Text } = Typography;

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryProducts = products[category as keyof typeof products] || [];
  const categoryTitle =
    category === "mobile"
      ? "Mobile Phones"
      : category === "tv"
      ? "Smart TVs"
      : category === "tablet"
      ? "Tablets"
      : "Products";

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleViewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
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
          <Space>
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
          </Space>
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

  return (
    <div className="products-page">
      <div className="products-page-content">
        <Breadcrumb className="products-breadcrumb">
          <Breadcrumb.Item>
            <HomeOutlined />
            <span
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", marginLeft: 8 }}
            >
              Home
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{categoryTitle}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="products-header">
          <Title level={1} className="products-title">
            {categoryTitle}
          </Title>
          <Text className="products-subtitle">
            Showing {categoryProducts.length} products
          </Text>
        </div>

        <div className="products-grid">
          {categoryProducts.map(renderProductCard)}
        </div>

        {categoryProducts.length === 0 && (
          <div className="no-products">
            <Title level={3}>No products found</Title>
            <Button type="primary" onClick={() => navigate("/")}>
              Go Back Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
