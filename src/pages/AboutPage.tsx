"use client";

import { Typography, Row, Col, Card, Button } from "antd";
import {
  TeamOutlined,
  TrophyOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page-container">
      <div className="about-hero">
        <div className="about-hero-content">
          <Title level={1} className="about-title">
            About TechStore
          </Title>
          <Paragraph className="about-subtitle">
            Your trusted partner in technology since 2020. We bring you the
            latest and greatest in consumer electronics.
          </Paragraph>
        </div>
        <div className="about-hero-image">
          <img src="/tech-store-team.jpg" alt="Our team" />
        </div>
      </div>

      <div className="about-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card className="about-card">
              <TeamOutlined className="about-icon" />
              <Title level={3}>Our Team</Title>
              <Paragraph>
                A passionate team of tech enthusiasts dedicated to bringing you
                the best products and service experience.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="about-card">
              <TrophyOutlined className="about-icon" />
              <Title level={3}>Quality Products</Title>
              <Paragraph>
                We carefully curate our product selection to ensure you get only
                the highest quality electronics.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="about-card">
              <CustomerServiceOutlined className="about-icon" />
              <Title level={3}>Customer First</Title>
              <Paragraph>
                Your satisfaction is our priority. We provide excellent customer
                service and support.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <div className="about-story">
          <Title level={2}>Our Story</Title>
          <Paragraph>
            Founded in 2020, TechStore began as a small startup with a big
            vision: to make cutting-edge technology accessible to everyone. What
            started as a passion project has grown into a trusted destination
            for tech enthusiasts and everyday consumers alike.
          </Paragraph>
          <Paragraph>
            We believe that technology should enhance lives, not complicate
            them. That's why we focus on products that combine innovation with
            user-friendly design, ensuring that our customers get the best value
            for their investment.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
