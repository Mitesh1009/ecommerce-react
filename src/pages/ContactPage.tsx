import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./ContactPage.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Contact form submitted:", values);
    form.resetFields();
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <Title level={1} className="contact-title">
          Contact Us
        </Title>
        <Paragraph className="contact-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </Paragraph>
      </div>

      <Row gutter={[32, 32]} className="contact-content">
        <Col xs={24} md={12}>
          <Card className="contact-form-card">
            <Title level={3}>Send us a Message</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input size="large" placeholder="Your full name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input size="large" placeholder="your.email@example.com" />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input size="large" placeholder="What is this about?" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <div className="contact-info">
            <Title level={3}>Get in Touch</Title>
            <Paragraph>
              Have questions about our products or need support? We're here to
              help!
            </Paragraph>

            <div className="contact-methods">
              <Card className="contact-method-card">
                <MailOutlined className="contact-method-icon" />
                <div>
                  <Title level={5}>Email Us</Title>
                  <Paragraph>info@techstore.com</Paragraph>
                </div>
              </Card>

              <Card className="contact-method-card">
                <PhoneOutlined className="contact-method-icon" />
                <div>
                  <Title level={5}>Call Us</Title>
                  <Paragraph>+1 (555) 123-4567</Paragraph>
                </div>
              </Card>

              <Card className="contact-method-card">
                <EnvironmentOutlined className="contact-method-icon" />
                <div>
                  <Title level={5}>Visit Us</Title>
                  <Paragraph>
                    123 Tech Street
                    <br />
                    Digital City, DC 12345
                  </Paragraph>
                </div>
              </Card>
            </div>

            <div className="business-hours">
              <Title level={4}>Business Hours</Title>
              <Paragraph>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
