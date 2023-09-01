// import { useState } from "react";
// import ProductCard, { Product } from "./components/productCard/ProductCard";
// import { Box, Button, Grid } from "@mui/material";
// import { dummyData } from "./constant/data.json";
// import ProductDialog from "./components/productDialog/ProductDialog";
// import { defaultProduct } from "./default/default";

// const App = () => {
//   const [products, setProducts] = useState<Product[]>(dummyData);
//   const [open, setOpen] = useState(false);
//   const [mode, setMode] = useState<"add" | "edit">("edit");
//   const [selectedProduct, setSelectedProduct] =
//     useState<Product>(defaultProduct);
//   const handleEdit = (product: Product) => {
//     setProducts((prev) => {
//       prev = prev.map((item) => {
//         if (item.id === product.id) {
//           return product;
//         }
//         return item;
//       });
//       return [...prev];
//     });
//   };

//   const handleAdd = (product: Product) => {
//     setProducts((prev) => [...prev, { ...product, id: prev.length + 1 }]);
//   };

//   const handleDelete = (product: Product) => {
//     setProducts((prev) => {
//       prev = prev.filter((item) => item.id !== product.id);
//       return [...prev];
//     });
//   };

//   const productCardProps = {
//     handleDelete,
//     setOpen,
//     setMode,
//     setSelectedProduct,
//   };

//   const dialogProps = {
//     open,
//     setOpen,
//     handleEdit,
//     handleAdd,
//     mode,
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100%",
//         gap: 2,
//       }}
//     >
//       <h1>Products</h1>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => {
//           setOpen(true);
//           setMode("add");
//         }}
//       >
//         Add Product
//       </Button>
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "flex-start",
//           justifyContent: "flex-start",
//         }}
//       >
//         {products.map((item) => (
//           <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
//             <ProductCard product={item} {...productCardProps} />
//           </Grid>
//         ))}
//       </Grid>
//       <ProductDialog product={selectedProduct} {...dialogProps} />
//     </Box>
//   );
// };

// export default App;

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
