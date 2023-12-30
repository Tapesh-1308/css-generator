import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-black/60">
      <div className="bg-purple-700 px-8 py-2 rounded-b-xl rounded-bl-xl cursor-pointer" onClick={() => navigate("/")}>
        <span className="text-white">CSS-GEN - A CSS Generator</span>
      </div>
      <nav className="mt-4 mb-2">
        <ul className="flex flex-wrap justify-evenly gap-8">
          <li className="list-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-purple-700" : ""
              }
            >
              Box-Shadow
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gradient"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-purple-700" : ""
              }
            >
              Gradient Generator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/glassmorphism"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-purple-700" : ""
              }
            >
              Glassmorphism
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
