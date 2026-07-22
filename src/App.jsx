import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import useRecipes from "./hooks/useRecipes";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const { recipes, loading, fetchRecipes } = useRecipes();

  function handleSearch() {
    if (searchTerm.trim()) {
      fetchRecipes(searchTerm);
    }
  }

  return (
    <>
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}

      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))}
      </div>
    </>
  );
}

export default App;