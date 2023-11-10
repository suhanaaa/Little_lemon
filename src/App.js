import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="screen">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
