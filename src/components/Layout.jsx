// Layout.js
import React from "react";
import Header from "./Header.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
