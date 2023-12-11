import { Option } from './FeaturesDropdown';
import arrowUp from '../assets/images/icon-arrow-up.svg';

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
        <img className="dropdown-icon" src={arrowUp} />
      </div>
      <ul className="dropdown-options">
        {options.map((o) => (
          <li className="list-item" key={o.value.toString()}>
            <span>{o.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDropdown;
