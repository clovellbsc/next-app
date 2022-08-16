import { NavBarItems } from "../NavBar/style/style";
import { DropDownControl, DropDownItems, Style } from "./styles/style";

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
          // boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
          zIndex: 1,
        }}
      >
        <DropDownItems>
          <p>Something</p>
        </DropDownItems>
        <DropDownItems>
          <p>Settings</p>
        </DropDownItems>
        <DropDownItems>
          <p>Log Out</p>
        </DropDownItems>
      </div>
    </Style>
  );
};

export default DropDown;
