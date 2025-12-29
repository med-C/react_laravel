
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "#00ff80",
    textDecoration: "none",
    padding: "8px 12px",
    border: "1px solid #00ff80",
    borderRadius: "6px",
    fontFamily: "monospace",
    fontSize: "14px",
    transition: "0.3s",
  };

  const hoverOn = (e) => {
    e.target.style.backgroundColor = "#00ff80";
    e.target.style.color = "#000";
  };

  const hoverOff = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#00ff80";
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          backgroundColor: "#0d0d0d",
          borderBottom: "2px solid #00ff80",
          boxShadow: "0 0 10px #00ff80",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#00ff80", fontFamily: "monospace" }}>
          MyApp
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Link
            to="/signup"
            style={linkStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Signup
          </Link>
          <Link
            to="/login"
            style={linkStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Logout
          </Link>
        </div>
      </nav>
      <div style={{ paddingTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}