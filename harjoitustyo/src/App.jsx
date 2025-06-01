/*import { useState } from 'react';
import mockData from './mockData';

function App() {
  const [query, setQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtered = mockData.filter(recipe => {
      const lowerQuery = query.toLowerCase();
      // Etsitään hakusanaa reseptin nimestä tai aineksista
      return (
        recipe.name.toLowerCase().includes(lowerQuery) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerQuery))
      );
    });

    setFilteredRecipes(filtered);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Jossun reseptisovellus</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Esim. kana, linssi, kvinoa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '0.5rem', width: '70%', marginRight: '0.5rem' }}
          aria-label="Hae reseptiä"
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Hae reseptejä</button>
      </form>

      <div>
        {filteredRecipes.length === 0 ? (
          <p>Ei reseptejä näytettävänä. Kirjoita hakusana ja hae.</p>
        ) : (
          <ul>
            {filteredRecipes.map(recipe => (
              <li key={recipe.id} style={{ marginBottom: '1rem' }}>
                <strong>{recipe.name}</strong><br />
                <em>Ainekset:</em> {recipe.ingredients.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;*/



import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import MainApp from "./MainApp";
import "./firebase"; //

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  return user ? <MainApp /> : <Login onLogin={() => {}} />;
}

export default App;