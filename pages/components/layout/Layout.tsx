import { useRouter } from "next/router";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [extended, setExtended] = useState(false);
  const router = useRouter();

  const handleChange = () => {
    setExtended(!extended);
  };

  const handleClose = () => {
    setExtended(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {router.pathname.includes("/trips") && (
          <SideBar handleChange={handleChange} extended={extended} />
        )}
        <main style={{ width: "100%" }} onClick={handleClose}>
          {children}
        </main>
      </div>
    </div>
  );
}
