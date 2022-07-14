import cover from "../assets/smokeSinger.jpg";
import styled from "styled-components";
import uncoverLogo from "../assets/Uncovr.png";
import { useState } from "react";
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
  position: relative;
  @media (min-width: 900px) {
    background-position: 25% 75%;
  }
  @media (max-width: 900px) {
    background-position: center;
    height: 100vh;
  }
`;
export const MainTitle = styled.p`
  color: white;
  margin-top: 0;
  justify-self: center;
  font-size: 60px;
  @media (max-width: 900px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.p`
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
  background-color: #e92b11;
  color: #ffffff;
  padding: 12px;
  font-size: 15px;
  border: none;
  :hover {
    background-color: red;
    cursor: pointer;
  }
  transition: 0.25s;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const NavBar = styled.div`
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: flex-start;
`;
const EmailInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
  margin-bottom: 10px;
  background-color: #eeeeee;
  &:focus {
    outline: none;
  }
`;
const CallToAction = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
  max-width: 300px;
  bottom: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 20px;
`;
const BetaTitle = styled.h3`
  font-size: 26px;
  color: #000000;
  margin-top: 0;
`;
const ErrorMessage = styled.p`
  color: black;
  margin: 2px;
  margin-bottom: 10px;
`;
const FirstPanel = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignUp = () => {
    if (!input.includes("@")) setErrorMessage("Wrong email format");
  };
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
      <CallToAction>
        <BetaTitle>Beta coming soon</BetaTitle>
        <EmailInput
          placeholder="Enter your email address"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <ActionButton onClick={handleSignUp}>Get Notified first!</ActionButton>
      </CallToAction>
    </MainContainer>
  );
};

export default FirstPanel;
