import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';


 export interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
  category: string,
  quantity: number,
  rating: number,
  reviews:[string],
}

const ProductDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // const products: Product[] = [
  //   { name: 'Product 1', image: 'image-url-1', price: 19.99 },
  //   { name: 'Product 2', image: 'image-url-2', price: 29.99 },
  //   // Add more products here
  // ];

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            
          
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
