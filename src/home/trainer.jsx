import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });

export default function Trainer() {
  const [rows, setRows] = useState([]);
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");

  const reload = () => api.get("/api/seances").then(r => setRows(r.data));
  useEffect(() => reload(), []);

  const add = () => {
    if (!debut || !fin) return;
    api.post("/api/seances", { debut, finish: fin })
       .then(() => { setDebut(""); setFin(""); reload(); });
  };

  return (
    <div style={st.page}>
      <h1 style={st.h1}>Mes séances</h1>

      <div style={st.line}>
        <input placeholder="Début" value={debut} onChange={e => setDebut(e.target.value)} style={st.in} />
        <input placeholder="Fin"   value={fin}   onChange={e => setFin(e.target.value)}   style={st.in} />
        <button onClick={add} style={st.add}>Ajouter</button>
      </div>

      {rows.map(r => (
        <div key={r.id} style={st.card}>
          <span>{r.debut} → {r.finish}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- style identique ---------- */
const st = {
  page: { minHeight: "100vh", background: "#0d0d0d", color: "#00ff80", display: "grid", placeContent: "center", fontFamily: "system-ui", padding: "40px 20px" },
  h1: { margin: "0 0 24px", fontSize: "28px", letterSpacing: "1px", textAlign: "center" },
  line: { display: "flex", gap: "12px", marginBottom: "32px" },
  in: { flex: 1, padding: "10px 14px", border: "1px solid #00ff80", borderRadius: "8px", background: "#1a1a1a", color: "#00ff80", fontSize: "16px", outline: "none" },
  add: { padding: "10px 20px", border: "none", borderRadius: "8px", background: "#00ff80", color: "#000", fontWeight: "700", cursor: "pointer", fontSize: "16px" },
  card: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", marginBottom: "10px", background: "#1a1a1a", border: "1px solid #00ff80", borderRadius: "8px" },
};