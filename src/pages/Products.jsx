import { useState } from "react";
import useFetch from "../api/useFetch";
import ProductCard from "../components/ProductCard";
import { Pagination, SimpleGrid } from "@mantine/core";
import { notifications } from "@mantine/notifications";

const Products = () => {
  const API = "https://fakestoreapi.com/products";

  const { data, loading, error } = useFetch(API);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginatedData = data
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === product.id);

    // if found, increase quantity
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    notifications.show({
      title: "cart Updated",
      message: `${product.title} has been added to your cart`,
      color: "green",
    });
  };

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      
      <SimpleGrid cols={4} spacing="lg">
        {paginatedData.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </SimpleGrid>

      <Pagination
        total={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
