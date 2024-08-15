import { Link } from "react-router-dom";
import Translate from "./Translate.jsx";

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">AboutUs</Link>
          </li>
          <li>
            <Translate />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
