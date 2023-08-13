import styled from "styled-components";
import img6 from "./assets/6-ai.png";
interface BackgroundBox {
  imgSrc: string;
}
interface FlexBoxProps {
  direction?: string;
  justify?: string;
  align?: string;
}
export const Header = styled.div`
  width: 100%;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  max-width: 2560px;
  min-height: 88px;
  padding: 16px 4em;
  h1 {
    font-size: 22px;
    margin-left: 5px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    font-weight: 600;
    padding: 12px 24px;
  }
`;
export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, rgb(252, 190, 201));
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 80px;
  }
`;
export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
`;

export const Btn = styled.div`
  min-height: 48px;
  min-width: 120px;
  outline-offset: 0px;
  color: #fff;
  text-align: center;
  letter-spacing: -0.02em;
  background-color: #fc9136;
  border-radius: 48px;
  outline: 2px solid rgba(0, 0, 0, 0);
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
`;
export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 198px;
  background: url(${img6}) no-repeat center;
  padding: 50px 50px;
  box-sizing: border-box;
  h1 {
    font-size: 22px;
    margin-left: 10px;
  }
  .title {
    font-size: 22px;
    margin-left: 10px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    font-weight: 600;
    padding: 12px 24px;
  }
  p {
    font-size: 22px;
    font-weight: 600;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;
export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
export const BackgroundBox = styled.div<BackgroundBox>`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.imgSrc}) no-repeat center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardBox = styled.div`
  /* 给我写一个带边框阴影的卡片 */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 60px;
  box-shadow: 0px 0px 60px rgb(230 164 25);
  overflow: hidden;
`;

export const DogBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .dog {
    width: 65%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .dog-text {
    padding: 20px;
    font-size: 26px;
    font-weight: 600;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Bc5box = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
`;
export const BackgroundBox5 = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .logobox {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const CardBox5 = styled(CardBox)`
  width: "40%";
`;
