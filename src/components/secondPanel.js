import cover from "../assets/smokeSinger.jpg";
import styled from "styled-components";
import uncoverLogo from "../assets/Uncovr.png";
import { useState } from "react";
import crowd from "../assets/crowd.svg";
import feedback from "../assets/feedback.svg";
import network from "../assets/network.svg";
import hotornot from "../assets/hotornot.svg";

const MainContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  position: relative;
  @media (min-width: 900px) {
    background-position: 25% 75%;
  }
  @media (max-width: 900px) {
    background-position: center;
    min-height: 100vh;
  }
`;
const InfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  max-width: 710px;
  min-height: 492px;
`;
const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 50%;
  min-width: 200px;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
const Mainline = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
`;
const Subline = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 0;
  width: 80%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
const Title = styled.p`
  margin-bottom: 0;
  justify-self: center;
  font-size: 50px;
  color: #f9c470;
  @media (max-width: 900px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;
const SubTitle = styled.p`
  color: white;
  margin-top: 0;
  justify-self: center;
  font-size: 35px;
  max-width: 50%;

  margin-bottom: 100px;
  @media (max-width: 900px) {
    font-size: 26px;
    max-width: 90%;
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;
const SecondPanel = () => {
  const [getStarted, setGetStarted] = useState(false);
  return (
    <MainContainer>
      <Title>Find Out What People Really Think About Your Music</Title>
      <SubTitle>Kickstart Your Career With Our Tools </SubTitle>
      <InfosContainer>
        <FeatureContainer>
          <Logo src={feedback} />
          <Mainline>Receive detailed feedback</Mainline>
          <Subline> pinpoint exactly how you can improve</Subline>
        </FeatureContainer>
        <FeatureContainer>
          <Logo src={crowd} />
          <Mainline>Find Your Crowd</Mainline>
          <Subline>
            {" "}
            use our detailed analytics to see who vibes with you
          </Subline>
        </FeatureContainer>
        <FeatureContainer>
          <Logo src={network} />
          <Mainline>Expand Your Network</Mainline>
          <Subline>Find like-minded artists to collab with</Subline>
        </FeatureContainer>
        <FeatureContainer>
          <Logo src={hotornot} />
          <Mainline>Hot or Not</Mainline>
          <Subline> Test your songs with a larger audience</Subline>
        </FeatureContainer>
      </InfosContainer>
    </MainContainer>
  );
};

export default SecondPanel;
