import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, TextInput, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // either username or pass is empty
    if (!username || !password) {
      notifications.show({
        title: "please fill",
        color: "red",
      });
      return;
    }

    // fetch from local storage and convert into JSON (serailization)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // processing
    users.push({ username, password });

    // save into local storage and convert into string (deserailization)
    localStorage.setItem("users", JSON.stringify(users));

    notifications.show({
      title: "registration successfull",
      color: "green",
    });
    navigate("/login");
  };

  return (
    <Container size="xs" mt="xl">
      <Title align="center" order={2} mb="lg">
        Register
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
      <Button fullWidth mt="lg" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
};

export default Register;
