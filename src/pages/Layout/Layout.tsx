import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
