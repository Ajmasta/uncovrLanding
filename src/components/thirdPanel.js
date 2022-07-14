import styled from "styled-components";
import phones from "../assets/phones2.svg";
const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-width: 300px;
  flex-wrap: wrap;
`;
const NumberedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-width: 300px;

  @media (min-width: 900px) {
    margin-right: px;
  }
`;
const Number = styled.p`
  border-radius: 50%;
  border: 1px solid #ffffff;
  font-size: 28px;
  color: #ffffff;
  width: 40px;
  height: 40px;
  margin-bottom: 0;
`;
const Mainline = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 0;
  height: 20px;
`;
const Subline = styled.p`
  font-size: 22px;
  color: #ffffff;
  height: 150px;
`;
const MainContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  width: 100%;
  min-height: 50vh;
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
const CallToAction = styled.div`
  width: 80%;
  max-width: 1000px;
  background: linear-gradient(180deg, #fff500 0%, #eba030 100%);
  height: 140px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  width: 90%;
  height: 60%;
  max-height: 61px;

  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputEmail = styled.input`
  border: none;
  background-color: #ffffff;
  &:focus {
    outline: none;
  }
  height: 80%;
  width: 70%;
  max-height: 61px;
  border-radius: 12px;
  margin-left: 20px;
`;
const ActionButton = styled.button`
  background-color: #e92b11;
  font-size: 15px;
  border: none;
  :hover {
    background-color: #f72733;
    cursor: pointer;
  }
  transition: 0.25s;

  width: 30%;
  padding: 15px 0 15px 0;
  color: #ffffff;
  border-radius: 24px;
  margin-right: 10px;
  @media (max-width: 900px) {
    font-size: 12px;
    min-width: 100px;
    padding: 10px 0 10px 0;
  }
`;
const Title = styled.p`
  color: #f9c470;
  justify-self: center;
  font-size: 50px;
  @media (max-width: 900px) {
    font-size: 36px;
    margin-top: 20px;
  }
`;
const ImgContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  max-height: 500px;
`;
const Img = styled.img`
  height: 100%;
  max-height: 400px;
  width: 100%;
`;
const ThirdPanel = () => {
  return (
    <MainContainer>
      <Title>Easy as 1,2,3</Title>
      <NumbersContainer>
        <NumberedContainer>
          <Number>1</Number>
          <Mainline>Create Your Profile</Mainline>
          <Subline>
            Select your favorite genres and artist. Set up your socials to gain
            followers.
          </Subline>
        </NumberedContainer>
        <NumberedContainer>
          <Number>2</Number>
          <Mainline>Upload Your Songs</Mainline>
          <Subline>
            Get listens, get customizable feedback, find new followers{" "}
          </Subline>
        </NumberedContainer>
        <NumberedContainer>
          <Number>3</Number>
          <Mainline>Kickstart Your Career</Mainline>
          <Subline>
            Get detailed analytics to know your crowd, find artists for new
            collabs
          </Subline>
        </NumberedContainer>
      </NumbersContainer>
      <ImgContainer>
        <Img src={phones} />
      </ImgContainer>
      <CallToAction>
        <InputContainer>
          <InputEmail placeholder="plus.zero@uncovr.xyz" />
          <ActionButton>Join the Beta Waitlist</ActionButton>
        </InputContainer>
      </CallToAction>
    </MainContainer>
  );
};

export default ThirdPanel;
