import '../index.css';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import calendar from '../assets/images/icon-calendar.svg';
import planning from '../assets/images/icon-planning.svg';
import reminders from '../assets/images/icon-reminders.svg';
import todo from '../assets/images/icon-todo.svg';

export interface Option {
  value: number;
  label: string;
  icon: string;
}

const options: Option[] = [
  { value: 0, label: 'Todo List', icon: todo },
  { value: 1, label: 'Calendar', icon: calendar },
  { value: 2, label: 'Reminders', icon: reminders },
  { value: 3, label: 'Planning', icon: planning },
];

const FeaturesDropdown = () => {
  return (
    <div className="nav-option">
      <div className="nav-label">
        <span className="dropdown-name">Features</span>
        <img className="dropdown-icon" src={arrowUp} />
      </div>
      <ul className="dropdown-options">
        {options.map((o) => (
          <li className="list-item" key={o.value.toString()}>
            <svg className="icon" viewBox="0 0 0 0">
              <image href={o.icon} />
            </svg>
            <span>{o.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesDropdown;
