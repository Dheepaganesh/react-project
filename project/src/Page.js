import { styled } from "styled-components";
import {
  Atag,
  Main,
  Head,
  Logo,
  LeftContent,
  RightContent,
  DashBoard,
  DashBoardPara,
  Button,
  Bars,
  NewDiv,
  HeadPara,
  ButtonDiv,
  SubQuotes,
  ButtonDivPara,
} from "./PageStyle";
import Mobile from "./Mobile";

const Page = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <Main>
        <Head>
          <div>
            <Logo xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <g fill="#323334" fill-rule="evenodd">
                <path d="M0 32V.241h23.041zM31.15 32V.241h-4.411L17.48 13.158zM3.645 32l11.854-15.879L27.353 32z" />
              </g>
            </Logo>
          </div>
          <Bars>
            <Atag href="">PRODUCT</Atag>
            <Atag href="">FEATURES</Atag>
            <Atag href="">PRICING</Atag>
            <Atag href="">LOGIN</Atag>
          </Bars>
        </Head>
        <LeftContent>
          <DashBoard>
            <NewDiv>NEW</NewDiv>
            <DashBoardPara>MONOGRAPH</DashBoardPara>
            <DashBoardPara>DASHBOARD</DashBoardPara>
          </DashBoard>
          <HeadPara>
            <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          </HeadPara>
          <SubQuotes>
            <p>
              Project planning and time tracking <br /> for agile teams
            </p>
          </SubQuotes>
          <ButtonDiv>
            <Button>SCHEDULE A DEMO</Button>
            <ButtonDivPara>TO SEE A PREVIEW</ButtonDivPara>
          </ButtonDiv>
        </LeftContent>
        <RightContent>
          <Mobile />
        </RightContent>
      </Main>
    </div>
  );
};

export default Page;
