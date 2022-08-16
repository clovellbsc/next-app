import { NavBarItems } from "../NavBar/style/style";
import { DropDownControl, Style } from "./styles/style";

type Props = {
  isShown: boolean;
  handleChange: () => void;
};

const DropDown = ({ isShown, handleChange }: Props) => {
  return (
    <Style onMouseEnter={handleChange} onMouseLeave={handleChange}>
      <DropDownControl>
        <p>Drop Down</p>
      </DropDownControl>
      <div
        style={{ display: isShown ? "flex" : "none", flexDirection: "column" }}
      >
        <NavBarItems>
          <p>Something</p>
        </NavBarItems>
        <NavBarItems>
          <p>Settings</p>
        </NavBarItems>
        <NavBarItems>
          <p>Log Out</p>
        </NavBarItems>
      </div>
    </Style>
  );
};

export default DropDown;
