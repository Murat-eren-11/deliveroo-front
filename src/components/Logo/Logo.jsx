import "./Logo.css";
import DeliverooLogo from "../../assets/logo-teal.svg";

const Logo = () => {
  return (
    <div className="barlogo">
      <img src={DeliverooLogo} className="logo" alt="" />
    </div>
  );
};

export default Logo;
