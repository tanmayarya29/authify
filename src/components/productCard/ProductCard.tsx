import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../constant/types";
import { deleteProduct } from "../../apis/productApi";
import { useNavigate } from "react-router-dom";

interface Iprops {
  product: Product;
  // handleDelete: (product: Product) => void;
  // setOpen: (open: boolean) => void;
  // setSelectedProduct: (product: Product) => void;
  // setMode: (mode: "add" | "edit") => void;
}

const ProductCard = (props: Iprops) => {
  const navigate = useNavigate();
  const {
    product,
    // handleDelete, setOpen, setSelectedProduct, setMode
  } = props;
  const { _id, name, image, price, description, category, quantity, rating } =
    product;

  const handleDelete = () => {
    deleteProduct(`${_id}`);
  };

  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img src={image} alt={name} />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="body2">{category}</Typography>
          <Typography variant="body2">{quantity}</Typography>
          <Typography variant="body2">{rating}</Typography>
          <Typography variant="body2">{price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            onClick={() => {
              navigate(`edit-product/${_id}`);
            }}
          >
            Edit
          </Button>
          <Button color="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
