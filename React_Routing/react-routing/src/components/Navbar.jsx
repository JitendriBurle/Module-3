import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    padding: "10px 16px",
    textDecoration: "none",
    color: isActive ? "#fff" : "#ddd",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    borderRadius: "6px"
  });

  return (
    <nav style={{ display: "flex", gap: "12px", padding: "16px", background: "#111827" }}>
      <NavLink to="/home" style={linkStyle}>Home</NavLink>
      <NavLink to="/aboutus" style={linkStyle}>About Us</NavLink>
      <NavLink to="/todos" style={linkStyle}>Todos</NavLink>
    </nav>
  );
}
