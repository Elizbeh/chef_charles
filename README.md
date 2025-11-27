# Chef Charles 👨‍🍳


Chef Charles is a full-stack web application that helps users generate recipes based on ingredients they have at hand. The app leverages Anthropic Claude AI to provide recipe suggestions in real time.

## 🚀 Live Demo

**Try it out:** [https://chefcharles.netlify.app/](https://chefcharles.netlify.app/)

## Features

* Add ingredients you have in your kitchen.
* Generate recipes based on your ingredients using AI.
* Displays recipes in Markdown for better formatting.
* Animated loading states with spinner while generating recipes.
* Responsive design for mobile and desktop.

## Technologies Used

### Frontend:
* React 19
* Vite
* React Markdown
* CSS Modules / Custom Styling

### Backend:
* Node.js + Express
* Anthropic Claude AI SDK
* CORS & dotenv for environment configuration

### Testing:
* Cypress for end-to-end testing

### Deployment:
* Frontend hosted on Netlify
* Backend hosted on Render

## Getting Started

### Prerequisites
* Node.js v18+
* NPM
* Anthropic API key

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Elizbeh/chef_charles.git
cd chef_charles
```

2. Install dependencies for frontend and backend:

```bash
# Frontend
cd chef_charles_frontend
npm install

# Backend
cd ../chef_charles_backend
npm install
```

3. Create a `.env` file in `chef_charles_backend`:

```env
ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
```

4. Start the backend:

```bash
cd chef_charles_backend
npm start
```

5. Start the frontend:

```bash
cd ../chef_charles_frontend
npm run dev
```

6. Open http://localhost:5173 to view the app.

## Deployment

* **Backend:** Render (Set environment variable `ANTHROPIC_API_KEY`)
* **Frontend:** Netlify (Use `VITE_API_URL` to point to backend)

```env
VITE_API_URL=https://chef-charles.onrender.com
```

## Usage

1. Enter the ingredients you have in the input field.
2. Click **+ Add Ingredient** to add it to the list.
3. Click **Get a Recipe** to generate a recipe from your ingredients.
4. Watch the animated loading spinner 🥕 while the AI generates your recipe.
5. View your personalized recipe displayed in beautiful Markdown format.

## Loading State Implementation

The app features an engaging loading experience while recipes are being generated:

### Emoji Spinner Option (Current)
```jsx
{isLoading && (
  <div className="loading-container">
    <span className="emoji-spinner">🥕</span>
    <p>Generating your recipe...</p>
  </div>
)}
```

**Other emoji options:**
- `🥕` - Carrot (default, orange theme)
- `🍊` - Orange
- `🎃` - Pumpkin
- `🔥` - Fire
- `🍜` - Ramen bowl

### CSS Spinner Option
Replace the emoji with a pure CSS spinner:

```css
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ffe5cc;
  border-top: 5px solid #ff6b35;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Required CSS
Add this to your `Main.css`:

```css
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
}

.emoji-spinner {
  font-size: 3rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container p {
  color: #ff6b35;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
}
```

## Testing

Cypress is used for end-to-end testing:

```bash
npm run cypress:open
```

## Folder Structure

```
chef_charles/
├─ chef_charles_frontend/  # React frontend (Vite)
├─ chef_charles_backend/   # Express backend
└─ README.md
```

## Contributing

1. Fork the repository.
2. Create a branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature-name`
5. Create a Pull Request.

## License

MIT License © 2025