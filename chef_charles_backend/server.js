import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;
  if (!ingredients || ingredients.length === 0) {
    return res.json({ recipe: "Please add some ingredients first." });
  }

  const ingredientsString = ingredients.join(", ");
  const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has 
and suggests a recipe they could make with some or all of those ingredients. 
Format the response in Markdown.
`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
        }
      ]
    });

    const recipe = message.content[0].text || "No recipe generated.";
    res.json({ recipe });
  } catch (err) {
    console.error("Error generating recipe:", err);
    res.status(500).json({ recipe: "Error generating recipe. Check server logs." });
  }
});

app.get("/test", (req, res) => res.json({ msg: "Server works" }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));