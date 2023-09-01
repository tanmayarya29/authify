import React, { useState } from "react";
import { SignUpUser } from "../constant/types";
import { defaultSignUpUser } from "../constant/default";
import {
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import userApi from "../apis/userApi";

const RegistrationPage = () => {
  const [user, setUser] = useState<SignUpUser>(defaultSignUpUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputSelect = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    console.log(await userApi.postSignUp(user));
  };

  return (
    <Stack
      direction="column"
      sx={{
        width: "500px",
      }}
      gap={2}
    >
      <Stack direction="row" gap={2}>
        <TextField
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleInputChange}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <TextField
          type="text"
          name="country_code"
          value={user.country_code}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          name="phone_number"
          value={user.phone_number}
          onChange={handleInputChange}
        />
      </Stack>
      <Select name="role" value={user.role} onChange={handleInputSelect}>
        <MenuItem value="super_admin">Super admin</MenuItem>
        <MenuItem value="admin">admin</MenuItem>
        <MenuItem value="user">user</MenuItem>
      </Select>
      <TextField
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <TextField
        type="text"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit" onClick={handleSignUp}>
        Sign Up
      </Button>
    </Stack>
  );
};

export default RegistrationPage;
