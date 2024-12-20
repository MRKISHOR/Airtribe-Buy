import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { Container, Title, TextInput, Button } from "@mantine/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // fetch from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // processing: check
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    // token -> user is active and logged in.
    if (user) {
      localStorage.setItem("token", username);
      notifications.show({
        title: "Login successfull!!",
        color: "green",
      });
      navigate("/");
    } else {
      notifications.show({
        title: "Invalid username or password",
        color: "red",
      });
    }
  };

  return (
    <Container size="xs" mt="xl">
      <Title align="center" order={2} mb="lg">
        Login
      </Title>
      <TextInput
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextInput
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button fullWidth mt="lg" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
