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
import { useRouter } from "next/router";

type Props = {
  handleChange: () => void;
  extended: boolean;
};

const SideBar = ({ handleChange, extended }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const navBarItems = [
    {
      name: "Flights",
      href: `/trips/${id}/flights/`,
      icon: <FlightTakeoff />,
    },
    {
      name: "Accommodation",
      href: `/trips/${id}/accommodation/`,
      icon: <Hotel />,
    },
    { name: "Transfers", href: `/trips/${id}/transfers/`, icon: <Commute /> },
    {
      name: "Parking",
      href: `/trips/${id}/parking/`,
      icon: <LocalParkingRounded />,
    },
    { name: "Visas", href: `/trips/${id}/visas/`, icon: <VpnLockOutlined /> },
    {
      name: "Covid",
      href: `/trips/${id}/covid/`,
      icon: <CoronavirusOutlined />,
    },
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
