import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../components/navBar/Navbar";
import { Home } from "../scenes/home/Home";


function App() {
  return (
    <Router>
      <NavBar />
      <Home/>
    </Router>
  );
}

export { App };
