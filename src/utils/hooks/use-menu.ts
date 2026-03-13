import { useMemo, useState } from 'react';
import { initialMenuItems } from '../../data/menu-items';
import type { MenuItem } from '../../types/menu-item';

const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  const selectedItemsCount = useMemo(
    () => menuItems.filter((item) => item.checked).length,
    [menuItems],
  );

  const selectedTotalValue = useMemo(
    () => menuItems.reduce((total, item) => total + (item.checked ? item.value : 0), 0),
    [menuItems],
  );

  const handleToggleMenuItem = (id: number) => {
    setMenuItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    );
  };

  return {
    menuItems,
    selectedItemsCount,
    selectedTotalValue,
    handleToggleMenuItem,
  };
};

export default useMenu;
