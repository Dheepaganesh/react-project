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
import { Login } from "./store/action";

const NavigationBar = () => {
  const InputValue = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  const Display = () => {
    dispatch(Login());
    console.log(InputValue);
  };
  return (
    <NavbarImage>
      <Navigator>
        <LinkOption to="/">PRODUCT</LinkOption>
        <LinkOption to="/filter">FILTER(Producted)</LinkOption>
        <Options href="./">PRICING</Options>
        <LoginOption href="./">.</LoginOption>
        <LoginOption href="./" onClick={Display}>
          LOGIN
        </LoginOption>
        <MenuIcon />
      </Navigator>
      <MobileIcon />
    </NavbarImage>
  );
};

export default NavigationBar;
