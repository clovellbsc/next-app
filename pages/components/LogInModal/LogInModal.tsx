import { useState } from "react";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const LogInModal = ({ handleClose, isOpen }: Props) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleIsSignUp = () => {
    setIsSignUp(true);
  };

  const handleIsNotSignUp = () => {
    setIsSignUp(false);
  };

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {isSignUp ? (
        <div>
          <div>Sign Up</div>
          <div>
            <p>
              Already have an account?{" "}
              <button onClick={handleIsNotSignUp}>Log In Here</button>
            </p>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                name="firstname"
                placeholder="Your first name.."
              ></input>
              <input
                type="text"
                name="lastname"
                placeholder="Your last name.."
              ></input>
              <input
                type="text"
                name="email"
                placeholder="Your email.."
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Your password.."
              ></input>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div>Log In</div>
          <div>
            <p>
              Already have an account?{" "}
              <button onClick={handleIsSignUp}>Log In Here</button>
            </p>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                name="email"
                placeholder="Your email.."
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Your password.."
              ></input>
            </form>
          </div>
        </div>
      )}

      <div>
        <button>Sign In</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default LogInModal;
