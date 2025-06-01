import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function AddRecipe({ onRecipeAdded }) {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [instructionsText, setInstructionsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title || !ingredient || !ingredientsText || !instructionsText) {
      setError("Täytä kaikki kentät");
      return;
    }

    const ingredients = ingredientsText.split(",").map(i => i.trim()).filter(i => i);
    const instructions = instructionsText.split(",").map(i => i.trim()).filter(i => i);

    setLoading(true);
    try {
      await addDoc(collection(db, "recipes"), {
        title,
        ingredient,
        ingredients,
        instructions,
        image: "" // Voit jättää tyhjäksi tai lisätä URL-kentän myöhemmin
      });
      setTitle("");
      setIngredient("");
      setIngredientsText("");
      setInstructionsText("");
      onRecipeAdded(); // kutsu parent-komponentin funktiota, jolla voi esim. päivittää listan
    } catch (err) {
      setError("Virhe tallennuksessa: " + err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Lisää uusi resepti</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Reseptin nimi:</label><br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div>
        <label>Proteiini/hiilihydraatti (hakusana):</label><br />
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div>
        <label>Ainekset (pilkulla eroteltuna):</label><br />
        <textarea
          value={ingredientsText}
          onChange={(e) => setIngredientsText(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
          rows={3}
          placeholder="Esim. 200 g kanaa, 1 paprika, 2 dl riisiä"
        />
      </div>
      <div>
        <label>Ohjeet (pilkulla eroteltuna):</label><br />
        <textarea
          value={instructionsText}
          onChange={(e) => setInstructionsText(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
          rows={3}
          placeholder="Esim. Leikkaa kana, Paista kana, Keitä riisi"
        />
      </div>
      <button type="submit" disabled={loading} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        {loading ? "Tallennetaan..." : "Tallenna resepti"}
      </button>
    </form>
  );
}

export default AddRecipe;