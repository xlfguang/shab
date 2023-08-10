import {
  Btn,
  FlexBox,
  Footer,
  FooterContent,
  FooterLogo,
  Header,
  Logo,
} from "./style";
import "./App.css";
import headerImg from "./assets/1.png";
import img2 from "./assets/2-ai.png";
import img3 from "./assets/3-ai.png";
import img4 from "./assets/4.jpeg";
import img5 from "./assets/5.jpeg";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <header>
        <img className="headerImg" src={headerImg} alt="" />
        <Header>
          <FlexBox justify={"space-between"}>
            <FlexBox>
              <Logo>
                <img src={logo} alt="" />
              </Logo>
              <h1>BABYSHIB TOKEN</h1>
            </FlexBox>
            <FlexBox>
              <a href="https://shibaswap.com/#/swap" target="_black">
                SHIBSWAP
              </a>
              <a href="https://twitter.com/BabyShibarium" target="_black">
                TWITTER
              </a>
              <a href="https://t.me/BabyShib_Shibarium" target="_black">
                TEREGRAM
              </a>
            </FlexBox>
            <Btn
              onClick={() => {
                window.open("https://docs.shibatoken.com/");
              }}
            >
              SHIBPEDIA
            </Btn>
          </FlexBox>
        </Header>
      </header>
      <img className="img2" src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <Footer>
        <FooterContent>
          <FooterLogo>
            <FlexBox>
              <Logo>
                <img src={logo} alt="" />
              </Logo>
              <h1>BABYSHIB TOKEN</h1>
            </FlexBox>
            <p>BabyShib is the first memecoin on the</p>
            <p> Shibarium network.</p>
          </FooterLogo>
          <FlexBox direction="column">
            <p className="title">Friendly Links</p>
            <FlexBox>
              <a href="">ShibaSwap DEX</a>
              <a href="">Shiba lun Blog</a>
            </FlexBox>
          </FlexBox>
        </FooterContent>
      </Footer>
    </>
  );
}

export default App;
