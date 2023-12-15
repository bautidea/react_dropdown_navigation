import calendar from '../../assets/images/icon-calendar.svg';
import planning from '../../assets/images/icon-planning.svg';
import reminders from '../../assets/images/icon-reminders.svg';
import todo from '../../assets/images/icon-todo.svg';
import { Dropdown } from './Dropdown';
import styles from './NavBar.module.css';

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

const NavBarDisplayOptions = () => {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['nav-left']}>
        <Dropdown
          dropdownName={'Features'}
          options={featureOptions}
          iconMapper={iconsFeatureMapper}
        />
        <Dropdown dropdownName={'Company'} options={companyOptions} />
        <span className={`${styles['nav-label']} ${styles['nav-label-left']}`}>
          Careers
        </span>
        <span className={`${styles['nav-label']} ${styles['nav-label-left']}`}>
          About
        </span>
      </div>

      <div className={styles['nav-right']}>
        <button className={styles['btn']}>Login</button>
        <button className={`${styles['btn']} ${styles['btn-register']}`}>
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBarDisplayOptions;
