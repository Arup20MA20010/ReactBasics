import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: flex,
    justifyContent: center,
  },
  text: {
    color: "red",
  },
});

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div {...stylex.props(styles.container, styles.text)}>
      {user ? `Welcome ${user.username}` : "Please Login"}
    </div>
  );
}

export default Profile;
