// import { Link } from "react-router-dom";
// import { getCurrentUser } from "../utils/auth";

// export default function Dashboard() {
//   const user = getCurrentUser();

//   const cards = [
//     {
//       title: "Workout Plans",
//       to: "/workouts",
//       icon: "bi-bicycle",
//       img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "BMI Calculator",
//       to: "/bmi",
//       icon: "bi-calculator",
//       img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Diet Planner",
//       to: "/diet",
//       icon: "bi-egg-fried",
//       img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Progress Tracker",
//       to: "/progress",
//       icon: "bi-graph-up-arrow",
//       img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Profile",
//       to: "/profile",
//       icon: "bi-person-circle",
//       img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=60",
//     },
//   ];

//   return (
//     <div className="container py-5">
//       <h2 className="fw-bold mb-1">Welcome, {user?.name} 👋</h2>
//       <p className="text-muted">
//         Choose a section to track your fitness journey.
//       </p>

//       <div className="row g-4 mt-2">
//         {cards.map((c) => (
//           <div className="col-md-4" key={c.title}>
//             <Link className="text-decoration-none" to={c.to}>
//               <div className="card shadow-sm hover-card overflow-hidden rounded-4">
//                 <img
//                   src={c.img}
//                   alt={c.title}
//                   style={{ height: 140, objectFit: "cover" }}
//                 />
//                 <div className="p-4">
//                   <div className="d-flex align-items-center gap-3">
//                     <div className="icon-circle bg-dark text-white">
//                       <i className={`bi ${c.icon}`}></i>
//                     </div>
//                     <h5 className="fw-bold mb-0">{c.title}</h5>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";

export default function Dashboard() {
  // Load Progress data
  const progressData =
    JSON.parse(localStorage.getItem("fittrack_progress")) || [];

  // Load Diet data
  const meals = JSON.parse(localStorage.getItem("fittrack_meals")) || [];

  // Load Profile data
  const profile =
    JSON.parse(localStorage.getItem("fittrack_profile")) || {
      name: "User",
      goal: "Fitness",
    };

  // Stats
  const totalWorkouts = progressData.reduce((sum, p) => sum + p.workouts, 0);

  const totalWater = progressData.reduce((sum, p) => sum + p.water, 0);

  const avgWater =
    progressData.length > 0 ? (totalWater / progressData.length).toFixed(1) : 0;

  const latestWeight = progressData.length > 0 ? progressData[0].weight : 0;

  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);

  // Recent Progress (Top 3)
  const recentProgress = progressData.slice(0, 3);

  return (
    <div className="container py-5">
      {/* Welcome Banner */}
      <div className="card shadow-sm rounded-4 overflow-hidden mb-4">
        <div className="row g-0 align-items-center">
          <div className="col-md-6 p-4">
            <h2 className="fw-bold mb-2">
              Welcome, {profile.name} 👋
            </h2>
            <p className="text-muted mb-3">
              Goal: <b>{profile.goal}</b> <br />
              Track your workouts, diet and progress daily.
            </p>

            <div className="d-flex gap-2 flex-wrap">
              <Link to="/workouts" className="btn btn-dark">
                <i className="bi bi-lightning-charge me-2"></i>
                Workouts
              </Link>

              <Link to="/diet" className="btn btn-success">
                <i className="bi bi-egg-fried me-2"></i>
                Diet
              </Link>

              <Link to="/progress" className="btn btn-primary">
                <i className="bi bi-graph-up me-2"></i>
                Progress
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1200&q=60"
              alt="dashboard"
              className="img-fluid"
              style={{ height: "280px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 p-4">
            <h6 className="text-muted mb-1">
              <i className="bi bi-check2-circle me-2"></i>Total Workouts
            </h6>
            <h2 className="fw-bold mb-0">{totalWorkouts}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 p-4">
            <h6 className="text-muted mb-1">
              <i className="bi bi-fire me-2 text-danger"></i>Total Calories
            </h6>
            <h2 className="fw-bold mb-0">{totalCalories}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 p-4">
            <h6 className="text-muted mb-1">
              <i className="bi bi-droplet me-2 text-primary"></i>Avg Water (L)
            </h6>
            <h2 className="fw-bold mb-0">{avgWater}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm rounded-4 p-4">
            <h6 className="text-muted mb-1">
              <i className="bi bi-person-bounding-box me-2"></i>Latest Weight
            </h6>
            <h2 className="fw-bold mb-0">
              {latestWeight ? `${latestWeight} kg` : "N/A"}
            </h2>
          </div>
        </div>
      </div>

      {/* Recent Progress */}
      <div className="row g-4">
        <div className="col-md-7">
          <div className="card shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-clock-history me-2"></i>Recent Progress
            </h5>

            {recentProgress.length === 0 ? (
              <p className="text-muted mb-0">
                No progress added yet. Go to Progress page and add your first
                entry.
              </p>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr className="text-muted">
                      <th>Date</th>
                      <th>Workouts</th>
                      <th>Water (L)</th>
                      <th>Weight (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProgress.map((p, i) => (
                      <tr key={i}>
                        <td className="fw-semibold">{p.date}</td>
                        <td>{p.workouts}</td>
                        <td>{p.water}</td>
                        <td>{p.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-3">
              <Link to="/progress" className="btn btn-outline-primary w-100">
                View Full Progress
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-5">
          {/* Tips */}
          <div className="card shadow-sm rounded-4 p-4 mb-4">
            <h5 className="fw-bold mb-2">
              <i className="bi bi-lightbulb me-2 text-warning"></i>Fitness Tip
            </h5>
            <p className="text-muted mb-0">
              Drink at least <b>2.5L water</b> daily and aim for{" "}
              <b>7-8 hours sleep</b> for better recovery.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="card shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-grid me-2"></i>Quick Actions
            </h5>

            <div className="d-grid gap-2">
              <Link to="/workouts" className="btn btn-dark">
                <i className="bi bi-lightning-charge me-2"></i>
                Start Workout
              </Link>

              <Link to="/diet" className="btn btn-success">
                <i className="bi bi-egg-fried me-2"></i>
                Add Meal
              </Link>

              <Link to="/bmi" className="btn btn-warning">
                <i className="bi bi-calculator me-2"></i>
                Check BMI
              </Link>

              <Link to="/profile" className="btn btn-primary">
                <i className="bi bi-person me-2"></i>
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}