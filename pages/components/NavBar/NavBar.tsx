import Link from "next/link";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import { NavBarItems, Style } from "./style/style";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);

  const handleChange = () => {
    setIsShown(!isShown);
  };

  return (
    <Style>
      <NavBarItems>
        <p>
          <Link href="/">Home</Link>
        </p>
      </NavBarItems>
      <NavBarItems>
        <p>
          <Link href="/">Another thing</Link>
        </p>
      </NavBarItems>
      <NavBarItems>
        <p>
          <Link href="/">Different thing</Link>
        </p>
      </NavBarItems>
      <NavBarItems>
        <p>
          <Link href="/">another different thing</Link>
        </p>
      </NavBarItems>
      <DropDown isShown={isShown} handleChange={handleChange} />
    </Style>
  );
};

export default NavBar;
