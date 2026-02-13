// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../utils/auth";

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [msg, setMsg] = useState("");

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     const result = loginUser(form);
//     setMsg(result.message);

//     if (result.ok) {
//       setTimeout(() => navigate("/dashboard"), 500);
//     }
//   }

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="card shadow-sm p-4">
//             <h2 className="fw-bold mb-3">Login</h2>

//             {msg && <div className="alert alert-info">{msg}</div>}

//             <form onSubmit={handleSubmit}>
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

//               <button className="btn btn-dark w-100">Login</button>
//             </form>

//             <p className="mt-3 text-muted">
//               Don’t have an account? <Link to="/register">Register</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    setTimeout(() => {
      const result = loginUser(form);
      setMsg(result.message);

      setLoading(false);

      if (result.ok) {
        setTimeout(() => navigate("/dashboard"), 600);
      }
    }, 900);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center g-4">
        {/* Left Image Section */}
        <div className="col-md-6 d-none d-md-block">
          <div className="p-4">
            <h2 className="fw-bold mb-2">Welcome Back 👋</h2>
            <p className="text-muted">
              Login to track your workouts, diet and fitness progress.
            </p>

            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=60"
              alt="fitness"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: "360px", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="col-md-5">
          <div className="card shadow-sm rounded-4 p-4">
            <h2 className="fw-bold mb-1">
              <i className="bi bi-box-arrow-in-right me-2"></i>Login
            </h2>
            <p className="text-muted mb-3">
              Enter your details to continue.
            </p>

            {msg && (
              <div className="alert alert-info py-2 mb-3 rounded-3">
                {msg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
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
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  className="form-control"
                  placeholder="Enter your password"
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

              {/* Remember Me */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>

                <span className="text-muted small">
                  Forgot password? (demo)
                </span>
              </div>

              {/* Login Button */}
              <button
                className="btn btn-dark w-100 rounded-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Logging in...
                  </>
                ) : (
                  <>
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                  </>
                )}
              </button>
            </form>

            <p className="mt-3 text-muted text-center">
              Don’t have an account?{" "}
              <Link className="fw-semibold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

