import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import useRecipes from "./hooks/useRecipes";
import "./App.css";
import { useState } from "react";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

      {!loading && recipes.length === 0 && (
  <h2 style={{ textAlign: "center" }}>
    Search for a recipe 🍕
  </h2>
)}

{!loading &&
  recipes.length === 0 &&
  searchTerm !== "" && (
    <h2 style={{ textAlign: "center", color: "red" }}>
      No recipes found 😔
    </h2>
)}

<div className="recipes"></div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div
          key={recipe.idMeal}
          onClick={() => setSelectedRecipe(recipe)}
          >
          <RecipeCard recipe={recipe} />
</div>
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
      <RecipeModal
  recipe={selectedRecipe}
  onClose={() => setSelectedRecipe(null)}
/>
    </>
  );
}

export default App;