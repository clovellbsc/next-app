import Link from "next/link";
import { Style } from "./style/style";

const NavBar = () => {
  return (
    <Style>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/">Another thing</Link>
      </p>

      <p>
        <Link href="/">Different thing</Link>
      </p>

      <p>
        <Link href="/">another different thing</Link>
      </p>
    </Style>
  );
};

export default NavBar;
