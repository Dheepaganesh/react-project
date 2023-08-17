import { MainPage } from "./HomePageStyle";
import ProfileIcon from "../icons/ProfileIcon";
import NavigationBar from "./NavigationBar";
import MainContent from "./MainContent";

const HomePage = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <MainPage>
        <ProfileIcon />
        <NavigationBar />
        <MainContent />
      </MainPage>
    </div>
  );
};

export default HomePage;
