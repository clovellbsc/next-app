import Link from "next/link";
import { SideBarItems } from "./styles/style";
import {
  FlightTakeoff,
  Hotel,
  Commute,
  LocalParkingRounded,
  VpnLockOutlined,
  CoronavirusOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  const navBarItems = [
    { name: "Flights", href: "/", icon: <FlightTakeoff /> },
    { name: "Accommodation", href: "/", icon: <Hotel /> },
    { name: "Transfers", href: "/", icon: <Commute /> },
    { name: "Parking", href: "/", icon: <LocalParkingRounded /> },
    { name: "Visas", href: "/", icon: <VpnLockOutlined /> },
    { name: "Covid", href: "/", icon: <CoronavirusOutlined /> },
  ];

  const navBarElements = navBarItems.map((item, index) => {
    return (
      <Link key={index} href={item.href}>
        <SideBarItems>
          {extended ? <p>{item.name}</p> : <p>{item.icon}</p>}
        </SideBarItems>
      </Link>
    );
  });

  const handleChange = () => {
    setExtended(!extended);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
        width: "fit-content",
        minHeight: "100vh",
        alignItems: "center",
        textAlign: "center",
        paddingRight: "10px",
        paddingLeft: "10px",
      }}
    >
      <div onClick={handleChange} style={{ width: "100%", cursor: "pointer" }}>
        <p>Open</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {navBarElements}
      </div>
    </div>
  );
};

export default SideBar;
