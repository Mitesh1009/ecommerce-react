import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content style={{ marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
