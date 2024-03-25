import "./Header.css";
import Logo from "../Logo/Logo";
import Presentation from "../Presentation/Presentation";

const Header = () => {
  return (
    <header>
      <div className="barre">
        <Logo />
      </div>
      <div className="resto">
        <Presentation />
      </div>
    </header>
  );
};

export default Header;
