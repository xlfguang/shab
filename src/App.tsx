import {
  BackgroundBox,
  BackgroundBox5,
  Bc5box,
  Btn,
  CardBox,
  CardBox5,
  DogBox,
  FlexBox,
  Footer,
  FooterContent,
  FooterLogo,
  Header,
  Logo,
} from "./style";
import "./App.css";
import headerImg from "./assets/1.png";
import logo from "./assets/logo.png";
import bc2 from "./assets/bc2.png";
import bc3 from "./assets/3-ai.png";
import bc4 from "./assets/4.jpeg";
// import bc3 from "./assets/bc3.png";
// import bc4 from "./assets/bc4.png";
import bc5 from "./assets/bc5.png";
import dog from "./assets/dog.png";
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
              <a href="https://t.me/BabyShib_Shibarium1" target="_black">
                TELEGRAM
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
      <BackgroundBox imgSrc={bc2}>
        <CardBox
          style={{
            width: "90%",
          }}
        >
          <DogBox>
            <img className="dog" src={dog} alt="" />
            <div className="dog-text">
              BabyShib is not affiliated with the official SHIB team,we are a
              group of blockchain enthusiasts with mature technology and
              marketing capabilities. This summer, we are thrilled to join the
              ShibArmy . We aim to make remarkable contributions to the
              Shibarium ecosystem. The BabyShib Token is set to become one of
              this year's hottest topics.
            </div>
          </DogBox>
        </CardBox>
      </BackgroundBox>
      <BackgroundBox imgSrc={bc3}></BackgroundBox>
      {/* <img src={bc3} alt="" /> */}
      {/* <img src={bc4} alt="" /> */}

      <BackgroundBox imgSrc={bc4}></BackgroundBox>
      <BackgroundBox imgSrc={bc5}>
        <BackgroundBox5>
          <div className="logobox">
            <img src={logo} alt="" />
          </div>
          <CardBox5>
            <Bc5box>
              <p className="mb-10">road map</p>
              <p>DEX Avatar</p>
              <p>AVE Avatar </p>
              <p className="mb-10">Massive Marketing</p>
              <p>Listed on CMC & CG </p>
              <p className="mb-10"> with 2000 holders </p>
              <p>Formation of</p>
              <p>BabyShibArmy</p>
              <p className="mb-10">with 4000 holders</p>
              <p>Exchange listing </p>
              <p>with 6000 holders.</p>
            </Bc5box>
          </CardBox5>
        </BackgroundBox5>
      </BackgroundBox>

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
