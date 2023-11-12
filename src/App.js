import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import BookingPage from "./components/BookingPage/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="screen">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              path="/booking"
              element={
                <>
                  <BookingPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />

                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
