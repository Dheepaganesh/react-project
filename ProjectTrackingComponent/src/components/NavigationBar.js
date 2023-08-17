import { NavbarImage, Navigator, Options, LoginOption } from "./HomePageStyle";
import MobileIcon from "../icons/MobileIcon";
import MenuIcon from "../icons/OptionIcon";

const NavigationBar = () => {
  return (
    <NavbarImage>
      <Navigator>
        <Options href="./">PRODUCT</Options>
        <Options href="./">FEATURES</Options>
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
