import { notifications } from "@mantine/notifications";
import { Link, useNavigate } from "react-router-dom";
import { Container, Group, Button, Title } from "@mantine/core";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    notifications.show({
      title: "You have logged out successfully",
      color: "green",
    });
    navigate("/");
  };

  return (
    <Container
      fluid
      px="md"
      py="sm"
      style={{ borderBottom: "1px solid black" }}
    >
      <Group position="apart">
        <Title>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Airtribe Buy
          </Link>
        </Title>

        <Group>
          <Button
            component={Link}
            to="/products"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            View Products
          </Button>

          {isAuthenticated ? (
            <>
              <Button
                component={Link}
                to="/cart"
                variant="gradient"
                gradient={{ from: "orange", to: "red" }}
              >
                Cart
              </Button>
              <Button
                onClick={handleLogout}
                variant="gradient"
                gradient={{ from: "red", to: "orange" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="gradient"
                gradient={{ from: "teal", to: "lime" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="gradient"
                gradient={{ from: "blue", to: "purple" }}
              >
                Register
              </Button>
            </>
          )}
        </Group>
      </Group>
    </Container>
  );
};

export default Header;
