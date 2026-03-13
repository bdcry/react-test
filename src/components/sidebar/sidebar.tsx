import { NavLink } from 'react-router';
import styles from './sidebar.module.css';
import type { ReactElement } from 'react';

export const Sidebar = (): ReactElement => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ''}`.trim()
            }>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ''}`.trim()
            }>
            Меню
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
