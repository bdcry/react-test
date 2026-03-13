import { Route, Routes } from 'react-router';

import { HomePage } from './pages/home-page/home-page';
import { MenuPage } from './pages/menu-page/menu-page';
import { MainLayout } from './routes/main-layout';
import useMenu from './utils/hooks/use-menu';
import type { ReactElement } from 'react';

export const App = (): ReactElement => {
  const { menuItems, selectedItemsCount, selectedTotalValue, handleToggleMenuItem } = useMenu();

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            selectedItemsCount={selectedItemsCount}
            selectedTotalValue={selectedTotalValue}
          />
        }>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/menu"
          element={<MenuPage menuItems={menuItems} onToggleMenuItem={handleToggleMenuItem} />}
        />
      </Route>
    </Routes>
  );
};
