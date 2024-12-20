import { Container, Title, Box } from "@mantine/core";

const HomePage = () => {
  return (
    <Container size="sm" mt="xl" style={{ textAlign: "center" }}>
      <Title align="center" order={1} mb="lg">
        Welcome to Airtribe Buy App
      </Title>

      <Box
        style={{
          height: "200px",
          width: "100%",
          backgroundColor: "#f0f0f0",
          border: "1px solid black",
          borderRadius: "8px",
          alignItems: "center",
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
          color: "#888",
        }}
      >
        Black friday sale: upto 40 % off
      </Box>
    </Container>
  );
};

export default HomePage;
