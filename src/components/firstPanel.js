import cover from "../assets/smokeSinger.jpg";
import styled from "styled-components";
import uncoverLogo from "../assets/Uncovr.png";
const MainContainer = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${cover});
  width: 100%;
  height: 100vh;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 900px) {
    background-position: 25% 75%;
  }
  @media (max-width: 900px) {
    background-position: center;
  }
`;
const MainTitle = styled.p`
  color: white;
  margin-top: 0;
  justify-self: center;
  font-size: 60px;
  @media (max-width: 900px) {
    font-size: 35px;
  }
`;
const SubTitle = styled.p`
  color: white;
  margin-top: 0;
  justify-self: center;
  font-size: 35px;
  max-width: 50%;
  @media (max-width: 900px) {
    font-size: 20px;
    max-width: 90%;
  }
`;
const ActionButton = styled.button`
  border-radius: 15px;
  background-color: #ffffff;
  color: black;
  padding: 15px;
  font-size: 20px;
  border: none;
  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  transition: 0.25s;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const NavBar = styled.div`
  height: 40px;
  width: 100%;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: flex-start;
`;
const FirstPanel = () => {
  return (
    <MainContainer>
      <NavBar>
        <img src={uncoverLogo} />
      </NavBar>
      <MainTitle>Unleash Your Music Potential</MainTitle>
      <SubTitle>
        Get curated feedback and market analytics to bring your career to the
        next level
      </SubTitle>
      <ActionButton>Get Started Now</ActionButton>
    </MainContainer>
  );
};

export default FirstPanel;
