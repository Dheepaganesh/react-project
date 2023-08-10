import { styled } from "styled-components";

export const Atag = styled.a`
  color: black;
  margin-left: 63px;
  text-decoration: none;
  font-size: 21px;
  font-weight: 700;
  color: rgb(60, 65, 81);
`;

export const Main = styled.div`
  width: 100%;
  display: grid;
  font-family: "Barlow Condensed", sans-serif;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "head head"
    "left right"
    "left right";
`;
export const Head = styled.div`
  grid-area: head;
  display: flex;
  padding: 60px;
  flex-direction: row;
  justify-content: space-around;
`;

export const LeftContent = styled.div`
  grid-area: left;
  margin-left: 40%;
  margin-top: 50px;
  width: 480px;
`;
export const RightContent = styled.div`
  grid-area: right;
  height: 45px;
  border: none;
  outline: none;
  color: white;
  margin-left: 0%;
  margin-right: 0%;
`;

export const MobileLogo = styled.svg`
  width: 90%;
`;

export const DashBoard = styled.div`
  display: flex;
`;

export const DashBoardPara = styled.p`
  margin-right: 8px;
  color: rgb(193, 193, 197);
`;

export const Button = styled.button`
  background-color: rgb(251, 95, 94);
  outline: none;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 11px;
  font-weight: 700px;
  margin-top: 8px;
  margin-right: 8px;
`;

export const Logo = styled.svg`
  font-size: 32px;
  margin-right: 80px;
  margin-top: 5px;
`;
export const Bars = styled.div`
  margin-left: 190px;
`;

export const NewDiv = styled.div`
width: 50px;
background-color: rgb(32,38,64);
color: white;
font-weight: 700;
padding-top: 2.5px;
height: 25px;
border-radius: 12px;
font-size: 15px;
margin-top: 13px;
margin-right: 7px;
}
`;

export const HeadPara = styled.div`
  text-align: left;
  margin-bottom: 22px;
  font-weight: 700;
  font-size: 30px;
`;

export const SubQuotes = styled.div`
  text-align: left;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const ButtonDivPara = styled.p`
  color: rgb(212, 212, 215);
`;
