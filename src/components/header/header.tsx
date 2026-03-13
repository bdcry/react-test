import { useLocation } from 'react-router';
import type { ReactElement } from 'react';
import styles from './header.module.css';

type HeaderProps = {
  selectedItemsCount: number;
  selectedTotalValue: number;
};

export const Header = ({
  selectedItemsCount,
  selectedTotalValue,
}: HeaderProps): ReactElement => {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';
  const currentPageTitle = location.pathname === '/menu' ? 'Меню' : 'Главная';
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.label}>Раздел:</span>
          <span className={styles.value}>{currentPageTitle}</span>
        </div>

        {isMenuPage && (
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.label}>Выбрано пунктов:</span>
              <span className={styles.value}>{selectedItemsCount}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.label}>Общее значение:</span>
              <span className={styles.value}>{selectedTotalValue}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
