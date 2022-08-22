import { useState } from "react";
import { Form, Input, Modal, ModalMain } from "./style/style";

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
        <Modal onClick={handleClose}>
          <ModalMain onClick={(e) => e.stopPropagation()}>
            <div>
              <h1>Sign Up</h1>
            </div>

            <p>
              Already have an account?{" "}
              <button onClick={handleIsNotSignUp}>Log In Here</button>
            </p>
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <Input
                type="text"
                name="firstname"
                placeholder="Your first name.."
              ></Input>
              <Input
                type="text"
                name="lastname"
                placeholder="Your last name.."
              ></Input>
              <Input
                type="text"
                name="email"
                placeholder="Your email.."
              ></Input>
              <Input
                type="password"
                name="password"
                placeholder="Your password.."
              ></Input>
            </Form>

            <div>
              <button>Sign In</button>
              <button onClick={handleClose}>Close</button>
            </div>
          </ModalMain>{" "}
        </Modal>
      ) : (
        <Modal onClick={handleClose}>
          <ModalMain onClick={(e) => e.stopPropagation()}>
            <div>
              <h1>Log In</h1>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <button onClick={handleIsSignUp}>Log In Here</button>
              </p>
              <Form style={{ display: "flex", flexDirection: "column" }}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your email.."
                ></Input>
                <Input
                  type="password"
                  name="password"
                  placeholder="Your password.."
                ></Input>
              </Form>
            </div>

            <div>
              <button>Sign In</button>
              <button onClick={handleClose}>Close</button>
            </div>
          </ModalMain>{" "}
        </Modal>
      )}
    </div>
  );
};

export default LogInModal;
