import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { SignInUser } from "../types/types";
import { defaultSignInUser } from "../default/default";
import userApi from "../apis/userApi";
import { redirect } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState<SignInUser>(defaultSignInUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    userApi
      .postLogin(credentials)
      .then((res) => {
        console.log(res);
        redirect("/");
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
