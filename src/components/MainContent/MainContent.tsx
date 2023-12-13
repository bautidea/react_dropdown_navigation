import { ReactSVG } from 'react-svg';
import styles from './MainContent.module.css';
import audiophile from '../../assets/images/client-audiophile.svg';
import databiz from '../../assets/images/client-databiz.svg';
import marker from '../../assets/images/client-maker.svg';
import meet from '../../assets/images/client-meet.svg';
import heroDesktop from '../../assets/images/image-hero-desktop.png';
import heromobile from '../../assets/images/image-hero-mobile.png';

const MainContent = () => {
  return (
    <>
      <div className={styles['block']}>
        <div className={styles['title-block']}>
          <h1 className={styles['title']}>Make remote work</h1>
          <p>Get your team in sync, no matter your location.</p>
          <p>
            Streamline processes. create team rituals, and watch productivity
            soar.
          </p>
          <button className={styles['btn']}>Learn More</button>

          <div className={styles['client-block']}>
            <ReactSVG src={databiz} />
            <ReactSVG src={audiophile} />
            <ReactSVG src={meet} />
            <ReactSVG src={marker} />
          </div>
        </div>
        <div className={styles['image-block']}>
          <img src={heroDesktop} />
        </div>
      </div>
    </>
  );
};

export default MainContent;
