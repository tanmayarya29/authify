import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Typography
        sx={{
          backgroundColor: "#eee",
          width: "100%",
          cursor: "pointer",
        }}
        variant="h1"
        onClick={() => navigate("/")}
      >
        Authify
      </Typography>
    </Stack>
  );
};

export default Header;
