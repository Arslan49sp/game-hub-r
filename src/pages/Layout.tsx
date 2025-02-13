import { Card } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Card padding={5}>
        <Outlet />
      </Card>
    </>
  );
};

export default Layout;
