import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter className="footer-container">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} className="footer-title">
                TechStore
              </Title>
              <Text className="footer-description">
                Your trusted destination for the latest technology products.
                Quality, innovation, and customer satisfaction are our
                priorities.
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                Quick Links
              </Title>
              <div className="footer-links">
                <Link href="/" className="footer-link">
                  Home
                </Link>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
                <Link href="#" className="footer-link">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                Categories
              </Title>
              <div className="footer-links">
                <Link href="/products/mobile" className="footer-link">
                  Mobile Phones
                </Link>
                <Link href="/products/tv" className="footer-link">
                  Smart TVs
                </Link>
                <Link href="/products/tablet" className="footer-link">
                  Tablets
                </Link>
                <Link href="#" className="footer-link">
                  Accessories
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                Contact Info
              </Title>
              <div className="footer-contact">
                <Text className="footer-contact-item">
                  📧 info@techstore.com
                </Text>
                <Text className="footer-contact-item">
                  📞 +1 (555) 123-4567
                </Text>
                <Text className="footer-contact-item">
                  📍 123 Tech Street, Digital City
                </Text>
              </div>

              <div className="footer-social">
                <Title level={5} className="footer-section-title">
                  Follow Us
                </Title>
                <Space size="large">
                  <FacebookOutlined className="footer-social-icon" />
                  <TwitterOutlined className="footer-social-icon" />
                  <InstagramOutlined className="footer-social-icon" />
                  <LinkedinOutlined className="footer-social-icon" />
                </Space>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Text className="footer-copyright">
            © 2024 TechStore. All rights reserved. Built with React & Ant
            Design.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
