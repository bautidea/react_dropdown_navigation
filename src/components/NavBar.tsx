import CompanyDropdown from './CompanyDropdown';
import FeaturesDropdown from './FeaturesDropdown';
import logo from '../assets/images/logo.svg';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <ReactSVG className="logo-img" src={logo} />
          <FeaturesDropdown
            isVisible={isVisible}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
          <CompanyDropdown
            isVisible={isVisible}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
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
