import {
  NavbarImage,
  Navigator,
  Options,
  LoginOption,
  LinkOption,
} from "./HomePageStyle";
import MobileIcon from "../icons/MobileIcon";
import MenuIcon from "../icons/OptionIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login, Logout } from "./store/action";

const NavigationBar = () => {
  const InputValue = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  const LoginUser = () => {
    console.log(InputValue);
    dispatch(Login());
  };

  const LogoutUser = () => {
    console.log(InputValue);
    dispatch(Logout());
  };

  return (
    <NavbarImage>
      <Navigator>
        <LinkOption to="/">PRODUCT</LinkOption>
        <LinkOption to="/filter">FILTER(Producted)</LinkOption>
        <Options href="./">PRICING</Options>
        <LoginOption href="./">.</LoginOption>
        {InputValue ? (
          <LoginOption onClick={LogoutUser}>LOGOUT</LoginOption>
        ) : (
          <LoginOption href="./" onClick={LoginUser}>
            LOGIN
          </LoginOption>
        )}
        <MenuIcon />
      </Navigator>
      <MobileIcon />
    </NavbarImage>
  );
};

export default NavigationBar;
