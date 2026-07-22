import FavoritesButton from "./FavoritesButton";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <FavoritesButton recipe={recipe} />

      <h2>{recipe.strMeal}</h2>

      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>

      <p>
        <strong>Area:</strong> {recipe.strArea}
      </p>
    </div>
  );
}

export default RecipeCard;