import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import LogInModal from "../LogInModal/LogInModal";
import { ModalNavBar, NavBarItems, Style } from "./style/style";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleNoHover = () => {
    setIsHovering(false);
  };

  const style: { display: string; minWidth: string; textAlign: string } = {
    display: isOpen ? "none" : "block",
    minWidth: "160px",
    textAlign: "center",
  };
  const hoverStyle: {
    display: string;
    minWidth: string;
    textAlign: string;
    cursor: string;
    backgroundColor: string;
    color: string;
  } = {
    display: isOpen ? "none" : "block",
    minWidth: "160px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",
  };
  const navBarItems: ({ name: string; href: string } | undefined)[] =
    router.pathname === "/"
      ? [{ name: "Logo TBC", href: "/" }]
      : [
          { name: "Logo TBC", href: "/" },
          { name: "Home", href: "/" },
          { name: "Another Thing", href: "/" },
          { name: "Different Thing", href: "/" },
          { name: "Another Different Thing", href: "/" },
        ];

  const handleChange = () => {
    setIsShown(true);
  };

  const handleExit = () => {
    setIsShown(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const navBarElements = navBarItems.map((item, index) => {
    return (
      <Link key={index} href={item!.href}>
        <NavBarItems>
          <p>{item?.name}</p>
        </NavBarItems>
      </Link>
    );
  });

  return (
    <Style>
      {navBarElements}
      {router.pathname === "/" ? (
        <div
          style={isHovering ? hoverStyle : style}
          onMouseEnter={handleHover}
          onMouseLeave={handleNoHover}
          onClick={handleOpen}
        >
          <p>Log In / Sign Up</p>
        </div>
      ) : (
        <DropDown
          isShown={isShown}
          handleChange={handleChange}
          handleExit={handleExit}
        />
      )}
      <LogInModal isOpen={isOpen} handleClose={handleClose} />
    </Style>
  );
};

export default NavBar;
