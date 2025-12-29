import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correction ici
import axios from "axios";

export default function Login() {
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // Ajout de useNavigate

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        password,
        role: role.toLowerCase()
      });

      if (res.data.success) {
        alert("Connecté en tant que " + role);
        switch (res.data.role) {
          case "admin":
            navigate("/home/admin");
            break;
          case "trainer":
            navigate("/home/trainer");
            break;
          case "etudiant":
            navigate("/home/etudiant");
            break;
          default:
            navigate("/"); // fallback
        }
      } else {
        alert("Mot de passe incorrect");
      }
    } catch (err) {
      alert("Erreur serveur");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#0d0d0d", color: "#00ff80", fontFamily: "monospace" }}>
      <h2>Login</h2>
      <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: "10px", margin: "8px 0", borderRadius: "8px", border: "1px solid #00ff80", backgroundColor: "#111", color: "#00ff80", width: "250px" }} />
      <input type="text" placeholder="Rôle: admin, trainer, etudiant" value={role} onChange={e => setRole(e.target.value)} style={{ padding: "10px", margin: "8px 0", borderRadius: "8px", border: "1px solid #00ff80", backgroundColor: "#111", color: "#00ff80", width: "250px" }} />
      <button onClick={handleLogin} style={{ padding: "12px 20px", marginTop: "15px", border: "none", borderRadius: "10px", backgroundColor: "#00ff80", color: "#000", fontWeight: "bold", cursor: "pointer" }}>Login</button>
      <button
        onClick={() => navigate("/signup")} // Correction ici
        style={{
          marginTop: "10px",
          background: "transparent",
          border: "1px solid #00ff80",
          color: "#00ff80",
          padding: "8px 16px",
          borderRadius: "8px",
          fontSize: "14px",
          cursor: "pointer",
          fontFamily: "monospace",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#00ff80";
          e.target.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#00ff80";
        }}
      >
        Pas de compte ? S'inscrire
      </button>
    </div>
  );
}