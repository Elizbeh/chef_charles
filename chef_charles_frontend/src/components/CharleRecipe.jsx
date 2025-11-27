import React from "react";
import ReactMarkdown from "react-markdown";
import "./CharlesRecipe.css"

export default function CharlesRecipe({ recipe }) {
  return (
    <section className="recommendation-section" aria-live="polite">
      <h1 className="chef">Chef Charles Recommends:</h1>
        <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
