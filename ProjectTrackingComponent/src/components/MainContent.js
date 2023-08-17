import { ContentStyle } from "./HomePageStyle";
import DashBoardComponent from "./contents/Dashboard";
import ContentHeading from "./contents/Heading";
import ContentParagraph from "./contents/Paragraph";
import ScheduleComponent from "./contents/Schedule";

const MainContent = () => {
  return (
    <ContentStyle>
      <DashBoardComponent />
      <ContentHeading />
      <ContentParagraph />
      <ScheduleComponent />
    </ContentStyle>
  );
};

export default MainContent;
