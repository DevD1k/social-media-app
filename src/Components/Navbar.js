import { FaHouseChimney, FaBell, FaBookmark, FaUser } from "react-icons/fa6";
export default function Navbar({ active }) {
  return (
    <div className="navbar">
      <div className="nav">
        <div className={`icons ${active === "home" ? "active" : ""}`}>
          <FaHouseChimney />
        </div>
        <div className="icons">
          <FaBell />
        </div>
        <div className={`icons ${active === "det" ? "active" : ""}`}>
          <FaBookmark />
        </div>
        <div className="icons">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
