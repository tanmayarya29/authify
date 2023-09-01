import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Stack } from "@mui/material";

const Layout = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={2}
      justifyContent="center"
    >
      <Header />
      <Outlet />
    </Stack>
  );
};

export default Layout;
