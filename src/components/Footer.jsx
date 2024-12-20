import { Container, Center, Text } from "@mantine/core";

const Footer = () => {
  return (
    <Container
      fluid
      px="md"
      py="sm"
      style={{ borderBottom: "1px solid black" }}
    >
      <Center>
        <Text size="sm">
          © {new Date().getFullYear()} Airtribe App. All rights reserved.
        </Text>
      </Center>
    </Container>
  );
};

export default Footer;
