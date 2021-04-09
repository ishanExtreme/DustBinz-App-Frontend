import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    let user = jwtDecode(authToken);
    //Note-> if change here change in App.js too
    //TODO: Remove hardcore string
    user.image = `https://dustbinz-app.s3.ap-south-1.amazonaws.com/${user.imageKey}`
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logOut };
};
