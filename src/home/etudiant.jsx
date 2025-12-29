import { useEffect, useState } from "react";
import axios from "axios";

export default function Etudiant() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/etudiant/formations")
         .then(res => setFormations(res.data));
  }, []);

  const neon = { border: "1px solid #00ff80", backgroundColor: "#111", color: "#00ff80", padding: "8px", borderRadius: "6px", fontFamily: "monospace" };

  return (
    <div style={{ padding: "30px", backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#00ff80", fontFamily: "monospace" }}>
      <h2>Mes formations</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #00ff80" }}>
            <th style={{ textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Nom</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {formations.map(f => (
            <tr key={f.id} style={{ borderBottom: "1px solid #00ff80" }}>
              <td style={{ padding: "8px" }}>{f.id}</td>
              <td style={{ padding: "8px" }}>{f.name}</td>
              <td style={{ padding: "8px" }}>{f.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}