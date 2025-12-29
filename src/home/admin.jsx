import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [formations, setFormations] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const load = () => axios.get("http://localhost:8000/api/formations").then(r => setFormations(r.data));
  useEffect(() => load(), []);

  const add = () => {
    axios.post("http://localhost:8000/api/formations", { name, description }).then(() => {
      setName(""); setDescription(""); load();
    });
  };

  const del = (id) => axios.delete(`http://localhost:8000/api/formations/${id}`).then(load);

  const neon = { border: "1px solid #00ff80", backgroundColor: "#111", color: "#00ff80", padding: "8px", borderRadius: "6px", fontFamily: "monospace" };
  const btnNeon = { ...neon, cursor: "pointer", backgroundColor: "#00ff80", color: "#000", fontWeight: "bold" };

  return (
    <div style={{ padding: "30px", backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#00ff80", fontFamily: "monospace" }}>
      <h2>Gestion des formations</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input placeholder="Nom" value={name} onChange={e => setName(e.target.value)} style={neon} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={neon} />
        <button onClick={add} style={btnNeon}>Ajouter</button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #00ff80" }}>
            <th style={{ textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Nom</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {formations.map(f => (
            <tr key={f.id} style={{ borderBottom: "1px solid #00ff80" }}>
              <td style={{ padding: "8px" }}>{f.id}</td>
              <td style={{ padding: "8px" }}>{f.name}</td>
              <td style={{ padding: "8px" }}>{f.description}</td>
              <td style={{ padding: "8px" }}>
                <button onClick={() => del(f.id)} style={{ ...btnNeon, fontSize: "12px", padding: "4px 8px" }}>Suppr</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}