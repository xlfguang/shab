import styled from "styled-components";
import img6 from "./assets/6-ai.png";

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
