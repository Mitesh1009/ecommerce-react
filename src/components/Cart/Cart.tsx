import { useSelector, useDispatch } from "react-redux";
import {
  List,
  Button,
  InputNumber,
  Typography,
  Space,
  Empty,
  Divider,
} from "antd";
import { DeleteOutlined, ShoppingOutlined } from "@ant-design/icons";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../store/cartSlice";
import "./Cart.css";

const { Title, Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state: any) => state.cart
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <Empty
          image={<ShoppingOutlined className="cart-empty-icon" />}
          description={
            <Text className="cart-empty-text">Your cart is empty</Text>
          }
        />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Title level={4} className="cart-title">
          Shopping Cart ({totalQuantity} items)
        </Title>
        <Button
          type="text"
          danger
          onClick={handleClearCart}
          className="cart-clear-button"
        >
          Clear All
        </Button>
      </div>

      <List
        className="cart-list"
        dataSource={items}
        renderItem={(item: any) => (
          <List.Item className="cart-item">
            <div className="cart-item-content">
              <div className="cart-item-image">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </div>

              <div className="cart-item-details">
                <Title level={5} className="cart-item-name">
                  {item.name}
                </Title>
                <Text className="cart-item-price">${item.price}</Text>

                <div className="cart-item-actions">
                  <Space align="center">
                    <Text className="cart-quantity-label">Qty:</Text>
                    <InputNumber
                      min={1}
                      max={10}
                      value={item.quantity}
                      onChange={(value) =>
                        handleUpdateQuantity(item.id, value || 1)
                      }
                      className="cart-quantity-input"
                      size="small"
                    />
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveItem(item.id)}
                      className="cart-remove-button"
                      size="small"
                    />
                  </Space>
                </div>

                <div className="cart-item-total">
                  <Text strong className="cart-item-total-price">
                    ${item.totalPrice}
                  </Text>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />

      <Divider className="cart-divider" />

      <div className="cart-summary">
        <div className="cart-summary-row">
          <Text className="cart-summary-label">Subtotal:</Text>
          <Text strong className="cart-summary-value">
            ${totalAmount}
          </Text>
        </div>
        <div className="cart-summary-row">
          <Text className="cart-summary-label">Shipping:</Text>
          <Text className="cart-summary-value">Free</Text>
        </div>
        <div className="cart-summary-row cart-total-row">
          <Title level={4} className="cart-total-label">
            Total:
          </Title>
          <Title level={4} className="cart-total-value">
            ${totalAmount}
          </Title>
        </div>
      </div>

      <div className="cart-actions">
        <Button
          type="primary"
          size="large"
          block
          className="cart-checkout-button"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
