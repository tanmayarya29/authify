import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
  category: string,
  quantity: number,
  rating: number,
  reviews: string [],
}

export const defaultProduct:Product = {
  name: "",
  image:"",
  price:0,
  description:"",
  category:"",
  quantity:0,
  rating:4,
  reviews:[],
}

const ProductCard = (product:Product) => {

  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Description: {product.description}</Typography>
        <Typography variant="body2">Category: {product.category}</Typography>
        <Typography variant="body2">Quantity: {product.quantity}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Reviews: {product.reviews}</Typography>

      </CardContent>
      <CardActions>
        <Button color="primary">Edit</Button>
        <Button color="secondary">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
