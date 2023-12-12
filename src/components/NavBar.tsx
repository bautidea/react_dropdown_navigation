import logo from '../assets/images/logo.svg';
import calendar from '../assets/images/icon-calendar.svg';
import planning from '../assets/images/icon-planning.svg';
import reminders from '../assets/images/icon-reminders.svg';
import todo from '../assets/images/icon-todo.svg';
import { ReactSVG } from 'react-svg';
import { Dropdown } from './Dropdown';

const companyOptions = [
  { value: 0, label: 'History' },
  { value: 1, label: 'Our Team' },
  { value: 2, label: 'Blog' },
];
const featureOptions = [
  { value: 0, label: 'Todo List' },
  { value: 1, label: 'Calendar' },
  { value: 2, label: 'Reminders' },
  { value: 3, label: 'Planning' },
];

const iconsFeatureMapper = {
  'Todo List': todo,
  'Calendar': calendar,
  'Reminders': reminders,
  'Planning': planning,
};

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <ReactSVG className="logo-img" src={logo} />
          <Dropdown
            dropdownName={'features'}
            options={featureOptions}
            iconMapper={iconsFeatureMapper}
          />
          <Dropdown dropdownName={'company'} options={companyOptions} />
          <span className="nav-label nav-label-left">Careers</span>
          <span className="nav-label nav-label-left">About</span>
        </div>

        <div className="nav-right">
          <button className="btn">Login</button>
          <button className="btn btn-register">Register</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
