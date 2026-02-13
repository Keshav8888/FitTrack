// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../utils/auth";

// export default function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [msg, setMsg] = useState("");

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     const result = registerUser(form);
//     setMsg(result.message);

//     if (result.ok) {
//       setTimeout(() => navigate("/login"), 800);
//     }
//   }

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="card shadow-sm p-4">
//             <h2 className="fw-bold mb-3">Register</h2>

//             {msg && <div className="alert alert-info">{msg}</div>}

//             <form onSubmit={handleSubmit}>
//               <input
//                 className="form-control mb-3"
//                 placeholder="Full Name"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 className="form-control mb-3"
//                 placeholder="Email"
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 className="form-control mb-3"
//                 placeholder="Password"
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />

//               <button className="btn btn-dark w-100">Create Account</button>
//             </form>

//             <p className="mt-3 text-muted">
//               Already have an account? <Link to="/login">Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function getStrength(password) {
    if (!password) return { label: "", percent: 0 };

    let score = 0;

    if (password.length >= 6) score += 25;
    if (password.length >= 10) score += 25;
    if (/[A-Z]/.test(password)) score += 20;
    if (/[0-9]/.test(password)) score += 15;
    if (/[^A-Za-z0-9]/.test(password)) score += 15;

    if (score < 40) return { label: "Weak", percent: score };
    if (score < 75) return { label: "Medium", percent: score };
    return { label: "Strong", percent: score };
  }

  const strength = getStrength(form.password);

  function handleSubmit(e) {
    e.preventDefault();
    setMsg("");

    if (form.password !== form.confirmPassword) {
      setMsg("❌ Password and Confirm Password do not match!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const result = registerUser(form);
      setMsg(result.message);

      setLoading(false);

      if (result.ok) {
        setTimeout(() => navigate("/login"), 700);
      }
    }, 900);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center g-4">
        {/* Left Side Image */}
        <div className="col-md-6 d-none d-md-block">
          <div className="p-4">
            <h2 className="fw-bold mb-2">Start Your Fitness Journey 💪</h2>
            <p className="text-muted">
              Create your FitTrack account and begin tracking workouts, diet and
              progress.
            </p>

            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=60"
              alt="fitness register"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: "360px", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        {/* Register Form */}
        <div className="col-md-5">
          <div className="card shadow-sm rounded-4 p-4">
            <h2 className="fw-bold mb-1">
              <i className="bi bi-person-plus me-2"></i>Register
            </h2>
            <p className="text-muted mb-3">
              Create an account to continue.
            </p>

            {msg && (
              <div className="alert alert-info py-2 mb-3 rounded-3">
                {msg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <label className="form-label fw-semibold">Full Name</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  className="form-control"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <label className="form-label fw-semibold">Email</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  className="form-control"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <label className="form-label fw-semibold">Password</label>
              <div className="input-group mb-2">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  className="form-control"
                  placeholder="Create a password"
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPass(!showPass)}
                >
                  <i className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}`}></i>
                </button>
              </div>

              {/* Password Strength */}
              {form.password && (
                <div className="mb-3">
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className={`progress-bar ${
                        strength.label === "Weak"
                          ? "bg-danger"
                          : strength.label === "Medium"
                          ? "bg-warning"
                          : "bg-success"
                      }`}
                      style={{ width: `${strength.percent}%` }}
                    ></div>
                  </div>
                  <small className="text-muted">
                    Strength: <b>{strength.label}</b>
                  </small>
                </div>
              )}

              {/* Confirm Password */}
              <label className="form-label fw-semibold">Confirm Password</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-shield-lock"></i>
                </span>

                <input
                  className="form-control"
                  placeholder="Confirm your password"
                  type={showConfirmPass ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                >
                  <i
                    className={`bi ${
                      showConfirmPass ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>

              {/* Register Button */}
              <button
                className="btn btn-success w-100 rounded-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Creating account...
                  </>
                ) : (
                  <>
                    <i className="bi bi-person-check me-2"></i>
                    Register
                  </>
                )}
              </button>
            </form>

            <p className="mt-3 text-muted text-center">
              Already have an account?{" "}
              <Link className="fw-semibold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

