import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-menu.svg';
import closeMenu from '../../assets/images/icon-close-menu.svg';
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

interface Props {
  showNavOptions: boolean;
  handleMenuClick: () => void;
}

const NavBar = ({ showNavOptions, handleMenuClick }: Props) => {
  // Initializing state to hold current width and height.
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // Event listener for the resize event, this will be used to display or not
  // the 'display options' svg.
  useEffect(() => {
    // Function to update Dimensions.
    const updateDimensions = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [screenSize]);

  return (
    <div className={styles['nav-bar']}>
      <img className={styles['logo-img']} src={logo} />

      {screenSize.width <= 991 && !showNavOptions && (
        <img
          className={styles['menu-img']}
          src={menu}
          onClick={() => handleMenuClick()}
        />
      )}

      {screenSize.width <= 991 && showNavOptions && (
        <img
          className={styles['menu-img']}
          src={closeMenu}
          onClick={() => handleMenuClick()}
        />
      )}

      {(screenSize.width > 991 || showNavOptions) && <NavBarDisplayOptions />}
    </div>
  );
};

export default NavBar;
