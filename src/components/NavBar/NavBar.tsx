import logo from '../../assets/images/logo.svg';
import styles from './NavBar.module.css';
import { useEffect, useState } from 'react';
import NavBarDisplayOptions from './NavBarDisplayOptions';

// Function to obtain the current Dimension of the window.
const getCurrentDimension = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const NavBar = () => {
  // Initializing state to hold current width and height.
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // Event listener for the resize event, this will be used to display or not
  // the 'display options' svg.
  useEffect(() => {
    // Function to update Dimensions.
    const updateDimensions = () => {
      console.log(`old dimensions ${screenSize.width}`);
      setScreenSize(getCurrentDimension());
      console.log(`new dimensions ${screenSize.width}`);
    };

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [screenSize]);

  return (
    <div className={styles['nav-bar']}>
      <img className={styles['logo-img']} src={logo} />
      <NavBarDisplayOptions />
    </div>
  );
};

export default NavBar;
