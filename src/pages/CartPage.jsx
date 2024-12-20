import { useState } from "react";
import {
  Button,
  Title,
  Container,
  Table,
  Text,
  NumberInput,
  Center,
} from "@mantine/core";

const CartPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (p_value, item) => p_value + item.price * item.quantity, 0);

  return (
    <Container>
      <Title order={2}>Your Cart</Title>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <NumberInput
                      value={item.quantity}
                      onChange={(value) => updateQuantity(item.id, value)}
                      min={1}
                    />
                  </td>
                  <td style={{paddingLeft:10}}>Rs{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button color="red" onClick={() => handleRemove(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Title order={3} mt="lg">
            Total: Rs {totalPrice.toFixed(2)}
          </Title>

          <Button fullWidth mt="lg" variant="gradient">
            Continue to Buy 🛒
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
