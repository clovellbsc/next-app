import Link from "next/link";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import { NavBarItems, Style } from "./style/style";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);

  const navBarItems = [
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

  const navBarElements = navBarItems.map((item, index) => {
    return (
      <Link key={index} href={item.href}>
        <NavBarItems>
          <p>{item.name}</p>
        </NavBarItems>
      </Link>
    );
  });

  return (
    <Style>
      {navBarElements}
      <DropDown
        isShown={isShown}
        handleChange={handleChange}
        handleExit={handleExit}
      />
    </Style>
  );
};

export default NavBar;
