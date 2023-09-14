import React, { useEffect, useState } from "react";
import { TextField, Button, Stack, FormControl } from "@mui/material";
import { getProductById, postProducts, putProducts } from "../apis/productApi";
import { Product } from "../constant/types";
import { useParams } from "react-router-dom";

const ProductAddOrEditPage: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    _id: "",
    name: "",
    image: "",
    price: 0,
    description: "",
    category: "",
    quantity: 0,
    rating: 4,
  });
  const [isEdit, setIsEdit] = useState(false);

  const params = useParams();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setProduct({ ...product, [fieldName]: fieldValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit) {
      putProducts(product._id, product);
    } else postProducts(product);
  };

  useEffect(() => {
    if (params?.id) {
      setIsEdit(true);

      getProductById(params?.id || "")
        .then((res) => {
          setProduct(res?.data?.data?.product);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <FormControl>
      <h2>Product Add or Edit Page</h2>
      <Stack gap={2} direction="column">
        {isEdit && (
          <TextField
            label="Id"
            variant="outlined"
            fullWidth
            name="id"
            value={product._id}
            onChange={handleInputChange}
            disabled
          />
        )}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          name="image"
          value={product.image}
          onChange={handleInputChange}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <TextField
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          fullWidth
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />
        <TextField
          label="Rating"
          variant="outlined"
          fullWidth
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
};

export default ProductAddOrEditPage;
