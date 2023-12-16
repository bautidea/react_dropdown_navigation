import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-menu.svg';
import closeMenu from '../../assets/images/icon-close-menu.svg';
import styles from './NavBar.module.css';
import NavBarDisplayOptions from './NavBarDisplayOptions';

interface Props {
  showNavOptions: boolean;
  handleMenuClick: () => void;
  screenSize: { width: number; height: number };
}

const NavBar = ({ showNavOptions, handleMenuClick, screenSize }: Props) => {
  return (
    <nav className={styles['nav-bar']}>
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
          className={`${styles['menu-img']} ${styles['cancel']}`}
          src={closeMenu}
          onClick={() => handleMenuClick()}
        />
      )}

      {(screenSize.width > 991 || showNavOptions) && <NavBarDisplayOptions />}
    </nav>
  );
};

export default NavBar;
