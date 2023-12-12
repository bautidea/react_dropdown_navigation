import { DropdownProps, Option } from './FeaturesDropdown';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import { ReactSVG } from 'react-svg';

const options: Option[] = [
  { value: 0, label: 'History' },
  { value: 1, label: 'Our Team' },
  { value: 2, label: 'Blog' },
];

const CompanyDropdown = ({
  isVisible,
  handleMouseOver,
  handleMouseOut,
}: DropdownProps) => {
  return (
    <div
      className="nav-option"
      onMouseOver={(e) => {
        e.preventDefault();
        handleMouseOver();
      }}
    >
      <div className="nav-label">
        <span className="dropdown-name">Company</span>
        <ReactSVG className="dropdown-icon" src={arrowUp} />
      </div>
      <ul
        className={`dropdown-options company ${isVisible ? 'show' : ''}`}
        onMouseOut={(e) => {
          e.preventDefault();
          handleMouseOut();
        }}
      >
        {options.map((o) => (
          <li className="list-item" key={o.value.toString()}>
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDropdown;
