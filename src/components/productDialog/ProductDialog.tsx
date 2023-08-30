import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { Product } from "../productCard/ProductCard";
import { useState } from "react";

interface Iprops {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleEdit: (product: Product) => void;
  product: Product;
  mode: "add" | "edit";
  handleAdd: (product: Product) => void;
}

const ProductDialog = (props: Iprops) => {
  const { open, setOpen, product, handleEdit, mode, handleAdd } = props;
  const [productEditState, setProductEditState] = useState(product);
  const { name, image, price, description, category, quantity, rating } =
    productEditState;

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductEditState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <TextField
          name="name"
          label="Name"
          value={name}
          onChange={handleChanges}
        />
        <TextField
          name="image"
          label="Image"
          value={image}
          onChange={handleChanges}
        />
        <TextField
          name="price"
          label="Price"
          value={price}
          onChange={handleChanges}
        />
        <TextField
          name="description"
          label="Description"
          value={description}
          onChange={handleChanges}
        />
        <TextField
          name="category"
          label="Category"
          value={category}
          onChange={handleChanges}
        />
        <TextField
          name="quantity"
          label="Quantity"
          value={quantity}
          onChange={handleChanges}
        />
        <TextField
          name="rating"
          label="Rating"
          value={rating}
          onChange={handleChanges}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={() => setOpen(false)}>Cancel</button>
        <button
          onClick={() => {
            if (mode === "add") {
              handleAdd(productEditState);
            }
            if (mode === "edit") {
              handleEdit(productEditState);
            }
            setOpen(false);
          }}
        >
          Save
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
