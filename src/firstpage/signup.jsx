import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/signup", {
        firstName,
        lastName,
        email,
        password,
        role
      });

      if (res.data.success) {
        alert("Inscription réussie !");
        navigate("/login");   // <-- redirige direct
      } else {
        alert("Erreur lors de l'inscription");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Erreur serveur");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#0d0d0d",
    color: "#00ff80",
    fontFamily: "monospace",
    padding: "20px",
  };

  const inputStyle = {
    padding: "10px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #00ff80",
    backgroundColor: "#111",
    color: "#00ff80",
    fontSize: "14px",
    width: "250px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    marginTop: "15px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#00ff80",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  };

  const titleStyle = {
    fontSize: "28px",
    marginBottom: "20px",
    textShadow: "0 0 8px #00ff80",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Signup</h2>

      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Rôle: admin, trainer, etudiant"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={inputStyle}
      />

      <button style={buttonStyle} onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}
