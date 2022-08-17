import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
