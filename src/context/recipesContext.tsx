import { createContext, useContext, useState, ReactNode } from "react";

type RecipesContextType = {
  recipes: any[];
  setRecipes: React.Dispatch<React.SetStateAction<any[]>>;
  nextLink: string | null;
  setNextLink: React.Dispatch<React.SetStateAction<string | null>>;
};

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

export const RecipesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(null);

  return (
    <RecipesContext.Provider
      value={{ recipes, setRecipes, nextLink, setNextLink }}
    >
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
