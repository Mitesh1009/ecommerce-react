import { useState } from "react";
import { Layout, Menu, Badge, Drawer, Button } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart.tsx";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.totalQuantity);

  const menuItems = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "about",
      label: <Link to="/about">About Us</Link>,
    },
    {
      key: "contact",
      label: <Link to="/contact">Contact Us</Link>,
    },
  ];

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  const hideMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <>
      <Header className="navbar-header">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <h2 className="navbar-brand">TechStore</h2>
            </Link>
          </div>

          <div className="navbar-menu-desktop">
            <Menu
              mode="horizontal"
              items={menuItems}
              className="navbar-menu"
              theme="light"
            />
          </div>

          <div className="navbar-actions">
            <Badge count={cartItems} className="navbar-cart-badge">
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                onClick={showCart}
                className="navbar-cart-button"
                size="large"
              />
            </Badge>

            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={showMobileMenu}
              className="navbar-mobile-menu-button"
              size="large"
            />
          </div>
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={hideMobileMenu}
        open={mobileMenuVisible}
        className="navbar-mobile-drawer"
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={hideMobileMenu}
          className="navbar-mobile-menu"
        />
      </Drawer>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={hideCart}
        open={cartVisible}
        width={400}
        className="navbar-cart-drawer"
      >
        <Cart />
      </Drawer>
    </>
  );
};

export default Navbar;
