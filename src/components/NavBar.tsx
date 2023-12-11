import CompanyDropdown from './CompanyDropdown';
import FeaturesDropdown from './FeaturesDropdown';
import logo from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <img className="logo-img" src={logo} />
          <FeaturesDropdown />
          <CompanyDropdown />
          <span className="nav-label nav-label-left">Careers</span>
          <span className="nav-label nav-label-left">About</span>
        </div>

        <div className="nav-right">
          <button className="btn">Login</button>
          <button className="btn btn-register">Register</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
