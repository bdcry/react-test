import type { ReactElement } from 'react'
import styles from './menu-page.module.css'
import type { MenuItem } from '../../types/menu-item'

type MenuPageProps = {
  menuItems: MenuItem[]
  onToggleMenuItem: (id: number) => void
}

export const MenuPage = ({ menuItems, onToggleMenuItem }: MenuPageProps): ReactElement => {
  return (
    <section className={styles.menu}>
      <ul className={styles.list}>
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`${styles.card} ${menuItem.checked ? styles.cardSelected : ''}`}
          >
            <input
              className={styles.checkbox}
              type="checkbox"
              aria-label={`Выбрать ${menuItem.title}`}
              checked={menuItem.checked}
              onChange={() => onToggleMenuItem(menuItem.id)}
            />
            <span className={styles.title}>{menuItem.title}</span>
            <p className={styles.value}>
              Value: <span className={styles.valueNumber}>{menuItem.value}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
