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

const NavigationBar = () => {
  return (
    <NavbarImage>
      <Navigator>
        <LinkOption to="/">PRODUCT</LinkOption>
        <LinkOption to="/filter">FILTER(Producted)</LinkOption>
        <Options href="./">PRICING</Options>
        <LoginOption href="./">.</LoginOption>
        <LoginOption href="./">LOGIN</LoginOption>
        <MenuIcon />
      </Navigator>
      <MobileIcon />
    </NavbarImage>
  );
};

export default NavigationBar;
