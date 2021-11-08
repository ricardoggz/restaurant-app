import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../components/navBar/Navbar";
import { Home } from "../scenes/home/Home";
import { Footer } from "../components/footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <Footer />
    </Router>
  );
}

export { App };
