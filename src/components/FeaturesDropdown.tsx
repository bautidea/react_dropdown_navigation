import '../index.css';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import calendar from '../assets/images/icon-calendar.svg';
import planning from '../assets/images/icon-planning.svg';
import reminders from '../assets/images/icon-reminders.svg';
import todo from '../assets/images/icon-todo.svg';
import { ReactSVG } from 'react-svg';

export interface DropdownProps {
  isVisible: boolean;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
}
export interface Option {
  value: number;
  label: string;
}

const options: Option[] = [
  { value: 0, label: 'Todo List' },
  { value: 1, label: 'Calendar' },
  { value: 2, label: 'Reminders' },
  { value: 3, label: 'Planning' },
];

const icons: { [key: string]: string } = {
  'Todo List': todo,
  'Calendar': calendar,
  'Reminders': reminders,
  'Planning': planning,
};

const FeaturesDropdown = ({
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
        <span className="dropdown-name">Features</span>
        <ReactSVG className="dropdown-icon" src={arrowUp} />
      </div>
      <ul
        className={`dropdown-options ${isVisible ? 'show' : ''}`}
        onMouseOut={(e) => {
          e.preventDefault();
          handleMouseOut();
        }}
      >
        {options.map((o) => (
          <li className="list-item" key={o.value.toString()}>
            <ReactSVG src={icons[o.label]} />
            <span>{o.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesDropdown;
