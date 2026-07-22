import { useState } from "react";
import { searchRecipes } from "../services/recipeApi";

function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchRecipes(query) {
    setLoading(true);

    const data = await searchRecipes(query);

    setRecipes(data);

    setLoading(false);
  }

  return {
    recipes,
    loading,
    fetchRecipes,
  };
}

export default useRecipes;