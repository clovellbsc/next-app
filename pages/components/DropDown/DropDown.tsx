import { NavBarItems } from "../NavBar/style/style";
import { DropDownControl, Style } from "./styles/style";

type Props = {
  isShown: boolean;
  handleChange: () => void;
  handleExit: () => void;
};

const DropDown = ({ isShown, handleChange, handleExit }: Props) => {
  return (
    <Style onMouseEnter={handleChange} onMouseLeave={handleExit}>
      <DropDownControl>
        <p>Drop Down</p>
      </DropDownControl>
      <div
        style={{
          display: isShown ? "flex" : "none",
          flexDirection: "column",
          marginTop: "50px",
          position: "absolute",
          backgroundColor: "black",
          minWidth: "160px",
          boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
          zIndex: 1,
        }}
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
