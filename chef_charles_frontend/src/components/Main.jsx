import React, { useEffect, useRef } from "react";
import IngredientsList from "./IngredientsList";
import CharlesRecipe from "./CharleRecipe";
import "./Main.css";

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"]);
  const [recipe, setRecipe] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const recipeSection = useRef(null)

 useEffect(() => {
  if (recipe && recipeSection) {
    recipeSection.current.scrollIntoView({behavior: "smooth"})
  }
 }, [recipe])

  const addIngredient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient").trim();
    if (!newIngredient) return;
    setIngredients((prev) => [...prev, newIngredient]);
    e.target.reset();
  };

  const getRecipe = async () => {
    if (ingredients.length === 0) return;
    setIsLoading(true);
    setRecipe(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/recipe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setRecipe(data.recipe);
    } catch (err) {
      console.error(err);
      setRecipe("Error fetching recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="form">
        <input
          name="ingredient"
          className="input"
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
        />
        <button className="btn">+ Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} showRecipe={getRecipe} ref={recipeSection}/>
      )}

      {isLoading && 
        <div className="loading-container">
          <span className="emoji-spinner">🥕</span>
          <p>Generating your recipe...</p>
        </div>
      
      }
      {recipe && <CharlesRecipe recipe={recipe} />}
    </main>
  );
}
