/*import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Kirjautuminen onnistui!");
      // Tässä voit ohjata käyttäjän esim. pääsivulle
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Käyttäjä luotu!");
      // Sama kuin yllä, voit ohjata käyttäjän jonnekin
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Kirjaudu sisään</h2>
      <form>
        <input
          type="email"
          placeholder="Sähköposti"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleLogin} style={{ padding: "8px", width: "100%", marginBottom: "8px" }}>
          Kirjaudu sisään
        </button>
        <button onClick={handleRegister} style={{ padding: "8px", width: "100%" }}>
          Rekisteröidy
        </button>
      </form>
    </div>
  );
}

export default Login;*/




import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Kirjautuminen onnistui!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Käyttäjä luotu!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Kirjaudu sisään</h2>
      <form>
        <input
          type="email"
          placeholder="Sähköposti"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleLogin} style={{ padding: "8px", width: "100%", marginBottom: "8px" }}>
          Kirjaudu sisään
        </button>
        <button onClick={handleRegister} style={{ padding: "8px", width: "100%" }}>
          Rekisteröidy
        </button>
      </form>
    </div>
  );
}

export default Login;