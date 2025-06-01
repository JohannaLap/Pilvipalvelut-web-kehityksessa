/*import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Firestore-yhteys

function MainApp() {
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);
  const [recipes, setRecipes] = useState([]); // Reseptit Firestoresta

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const recipeData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(recipeData);
      } catch (err) {
        console.error("Virhe reseptejä haettaessa:", err);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredient.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToShoppingList = (items) => {
    const uniqueItems = items.filter((item) => !shoppingList.includes(item));
    setShoppingList([...shoppingList, ...uniqueItems]);
  };

  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter((i) => i !== item));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Jossun reseptisovellus</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Esim. kana, tofu, makaroni..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "70%", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Hae reseptejä
        </button>
      </form>

      {selectedRecipe ? (
        <div style={{ padding: "1rem" }}>
          <button
            onClick={() => setSelectedRecipe(null)}
            style={{ marginBottom: "1rem" }}
          >
            ← Takaisin listaan
          </button>
          <h2>{selectedRecipe.title}</h2>
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
          />
          <h3>Ainekset:</h3>
          <ul>
            {selectedRecipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => addToShoppingList(selectedRecipe.ingredients)}
            style={{ margin: "1rem 0", padding: "0.5rem 1rem" }}
          >
            Lisää kaikki ostoslistaan
          </button>

          <h3>Ohjeet:</h3>
          <ol>
            {selectedRecipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>Ostoslista</h3>
            {shoppingList.length === 0 ? (
              <p>Ostoslista on tyhjä.</p>
            ) : (
              <ul>
                {shoppingList.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    {item}
                    <button
                      onClick={() => removeFromShoppingList(item)}
                      style={{
                        marginLeft: "0.5rem",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>
          {filteredRecipes.length === 0 ? (
            <p>Ei reseptejä näytettävänä. Kirjoita hakusana ja hae.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {filteredRecipes.map((recipe) => (
                <li
                  key={recipe.id}
                  style={{
                    marginBottom: "2rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <h2>{recipe.title}</h2>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <p>
                    <strong>Proteiini/Hiilihydraatti:</strong>{" "}
                    {recipe.ingredient}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default MainApp; */


import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Firestore-yhteys

function MainApp() {
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reseptit"));
      const recipeData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecipes(recipeData);
    } catch (err) {
      console.error("Virhe reseptejä haettaessa:", err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredient.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToShoppingList = (items) => {
    const uniqueItems = items.filter((item) => !shoppingList.includes(item));
    setShoppingList([...shoppingList, ...uniqueItems]);
  };

  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter((i) => i !== item));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Jossun reseptisovellus</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Esim. kana, tofu, makaroni..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "70%", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Hae reseptejä
        </button>
      </form>

      {selectedRecipe ? (
        <div style={{ padding: "1rem" }}>
          <button
            onClick={() => setSelectedRecipe(null)}
            style={{ marginBottom: "1rem" }}
          >
            ← Takaisin etusivulle
          </button>
          <h2>{selectedRecipe.title}</h2>
          {selectedRecipe.image && (
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "0.5rem",
              }}
            />
          )}
          <h3>Ainekset:</h3>
          <ul>
            {selectedRecipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => addToShoppingList(selectedRecipe.ingredients)}
            style={{ margin: "1rem 0", padding: "0.5rem 1rem" }}
          >
            Lisää kaikki ostoslistaan
          </button>

          <h3>Ohjeet:</h3>
          <ol>
            {selectedRecipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>Ostoslista</h3>
            {shoppingList.length === 0 ? (
              <p>Ostoslista on tyhjä.</p>
            ) : (
              <ul>
                {shoppingList.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    {item}
                    <button
                      onClick={() => removeFromShoppingList(item)}
                      style={{
                        marginLeft: "0.5rem",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>
          {filteredRecipes.length === 0 ? (
            <p>Ei reseptejä näytettävänä. Kirjoita hakusana ja hae.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {filteredRecipes.map((recipe) => (
                <li
                  key={recipe.id}
                  style={{
                    marginBottom: "2rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <h2>{recipe.title}</h2>
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        marginBottom: "0.5rem",
                      }}
                    />
                  )}
                  <p>
                    <strong>Proteiini/Hiilihydraatti:</strong>{" "}
                    {recipe.ingredient}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default MainApp;