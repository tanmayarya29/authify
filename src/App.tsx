import { useState } from "react";
import ProductCard, { Product } from "./components/productCard/ProductCard";
import { Box, Button, Grid } from "@mui/material";
import { dummyData } from "./constant/data.json";
import ProductDialog from "./components/productDialog/ProductDialog";
import { defaultProduct } from "./default/default";

const App = () => {
  const [products, setProducts] = useState<Product[]>(dummyData);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("edit");
  const [selectedProduct, setSelectedProduct] =
    useState<Product>(defaultProduct);
  const handleEdit = (product: Product) => {
    setProducts((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index === -1) return prev;
      prev[index] = product;
      return [...prev];
    });
  };

  const handleAdd = (product: Product) => {
    setProducts((prev) => [...prev, { ...product, id: prev.length + 1 }]);
  };

  const handleDelete = (product: Product) => {
    setProducts((prev) => {
      prev = prev.filter((item) => item.id !== product.id);
      return [...prev];
    });
  };

  const productCardProps = {
    handleDelete,
    setOpen,
    setMode,
    setSelectedProduct,
  };

  const dialogProps = {
    open,
    setOpen,
    handleEdit,
    handleAdd,
    mode,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 2,
      }}
    >
      <h1>Products</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
          setMode("add");
        }}
      >
        Add Product
      </Button>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid key={item.id} item xs={4}>
            <ProductCard product={item} {...productCardProps} />
          </Grid>
        ))}
      </Grid>
      <ProductDialog product={selectedProduct} {...dialogProps} />
    </Box>
  );
};

export default App;
