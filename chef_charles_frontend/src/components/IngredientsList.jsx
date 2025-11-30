import {useState, useRef} from "react";
import './IngredientsList.css'

export default function IngredientsList({ ingredients, showRecipe, ref }) {


  return (
    <section className="ingredient-list-section">
      <h1 className="head">Ingredients on hand:</h1>
      <ul>
        {ingredients.map((ing, i) => (
          <li className="list" key={i}>{ing}</li>
        ))}
      </ul>
      {ingredients.length > 2 && (
        <div className="section-recipe-generator" >
          <div className="action-call" ref={ref}>
            <h3 >Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="generator-btn" onClick={showRecipe}>
          Get a recipe
        </button>
        </div>
      )}
    </section>
  );
}
