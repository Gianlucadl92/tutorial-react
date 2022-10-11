import Links from "./Links";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className="container">
        <Router>
          <nav className="link">
            <Link className="no-decoration" to="/">
              Home
            </Link>
            <Link className="no-decoration" to="/about">
              About
            </Link>
            <Link className="no-decoration" to="/profile">
              Profile
            </Link>
          </nav>
          <Links />
        </Router>
      </section>
    </div>
  );
}

export default App;
