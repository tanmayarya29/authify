import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductListingPage = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Button onClick={() => navigate("sign-in")}>Login</Button>
      <Button onClick={() => navigate("sign-up")}>Sign up</Button>
    </Stack>
  );
};

export default ProductListingPage;
