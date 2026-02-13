// import { useEffect, useState } from "react";
// import { workoutPlans } from "../utils/plansData";

// export default function WorkoutPlans() {
//   const [level, setLevel] = useState("Beginner");
//   const [completed, setCompleted] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("ft_completed")) || [];
//     setCompleted(saved);
//   }, []);

//   function toggleComplete(item) {
//     let updated;

//     if (completed.includes(item)) {
//       updated = completed.filter((x) => x !== item);
//     } else {
//       updated = [...completed, item];
//     }

//     setCompleted(updated);
//     localStorage.setItem("ft_completed", JSON.stringify(updated));
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="fw-bold">Workout Plans</h2>
//       <p className="text-muted">
//         Select your level and mark workouts as completed.
//       </p>

//       <select
//         className="form-select w-auto mb-4"
//         value={level}
//         onChange={(e) => setLevel(e.target.value)}
//       >
//         <option>Beginner</option>
//         <option>Intermediate</option>
//         <option>Advanced</option>
//       </select>

//       <div className="row g-3">
//         {workoutPlans[level].map((item) => (
//           <div className="col-md-6" key={item}>
//             <div className="card shadow-sm p-3 d-flex flex-row justify-content-between align-items-center">
//               <span className={completed.includes(item) ? "text-success" : ""}>
//                 {item}
//               </span>

//               <button
//                 className={
//                   completed.includes(item)
//                     ? "btn btn-sm btn-success"
//                     : "btn btn-sm btn-outline-dark"
//                 }
//                 onClick={() => toggleComplete(item)}
//               >
//                 {completed.includes(item) ? "Completed" : "Mark Done"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function WorkoutPlans() {
//   const [completed, setCompleted] = useState(0);

//   const workouts = [
//     {
//       title: "Full Body Workout",
//       level: "Beginner",
//       time: "25 mins",
//       img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Strength Training",
//       level: "Intermediate",
//       time: "40 mins",
//       img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Cardio Burn",
//       level: "Beginner",
//       time: "30 mins",
//       img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Abs + Core",
//       level: "Intermediate",
//       time: "20 mins",
//       img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       title: "Yoga Stretch",
//       level: "All Levels",
//       time: "15 mins",
//       img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=60",    },
//     {
//       title: "HIIT Challenge",
//       level: "Advanced",
//       time: "20 mins",
//       img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=900&q=60",
//     },
//   ];

//   function markCompleted() {
//     if (completed < workouts.length) {
//       setCompleted(completed + 1);
//     }
//   }

//   const percent = Math.round((completed / workouts.length) * 100);

//   return (
//     <div className="container py-5">
//       <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//         <div>
//           <h2 className="fw-bold mb-1">
//             <i className="bi bi-bicycle me-2"></i>Workout Plans
//           </h2>
//           <p className="text-muted mb-0">
//             Choose a workout and track your completion.
//           </p>
//         </div>

//         <button onClick={markCompleted} className="btn btn-success mt-3 mt-md-0">
//           <i className="bi bi-check2-circle me-2"></i>
//           Mark Completed
//         </button>
//       </div>

//       {/* Progress */}
//       <div className="card shadow-sm rounded-4 p-4 mb-4">
//         <div className="d-flex justify-content-between">
//           <h5 className="fw-bold mb-0">Weekly Progress</h5>
//           <span className="fw-bold text-primary">{percent}%</span>
//         </div>

//         <div className="progress mt-3" style={{ height: "12px" }}>
//           <div
//             className="progress-bar progress-bar-striped progress-bar-animated"
//             style={{ width: `${percent}%` }}
//           ></div>
//         </div>

//         <p className="text-muted mt-2 mb-0">
//           Completed: {completed} / {workouts.length} workouts
//         </p>
//       </div>

//       {/* Workout Cards */}
//       <div className="row g-4">
//         {workouts.map((w) => (
//           <div className="col-md-4" key={w.title}>
//             <div className="card shadow-sm hover-card rounded-4 overflow-hidden">
//               <img
//                 src={w.img}
//                 alt={w.title}
//                 style={{ height: "160px", objectFit: "cover" }}
//               />

//               <div className="card-body p-4">
//                 <h5 className="fw-bold">{w.title}</h5>

//                 <p className="text-muted mb-2">
//                   <i className="bi bi-bar-chart-fill me-2"></i>
//                   Level: {w.level}
//                 </p>

//                 <p className="text-muted mb-3">
//                   <i className="bi bi-clock me-2"></i>
//                   Duration: {w.time}
//                 </p>

//                 <button className="btn btn-primary w-100">
//                   <i className="bi bi-play-circle me-2"></i>
//                   Start Workout
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

import gobletSquatImg from "../assets/goblet-squat.jpg";
import pushupsImg from "../assets/pushups.jpg";
import shoulderPressImg from "../assets/shoulder-press.jpg";
import DumbbellGluteBridgeImg from "../assets/Dumbbell-Glute-Bridge.jpg";
import PlankHoldImg from "../assets/Plank-Hold.jpg";
import DumbbellBicepCurlImg from "../assets/Dumbbell-Bicep-Curl.jpg";

import lungesImg from "../assets/lunges.jpg";
import inclinePressImg from "../assets/incline-press.jpg";
import dumbbellRowImg from "../assets/dumbbell-row.jpg";
import DumbbellRomanianDeadliftImg from "../assets/Dumbbell-Romanian-Deadlift.jpg";
import DumbbellChestFlyImg from "../assets/Dumbbell-Chest-Fly.jpg";
import ArnoldPressImg from "../assets/Arnold-Press.jpg";

import deadliftImg from "../assets/deadlift.jpg";
import pullupsImg from "../assets/pullups.jpg";
import barbellSquatImg from "../assets/barbell-squat.jpg";
import BarbellBenchPressImg from "../assets/Barbell-Bench-Press.jpg";
import BarbellOverheadPressImg from "../assets/Barbell-Overhead-Press.jpg";
import WeightedDipsImg from "../assets/Weighted-Dips.jpg";

export default function WorkoutPlans() {
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  // Completed workouts stored as array of ids
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  // Load completed workouts from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fittrack_completed")) || [];
    setCompletedWorkouts(saved);
  }, []);

  // Save completed workouts to localStorage
  useEffect(() => {
    localStorage.setItem(
      "fittrack_completed",
      JSON.stringify(completedWorkouts),
    );
  }, [completedWorkouts]);

  const workouts = [
    // ================= BEGINNER (3) =================
    {
      id: "beginner-1",
      level: "Beginner",
      title: "Goblet Squat (Dumbbell)",
      sets: "3 sets × 15 reps",
      rest: "1–2 minutes rest between sets",
      img: gobletSquatImg,
    },
    {
      id: "beginner-2",
      level: "Beginner",
      title: "Push-ups (Knee/Normal)",
      sets: "3 sets × 12 reps",
      rest: "1–2 minutes rest between sets",
      img: pushupsImg,
    },
    {
      id: "beginner-3",
      level: "Beginner",
      title: "Dumbbell Shoulder Press",
      sets: "3 sets × 12 reps",
      rest: "1–2 minutes rest between sets",
      img: shoulderPressImg,
    },
    {
      id: "beginner-4",
      level: "Beginner",
      title: "Dumbbell Glute Bridge",
      sets: "3 sets × 15 reps",
      rest: "1–2 minutes rest between sets",
      img: DumbbellGluteBridgeImg,
    },
    {
      id: "beginner-5",
      level: "Beginner",
      title: "Plank Hold",
      sets: "3 sets × 30 sec",
      rest: "45–60 sec rest between sets",
      img: PlankHoldImg,
    },
    {
      id: "beginner-6",
      level: "Beginner",
      title: "Dumbbell Bicep Curl",
      sets: "3 sets × 12 reps",
      rest: "1–2 minutes rest between sets",
      img: DumbbellBicepCurlImg,
    },

    // ================= INTERMEDIATE (3) =================
    {
      id: "intermediate-1",
      level: "Intermediate",
      title: "Dumbbell Lunges",
      sets: "4 sets × 12 reps",
      rest: "1–2 minutes rest between sets",
      img: lungesImg,
    },
    {
      id: "intermediate-2",
      level: "Intermediate",
      title: "Incline Dumbbell Press",
      sets: "4 sets × 10 reps",
      rest: "1–2 minutes rest between sets",
      img: inclinePressImg,
    },
    {
      id: "intermediate-3",
      level: "Intermediate",
      title: "Bent Over Dumbbell Rows",
      sets: "4 sets × 12 reps",
      rest: "1–2 minutes rest between sets",
      img: dumbbellRowImg,
    },
    {
      id: "intermediate-4",
      level: "Intermediate",
      title: "Dumbbell Romanian Deadlift",
      sets: "4 sets × 10 reps",
      rest: "1–2 minutes rest between sets",
      img: DumbbellRomanianDeadliftImg,
    },
    {
      id: "intermediate-5",
      level: "Intermediate",
      title: "Dumbbell Chest Fly",
      sets: "4 sets × 12 reps",
      rest: "1–2 minutes rest between sets",
      img: DumbbellChestFlyImg,
    },
    {
      id: "intermediate-6",
      level: "Intermediate",
      title: "Arnold Press",
      sets: "4 sets × 10 reps",
      rest: "1–2 minutes rest between sets",
      img: ArnoldPressImg,
    },

    // ================= ADVANCED (3) =================
    {
      id: "advanced-1",
      level: "Advanced",
      title: "Barbell Deadlift",
      sets: "5 sets × 6 reps",
      rest: "2–3 minutes rest between sets",
      img: deadliftImg,
    },
    {
      id: "advanced-2",
      level: "Advanced",
      title: "Pull-ups (Weighted if possible)",
      sets: "5 sets × 8 reps",
      rest: "2–3 minutes rest between sets",
      img: pullupsImg,
    },
    {
      id: "advanced-3",
      level: "Advanced",
      title: "Barbell Squats",
      sets: "5 sets × 8 reps",
      rest: "2–3 minutes rest between sets",
      img: barbellSquatImg,
    },
    {
      id: "advanced-4",
      level: "Advanced",
      title: "Barbell Bench Press",
      sets: "5 sets × 6 reps",
      rest: "2–3 minutes rest between sets",
      img: BarbellBenchPressImg,
    },
    {
      id: "advanced-5",
      level: "Advanced",
      title: "Barbell Overhead Press",
      sets: "5 sets × 8 reps",
      rest: "2–3 minutes rest between sets",
      img: BarbellOverheadPressImg,
    },
    {
      id: "advanced-6",
      level: "Advanced",
      title: "Weighted Dips",
      sets: "5 sets × 8 reps",
      rest: "2–3 minutes rest between sets",
      img: WeightedDipsImg,
    },
  ];

  // Filter by selected level
  const filteredWorkouts = workouts.filter((w) => w.level === selectedLevel);

  // Completion progress (all workouts)
  const totalWorkouts = workouts.length;
  const completedCount = completedWorkouts.length;
  const percent = Math.round((completedCount / totalWorkouts) * 100);

  function handleCompleteWorkout(id) {
    if (!completedWorkouts.includes(id)) {
      setCompletedWorkouts([id, ...completedWorkouts]);
    }
  }

  function resetAllProgress() {
    setCompletedWorkouts([]);
    localStorage.removeItem("fittrack_completed");
  }

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-1">
            <i className="bi bi-bicycle me-2"></i>Workout Plans
          </h2>
          <p className="text-muted mb-0">
            Select your level and complete workouts one by one.
          </p>
        </div>

        <button
          onClick={resetAllProgress}
          className="btn btn-outline-danger mt-3 mt-md-0"
        >
          <i className="bi bi-arrow-counterclockwise me-2"></i>
          Reset Progress
        </button>
      </div>

      {/* Progress */}
      <div className="card shadow-sm rounded-4 p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0">Overall Progress</h5>
          <span className="fw-bold text-primary">{percent}%</span>
        </div>

        <div className="progress mt-3" style={{ height: "12px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <p className="text-muted mt-2 mb-0">
          Completed: {completedCount} / {totalWorkouts} workouts
        </p>
      </div>

      {/* Level Select */}
      <div className="card shadow-sm rounded-4 p-4 mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <label className="form-label fw-semibold mb-1">
              Select Workout Level
            </label>
            <select
              className="form-select"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div className="col-md-8">
            <div className="alert alert-light border mb-0">
              Showing workouts for: <b className="text-dark">{selectedLevel}</b>
            </div>
          </div>
        </div>
      </div>

      {/* Workout Cards */}
      <div className="row g-4">
        {filteredWorkouts.map((w) => {
          const isDone = completedWorkouts.includes(w.id);

          return (
            <div className="col-md-4" key={w.id}>
              <div className="card workout-card rounded-4 overflow-hidden h-100">
                <div className="workout-img-box">
                  <img src={w.img} alt={w.title} className="workout-img" />
                </div>

                {/* Content */}
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="fw-bold">{w.title}</h5>

                  <p className="text-muted mb-2">
                    <i className="bi bi-dumbbell me-2"></i>
                    {w.sets}
                  </p>

                  <p className="text-muted mb-2 small">
                    <i className="bi bi-clock-history me-2"></i>
                    {w.rest}
                  </p>

                  <p className="text-muted mb-3">
                    <i className="bi bi-bar-chart-fill me-2"></i>
                    Level: <b>{w.level}</b>
                  </p>
                  {/* Button */}
                  <button
                    className={`btn w-100 mt-auto workout-btn ${
                      isDone ? "btn-success done" : "btn-primary"
                    }`}
                    onClick={() => handleCompleteWorkout(w.id)}
                    disabled={isDone}
                  >
                    {isDone ? (
                      <>
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Completed
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check2-circle me-2"></i>
                        Complete this workout
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
