// import { useState } from "react";
// import { getCurrentUser, updateCurrentUser } from "../utils/auth";

// export default function Profile() {
//   const user = getCurrentUser();

//   const [profile, setProfile] = useState(user.profile);
//   const [msg, setMsg] = useState("");

//   function handleChange(e) {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   }

//   function handleSave() {
//     const updatedUser = { ...user, profile };
//     updateCurrentUser(updatedUser);

//     setMsg("Profile updated successfully!");
//     setTimeout(() => setMsg(""), 1200);
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="fw-bold">Profile</h2>
//       <p className="text-muted">Update your personal fitness details.</p>

//       <div className="row">
//         <div className="col-md-6">
//           <div className="card shadow-sm p-4">
//             {msg && <div className="alert alert-success">{msg}</div>}

//             <div className="mb-3">
//               <label className="form-label">Age</label>
//               <input
//                 className="form-control"
//                 name="age"
//                 value={profile.age}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Height (cm)</label>
//               <input
//                 className="form-control"
//                 name="height"
//                 value={profile.height}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Weight (kg)</label>
//               <input
//                 className="form-control"
//                 name="weight"
//                 value={profile.weight}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Goal</label>
//               <select
//                 className="form-select"
//                 name="goal"
//                 value={profile.goal}
//                 onChange={handleChange}
//               >
//                 <option>Weight Loss</option>
//                 <option>Muscle Gain</option>
//                 <option>Maintenance</option>
//               </select>
//             </div>

//             <button className="btn btn-dark w-100" onClick={handleSave}>
//               Save Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";

export default function Profile() {
  const defaultProfile = {
    name: "Keshav Kumar",
    email: "keshav@gmail.com",
    age: 22,
    height: 170,
    weight: 65,
    goal: "Fat Loss",
    city: "India",
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  // Load profile from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fittrack_profile"));
    if (saved) setProfile(saved);
  }, []);

  // Save profile in localStorage
  useEffect(() => {
    localStorage.setItem("fittrack_profile", JSON.stringify(profile));
  }, [profile]);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  }

  function handleSave(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  // Load Progress data for stats
  const progressData =
    JSON.parse(localStorage.getItem("fittrack_progress")) || [];

  const totalWorkouts = progressData.reduce((sum, p) => sum + p.workouts, 0);

  const avgWater =
    progressData.length > 0
      ? (
          progressData.reduce((sum, p) => sum + p.water, 0) / progressData.length
        ).toFixed(1)
      : 0;

  const latestWeight = progressData.length > 0 ? progressData[0].weight : 0;

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            <i className="bi bi-person-circle me-2"></i>My Profile
          </h2>
          <p className="text-muted mb-0">
            Manage your personal details and fitness stats.
          </p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`btn ${isEditing ? "btn-secondary" : "btn-primary"}`}
        >
          <i className={`bi ${isEditing ? "bi-x-circle" : "bi-pencil"} me-2`}></i>
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="row g-4">
        {/* Left Card (Profile + Avatar) */}
        <div className="col-lg-4">
          <div className="card shadow-sm rounded-4 p-4 text-center">
            {/* Professional Avatar */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
              alt="profile"
              className="rounded-circle border shadow-sm mx-auto"
              style={{ width: 120, height: 120, objectFit: "cover" }}
            />

            <h4 className="fw-bold mt-3 mb-1">{profile.name}</h4>
            <p className="text-muted mb-2">{profile.email}</p>

            <span className="badge bg-success px-3 py-2 rounded-pill">
              Goal: {profile.goal}
            </span>

            <hr />

            <div className="text-start">
              <p className="mb-2">
                <strong>City:</strong> {profile.city}
              </p>
              <p className="mb-2">
                <strong>Age:</strong> {profile.age} years
              </p>
              <p className="mb-2">
                <strong>Height:</strong> {profile.height} cm
              </p>
              <p className="mb-0">
                <strong>Weight:</strong> {profile.weight} kg
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-8">
          {/* Stats */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm rounded-4 p-4">
                <h6 className="text-muted mb-1">
                  <i className="bi bi-check2-circle me-2"></i>Total Workouts
                </h6>
                <h2 className="fw-bold mb-0">{totalWorkouts}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm rounded-4 p-4">
                <h6 className="text-muted mb-1">
                  <i className="bi bi-droplet me-2"></i>Avg Water Intake
                </h6>
                <h2 className="fw-bold mb-0">{avgWater} L</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm rounded-4 p-4">
                <h6 className="text-muted mb-1">
                  <i className="bi bi-person-bounding-box me-2"></i>Latest Weight
                </h6>
                <h2 className="fw-bold mb-0">
                  {latestWeight ? latestWeight : profile.weight} kg
                </h2>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <div className="card shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-gear me-2"></i>Profile Settings
            </h5>

            {!isEditing ? (
              <p className="text-muted mb-0">
                Click <strong>Edit Profile</strong> to update your information.
              </p>
            ) : (
              <form onSubmit={handleSave} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Height (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="height"
                    value={profile.height}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    value={profile.weight}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Goal</label>
                  <select
                    className="form-select"
                    name="goal"
                    value={profile.goal}
                    onChange={handleChange}
                  >
                    <option>Fat Loss</option>
                    <option>Muscle Gain</option>
                    <option>Weight Maintenance</option>
                    <option>Strength</option>
                    <option>General Fitness</option>
                  </select>
                </div>

                <div className="col-12">
                  <button className="btn btn-success w-100">
                    <i className="bi bi-check-circle me-2"></i>Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

