import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;