import React from "react";
import NavBar from "../NavBar/NavBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
