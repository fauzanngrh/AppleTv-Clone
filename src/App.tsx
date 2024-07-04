import { Header } from "./components/header";
import { Container } from "./components/container";
import "./style.css";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <div>
          <Container>3col layout</Container>
        </div>
        <div>
          <Container>carousel with posters</Container>
        </div>
      </main>
      ;
    </>
  );
}

export default App;
