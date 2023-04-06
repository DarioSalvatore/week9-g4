import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MySection from "./Components/MySection";
import MyGallery from "./Components/MyGallery";
import MyGallery1 from "./Components/MyGallery1";
import MyGallery2 from "./Components/MyGallery2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MySection />
              <MyGallery />
              <MyGallery1 />
            </>
          }
        />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>

      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
