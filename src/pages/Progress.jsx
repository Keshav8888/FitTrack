// import { useEffect, useMemo, useState } from "react";
// import ProgressChart from "../components/ProgressChart";

// export default function Progress() {
//   const [weight, setWeight] = useState("");
//   const [calories, setCalories] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("ft_progress")) || [];
//     setData(saved);
//   }, []);

//   const chartData = useMemo(() => {
//     // Chart should show oldest -> newest
//     return [...data].reverse();
//   }, [data]);

//   function addProgress(e) {
//     e.preventDefault();

//     if (!weight) return;

//     const newEntry = {
//       id: Date.now(),
//       date: new Date().toLocaleDateString(),
//       weight: Number(weight),
//       calories: Number(calories || 0),
//     };

//     const updated = [newEntry, ...data].slice(0, 7);

//     setData(updated);
//     localStorage.setItem("ft_progress", JSON.stringify(updated));

//     setWeight("");
//     setCalories("");
//   }

//   function deleteEntry(id) {
//     const updated = data.filter((x) => x.id !== id);
//     setData(updated);
//     localStorage.setItem("ft_progress", JSON.stringify(updated));
//   }

//   function clearAll() {
//     if (!confirm("Clear all progress data?")) return;
//     setData([]);
//     localStorage.removeItem("ft_progress");
//   }

//   return (
//     <div className="container py-5">
//       <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
//         <div>
//           <h2 className="fw-bold">Progress Tracker</h2>
//           <p className="text-muted mb-0">
//             Track your weekly weight and calories.
//           </p>
//         </div>

//         {data.length > 0 && (
//           <button className="btn btn-outline-danger" onClick={clearAll}>
//             Clear All
//           </button>
//         )}
//       </div>

//       <div className="row g-3 mt-3">
//         <div className="col-md-4">
//           <div className="card shadow-sm p-4">
//             <h5 className="fw-bold mb-3">Add Today’s Data</h5>

//             <form onSubmit={addProgress}>
//               <input
//                 className="form-control mb-3"
//                 placeholder="Weight (kg)"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//               />

//               <input
//                 className="form-control mb-3"
//                 placeholder="Calories (optional)"
//                 value={calories}
//                 onChange={(e) => setCalories(e.target.value)}
//               />

//               <button className="btn btn-dark w-100">Save</button>
//             </form>
//           </div>
//         </div>

//         <div className="col-md-8">
//           <div className="card shadow-sm p-4">
//             {data.length === 0 ? (
//               <p className="text-muted mb-0">
//                 No progress data yet. Add your first entry.
//               </p>
//             ) : (
//               <ProgressChart data={chartData} />
//             )}
//           </div>
//         </div>
//       </div>

//       {data.length > 0 && (
//         <div className="card shadow-sm p-4 mt-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h5 className="fw-bold mb-0">Last Entries</h5>
//             <span className="text-muted">Showing last 7 days</span>
//           </div>

//           <div className="table-responsive">
//             <table className="table mt-3">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Weight</th>
//                   <th>Calories</th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((x) => (
//                   <tr key={x.id}>
//                     <td>{x.date}</td>
//                     <td>{x.weight} kg</td>
//                     <td>{x.calories}</td>
//                     <td className="text-end">
//                       <button
//                         className="btn btn-sm btn-outline-danger"
//                         onClick={() => deleteEntry(x.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Progress() {
  const [progressData, setProgressData] = useState([]);

  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [workouts, setWorkouts] = useState("");
  const [water, setWater] = useState("");

  // Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fittrack_progress")) || [];
    setProgressData(saved);
  }, []);

  // Save whenever progressData changes
  useEffect(() => {
    localStorage.setItem("fittrack_progress", JSON.stringify(progressData));
  }, [progressData]);

  function addProgress(e) {
    e.preventDefault();

    if (!date || !weight || !workouts || !water) {
      alert("Please fill all fields!");
      return;
    }

    const newEntry = {
      date,
      weight: Number(weight),
      workouts: Number(workouts),
      water: Number(water),
    };

    setProgressData([newEntry, ...progressData]);

    setDate("");
    setWeight("");
    setWorkouts("");
    setWater("");
  }

  function deleteEntry(index) {
    const updated = progressData.filter((_, i) => i !== index);
    setProgressData(updated);
  }

  function clearAll() {
    if (confirm("Are you sure you want to clear all progress?")) {
      setProgressData([]);
      localStorage.removeItem("fittrack_progress");
    }
  }

  // Stats
  const totalWorkouts = progressData.reduce((sum, p) => sum + p.workouts, 0);
  const avgWater =
    progressData.length > 0
      ? (
          progressData.reduce((sum, p) => sum + p.water, 0) / progressData.length
        ).toFixed(1)
      : 0;

  const latestWeight = progressData.length > 0 ? progressData[0].weight : 0;

  // Chart needs data in correct order (old -> new)
  const chartData = [...progressData].reverse();

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-1">
            <i className="bi bi-graph-up-arrow me-2"></i>Progress Tracker
          </h2>
          <p className="text-muted mb-0">
            Track your weight, workouts, and water intake daily.
          </p>
        </div>

        {progressData.length > 0 && (
          <button onClick={clearAll} className="btn btn-outline-danger mt-3 mt-md-0">
            <i className="bi bi-trash me-2"></i>Clear All
          </button>
        )}
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm rounded-4 p-4">
            <h6 className="text-muted mb-1">
              <i className="bi bi-person-bounding-box me-2"></i>Latest Weight
            </h6>
            <h2 className="fw-bold mb-0">{latestWeight} kg</h2>
          </div>
        </div>

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
      </div>

      {/* Chart */}
      <div className="card shadow-sm rounded-4 p-4 mb-4">
        <h5 className="fw-bold mb-3">
          <i className="bi bi-activity me-2"></i>Weight Progress Chart
        </h5>

        {progressData.length === 0 ? (
          <p className="text-muted mb-0">
            No progress added yet. Add your first entry below 👇
          </p>
        ) : (
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Add Progress Form */}
      <div className="card shadow-sm rounded-4 p-4 mb-4">
        <h5 className="fw-bold mb-3">
          <i className="bi bi-plus-circle me-2"></i>Add Progress Entry
        </h5>

        <form onSubmit={addProgress} className="row g-3">
          <div className="col-md-3">
            <label className="form-label fw-semibold">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-semibold">Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Eg: 65"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-semibold">Workouts Done</label>
            <input
              type="number"
              className="form-control"
              value={workouts}
              onChange={(e) => setWorkouts(e.target.value)}
              placeholder="Eg: 1"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-semibold">Water (Litres)</label>
            <input
              type="number"
              className="form-control"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              placeholder="Eg: 2.5"
              step="0.1"
            />
          </div>

          <div className="col-12">
            <button className="btn btn-primary w-100">
              <i className="bi bi-check2-circle me-2"></i>
              Save Progress
            </button>
          </div>
        </form>
      </div>

      {/* Entries Table */}
      {progressData.length > 0 && (
        <div className="card shadow-sm rounded-4 p-4">
          <h5 className="fw-bold mb-3">
            <i className="bi bi-list-check me-2"></i>Progress History
          </h5>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Weight</th>
                  <th>Workouts</th>
                  <th>Water</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {progressData.map((p, index) => (
                  <tr key={index}>
                    <td>{p.date}</td>
                    <td>{p.weight} kg</td>
                    <td>{p.workouts}</td>
                    <td>{p.water} L</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteEntry(index)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

