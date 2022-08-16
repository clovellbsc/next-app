import React from "react";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
