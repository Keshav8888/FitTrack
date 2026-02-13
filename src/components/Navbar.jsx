import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  function handleLogout() {
    logoutUser();
    window.location.href = "/login";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
      <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
        <i className="bi bi-activity"></i> FitTrack
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <NavItem to="/dashboard" icon="bi-speedometer2" label="Dashboard" />
              <NavItem to="/workouts" icon="bi-bicycle" label="Workouts" />
              <NavItem to="/bmi" icon="bi-calculator" label="BMI" />
              <NavItem to="/diet" icon="bi-egg-fried" label="Diet" />
              <NavItem to="/progress" icon="bi-graph-up-arrow" label="Progress" />
              <NavItem to="/profile" icon="bi-person-circle" label="Profile" />

              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-warning ms-2"
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <NavItem to="/login" icon="bi-box-arrow-in-right" label="Login" />
              <NavItem to="/register" icon="bi-person-plus" label="Register" />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link d-flex align-items-center gap-2" to={to}>
        <i className={`bi ${icon}`}></i> {label}
      </NavLink>
    </li>
  );
}
