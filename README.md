# Sahayata - Government Scheme Finder

Sahayata is a simple frontend-only React application that helps users find relevant government schemes by answering a few guided questions.

## Features

- Clean homepage with a hero section and start button
- Multi-step form with button-based answers
- Top 3 matching scheme cards
- Local JSON-style data stored in JavaScript
- Frontend-only filtering logic
- Responsive Tailwind CSS layout with light animations

## Tech Stack

- React + Vite
- Tailwind CSS
- Plain JavaScript

## Project Structure

```text
.
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
`-- src
    |-- App.jsx
    |-- index.css
    |-- main.jsx
    |-- components
    |   |-- Footer.jsx
    |   |-- Hero.jsx
    |   |-- Navbar.jsx
    |   |-- ResultCard.jsx
    |   |-- ResultsSection.jsx
    |   `-- StepForm.jsx
    |-- data
    |   `-- schemes.js
    `-- utils
        `-- filterSchemes.js
```

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

## Notes

- This project uses sample scheme data for demo purposes.
- Filtering is done entirely on the frontend.
- You can expand `src/data/schemes.js` with more scheme records later.
