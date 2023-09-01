import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { SignInUser } from "../constant/types";
import { defaultSignInUser } from "../constant/default";
import { postLogin } from "../apis/userApi";
import { useNavigate } from "react-router-dom";
import { getDecodedToken } from "../utils/utils";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<SignInUser>(defaultSignInUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    postLogin(credentials)
      .then((res) => {
        localStorage.setItem(
          "access-token-" + credentials.email,
          res.data.accessToken
        );
        console.log(getDecodedToken(credentials.email));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack
      direction="column"
      sx={{
        width: "500px",
      }}
      gap={2}
    >
      <TextField
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleInputChange}
      />
      <TextField
        type="text"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit" onClick={handleLogin}>
        Login
      </Button>
    </Stack>
  );
};

export default LoginPage;
