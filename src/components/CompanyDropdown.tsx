import { Option } from './FeaturesDropdown';
import arrowDown from '../assets/images/icon-arrow-down.svg';

const options: Option[] = [
  { value: 0, label: 'History' },
  { value: 1, label: 'Our Team' },
  { value: 2, label: 'Blog' },
];

const CompanyDropdown = () => {
  return (
    <div className="nav-option">
      <div className="nav-label">
        <span className="dropdown-name">Company</span>
        <img className="dropdown-icon" src={arrowDown} />
      </div>
      <ul className="dropdown-options">
        {options.map((o) => (
          <li key={o.value.toString()}>{o.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDropdown;
