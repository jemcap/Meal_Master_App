import { createContext, useContext, useState, ReactNode } from "react";

type RecipesContextType = {
  recipes: any[];
  setRecipes: React.Dispatch<React.SetStateAction<any[]>>;
};

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

export const RecipesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<any[]>([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (!context)
    throw new Error("useRecipes must be used within a RecipesProvider");
  return context;
};
