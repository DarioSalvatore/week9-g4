import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MySection from "./Components/MySection";
import MyGallery from "./Components/MyGallery";
import MyGallery1 from "./Components/MyGallery1";
import MyGallery2 from "./Components/MyGallery2";

function App() {
  return (
    <>
      <MyNav />
      <MySection />

      <Container style={{ marginBottom: "40px" }}>
        <h3 style={{ marginBottom: "35px", color: "white" }}>
          Popolar on Netflix:
        </h3>
        <MyGallery />
        <h3 style={{ marginTop: "45px", marginBottom: "35px", color: "white" }}>
          Best Seller:
        </h3>
        <MyGallery1 />
        <h3 style={{ marginTop: "45px", marginBottom: "35px", color: "white" }}>
          Kids Loved:
        </h3>
        <MyGallery2 />
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
