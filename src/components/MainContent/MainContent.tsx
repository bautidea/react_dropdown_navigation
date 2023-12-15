import { ReactSVG } from 'react-svg';
import styles from './MainContent.module.css';
import audiophile from '../../assets/images/client-audiophile.svg';
import databiz from '../../assets/images/client-databiz.svg';
import marker from '../../assets/images/client-maker.svg';
import meet from '../../assets/images/client-meet.svg';
import heroDesktop from '../../assets/images/image-hero-desktop.png';
import heroMobile from '../../assets/images/image-hero-mobile.png';

const MainContent = () => {
  return (
    <>
      <div className={styles['block']}>
        <div className={styles['title-block']}>
          <div className={styles['intro-block']}>
            <h1 className={styles['title']}>Make remote work</h1>
            <div className={styles['description']}>
              <p>Get your team in sync, no matter your location.</p>
              <p>
                Streamline processes. create team rituals, and watch
                productivity soar.
              </p>
            </div>
            <button className={styles['btn']}>Learn more</button>
          </div>

          <div className={styles['client-block']}>
            <img src={databiz} />
            <img src={audiophile} />
            <img src={meet} />
            <img src={marker} />
          </div>
        </div>
        <picture className={styles['img-cont']}>
          <source media="(max-width: 991px)" srcSet={heroMobile} />
          <source media="(min-width: 992px)" srcSet={heroDesktop} />
          <img
            src={heroDesktop}
            alt="Image of a standing man holding a notebook"
          />
        </picture>
      </div>
    </>
  );
};

export default MainContent;
