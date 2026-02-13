import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export default function Home() {
  const loggedIn = isLoggedIn();

  return (
    <div className="container py-5">
      <div className="hero p-4 shadow-lg">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold display-5">
              Track your Fitness Journey 💪
            </h1>
            <p className="mt-3 opacity-75">
              Workout plans, BMI calculator, diet planner, and progress tracker —
              all in one clean app.
            </p>

            {loggedIn ? (
              <Link className="btn btn-light btn-lg mt-3" to="/dashboard">
                <i className="bi bi-speedometer2 me-2"></i>
                Go to Dashboard
              </Link>
            ) : (
              <div className="d-flex gap-2 mt-3">
                <Link className="btn btn-light btn-lg" to="/login">
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/register">
                  <i className="bi bi-person-plus me-2"></i>
                  Register
                </Link>
              </div>
            )}
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              className="img-fluid rounded-4 shadow"
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=60"
              alt="Fitness"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
