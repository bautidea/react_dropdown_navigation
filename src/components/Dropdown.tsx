import { useState } from 'react';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import { ReactSVG } from 'react-svg';

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

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="nav-option"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-label">
        <span className="dropdown-name">{dropdownName}</span>
        <ReactSVG
          className="dropdown-icon"
          src={isVisible ? arrowDown : arrowUp}
        />
      </div>

      <ul className={`dropdown-options ${isVisible ? 'show' : ''}`}>
        {options.map((o) => (
          <li className="list-item" key={o.value.toString()}>
            {iconMapper ? <ReactSVG src={iconMapper[o.label]} /> : ''}
            <span>{o.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};