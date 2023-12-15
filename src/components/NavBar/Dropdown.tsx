import { useEffect, useRef, useState } from 'react';
import arrowUp from '../../assets/images/icon-arrow-up.svg';
import arrowDown from '../../assets/images/icon-arrow-down.svg';
import { ReactSVG } from 'react-svg';
import styles from './NavBar.module.css';

export interface Option {
  value: number;
  label: string;
}

interface Props {
  dropdownName: string;
  options: Option[];
  iconMapper?: { [key: string]: string };
}

export const Dropdown = ({ dropdownName, options, iconMapper }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={styles['nav-option']}
      onClick={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={dropDownRef}
    >
      <div className={styles['nav-label']}>
        <span className={styles['dropdown-name']}>{dropdownName}</span>
        <ReactSVG
          className={styles['dropdown-icon']}
          src={isVisible ? arrowDown : arrowUp}
        />
      </div>
      <ul
        className={`${styles['dropdown-options']} ${
          isVisible ? styles.show : ''
        }`}
      >
        {options.map((o) => (
          <li className={styles['list-item']} key={o.value.toString()}>
            {iconMapper ? <ReactSVG src={iconMapper[o.label]} /> : ''}
            <span>{o.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
