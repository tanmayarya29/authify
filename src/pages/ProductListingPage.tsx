import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../constant/types";
import { postLogOut, postRegenerateAuthToken } from "../apis/userApi";
import { getProducts } from "../apis/productApi";
import { getToken } from "../utils/utils";
import ProductCard from "../components/productCard/ProductCard";

const ProductListingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const email = "john@example.com";
  useEffect(() => {
    getProducts(getToken(email))
      .then((res) => {
        setProducts(res?.data?.data?.products);
      })
      .catch(() => {
        setProducts([]);
      });
  }, []);

  const handleSignOut = (email: string) => {
    postLogOut(email)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("access-token-" + email);
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegenerateToken = (email: string) => {
    postRegenerateAuthToken(email)
      .then((res) => {
        console.log(res);
        localStorage.setItem("access-token-" + email, res?.data?.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack>
      <Button onClick={() => navigate("sign-in")}>Login</Button>
      <Button onClick={() => navigate("sign-up")}>Sign up</Button>
      <Button onClick={() => handleSignOut(email)}>Sign out</Button>
      <Button onClick={() => handleRegenerateToken(email)}>
        Regenerate token
      </Button>
      <Button onClick={() => navigate("add-product")}>Add Product</Button>
      <Stack>
        {products?.map((product: Product) => {
          return <ProductCard product={product} />;
        })}
      </Stack>
    </Stack>
  );
};

export default ProductListingPage;
