import { Card, Container, Title, Image, Text, Button, Center } from "@mantine/core";
import { useParams } from "react-router-dom";
import useFetch from "../api/useFetch";

const ProductDetail = () => {
  const { productId } = useParams();

  const API = `https://fakestoreapi.com/products/${productId}`;
  // oldName : newName
  const { data: product, loading, error } = useFetch(API);

  if (loading) return <p> Loading ⏳...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <Card shadow="sm" >
        <Card.Section >
          <Image style={{ inlineSize: 'fit-content' , margin: 'auto' }}  src={product.image} alt={product.title} height={200} />
        </Card.Section>

        <Title order={2} mt="lg">
          {product.title}
        </Title>
        <Text>{product.description}</Text>

        <Text size="lg" weight={700} mt="md">
          Rs. {product.price}
        </Text>

        <Button
          onClick={() => handleAddToCart(product)}
          variant="gradient"
          gradient={{ from: "purple", to: "pink" }}
          fullWidth
          mt="md"
          radius="md"
        >
          Add to Cart
        </Button>
        
      </Card>
    </Container>
  );
};

export default ProductDetail;
