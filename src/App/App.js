import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navBar/Navbar";
import { Home } from "../scenes/home/Home";
import { Footer } from "../components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Footer/>
    </>
  );
}

export { App };
