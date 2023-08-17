import { styled } from "styled-components";

export const MainPage = styled.div`
  width: 100%;
  display: grid;
  font-family: "Barlow Condensed", sans-serif;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "logo navcontent"
    "left left";

  @media (max-width: 375px) {
    width: 100%;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "logo navcontent"
      "left left"
      "left left";
  }
`;

export const ContentStyle = styled.div`
  grid-area: left;
  margin-top: -110px;
  margin-left: 10%;
  width: 480px;

  @media (max-width: 375px) {
    width: 375px;
    margin-top: 2%;
  }
`;

export const MobileLogo = styled.svg`
  width: 90%;
`;

export const DashBoard = styled.div`
  display: flex;

  @media (max-width: 375px) {
    margin-top: 10%;
  }
`;

export const DashBoardPara = styled.p`
  margin-right: 8px;
  color: rgb(193, 193, 197);

  @media (max-width: 375px) {
    font-size: 23px;
    font-weight: 700;
    margin-right: 12px;
  }
`;

export const Button = styled.button`
  background-color: rgb(251, 95, 94);
  outline: none;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 11px;
  font-weight: 700;
  margin-top: 8px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    width: 200px;
    margin-top: 17px;
    margin-right: 15px;
  }
`;

export const Logo = styled.svg`
  font-size: 32px;
  width: 280px;
  margin-right: 80px;
  margin-top: 15%;
  margin-left: 26.3%;
  position: relative;

  @media (max-width: 375px) {
    margin-top: 15%;
  }
`;

export const Options = styled.div`
  margin-left: 75px;
  font-size: 19px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const LoginOption = styled.div`
  margin-left: 75px;
  font-size: 19px;
  font-weight: 700;
  color: rgb(137, 142, 152);

  @media (max-width: 375px) {
    display: none;
  }
`;

export const MonoGraph = styled.div`
width: 50px;
background-color: rgb(32,38,64);
color: white;
font-weight: 700;
padding-top: 2.5px;
height: 25px;
border-radius: 12px;
font-size: 15px;
text-align:center;
margin-top: 13px;
margin-right: 7px;

@media (max-width: 375px) {
  width:90px;
  height: 25px;
  margin-top: 26px;
  margin-right: 15px;
}


}
`;

export const HeadParagraph = styled.div`
  text-align: left;
  margin-bottom: 22px;
  font-weight: 700;
  font-size: 30px;

  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

export const SubTitle = styled.div`
  text-align: left;
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const ButtonDivPara = styled.p`
  color: rgb(212, 212, 215);
  margin-left: 6px;
  letter-spacing: 5px;

  @media (max-width: 375px) {
    font-size: 22px;
  }
`;

export const Navigator = styled.nav`
  display: flex;
  margin-top: 7%;
  margin-bottom: 23%;
  flex-direction: row;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 6%;

  @media(max-wdith:375px){
    display: flex;
    margin-top: 7%;
    margin-bottom: 23%;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 6%;
}
  }
`;

export const MenuStyle = styled.svg`
  display: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 375px) {
    display: flex;
    outline: none;
    margin-top: 30%;
    margin-right: 30px;
    width: 70px;
  }
`;

export const UnorderList = styled.ul`
  display: none;

  @media (max-width: 375px) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    border-radius: 3px;
    background-color: white;
    list-style-type: none;
    margin-left: -6%;
  }
`;

export const ListItem = styled.li`
  &:hover {
    color: lightgreen;
  }
`;

export const NavbarImage = styled.div`
  grid-area: navcontent;
  background-color: rgb(238, 242, 245);
  width: 645px;
  margin-left: 25%;
  height: 400px;
  border-radius: 0px 0px 0px 37px;

  @media (max-width: 375px) {
    rid-area: navcontent;
    background-color: rgb(238, 242, 245);
    width: 380px;
    margin-left: -33%;
    height: 650px;
    border-radius: 0px 0px 0px 37px;
  }
`;

export const GadgetIcon = styled.svg`
  margin-left: -13%;

  @media (max-width: 375px) {
    width: 540px;
    margin-left: -42%;
    margin-top: -7%;
  }
`;
