import '../index.css';
import arrowDown from '../assets/images/icon-arrow-down.svg';

export interface Option {
  value: Number;
  label: String;
}

const options: Option[] = [
  { value: 0, label: 'Todo List' },
  { value: 1, label: 'Calendar' },
  { value: 2, label: 'Reminders' },
  { value: 3, label: 'Planning' },
];

const FeaturesDropdown = () => {
  return (
    <div className="nav-option">
      <div className="nav-label">
        <span className="dropdown-name">Features</span>
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

export default FeaturesDropdown;
