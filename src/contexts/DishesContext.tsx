import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Dish } from '../../App';

type DishesContextType = {
  dishes: Dish[];
  setDishes: (d: Dish[]) => void;
  addDish: (d: Dish) => void;
};

const DishesContext = createContext<DishesContextType | undefined>(undefined);

export const DishesProvider = ({ children }: { children: ReactNode }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (d: Dish) => setDishes((prev) => [...prev, d]);

  return (
    <DishesContext.Provider value={{ dishes, setDishes, addDish }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {
  const ctx = useContext(DishesContext);
  if (!ctx) throw new Error('useDishes must be used within DishesProvider');
  return ctx;
};

export default DishesContext;
