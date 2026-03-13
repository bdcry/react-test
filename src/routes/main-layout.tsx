import type { ReactElement } from 'react';
import styles from './main-layout.module.css';
import { Header } from '../components/header/header';
import { Sidebar } from '../components/sidebar/sidebar';
import { Outlet } from 'react-router';

type MainLayoutProps = {
  selectedItemsCount: number;
  selectedTotalValue: number;
};

export const MainLayout = ({
  selectedItemsCount,
  selectedTotalValue,
}: MainLayoutProps): ReactElement => {
  return (
    <>
      <Header selectedItemsCount={selectedItemsCount} selectedTotalValue={selectedTotalValue} />
      <main className={styles.mainContainer}>
        <Sidebar />
        <section className={styles.mainContent}>
          <Outlet />
        </section>
      </main>
    </>
  );
};
