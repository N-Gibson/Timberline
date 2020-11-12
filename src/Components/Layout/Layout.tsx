import React from "react";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

const Layout = ({ children, active }) => {
  return (
    <>
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
