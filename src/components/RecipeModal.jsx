function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <h2>{recipe.strMeal}</h2>

        <p><b>Category:</b> {recipe.strCategory}</p>

        <p><b>Area:</b> {recipe.strArea}</p>

        <h3>Instructions</h3>

        <p>{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            ▶ Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;