// import { useState } from "react";
// import { dietPlans } from "../utils/plansData";

// export default function DietPlanner() {
//   const [goal, setGoal] = useState("Weight Loss");
//   const plan = dietPlans[goal];

//   return (
//     <div className="container py-5">
//       <h2 className="fw-bold">Diet Planner</h2>
//       <p className="text-muted">Select your goal to see a diet plan.</p>

//       <select
//         className="form-select w-auto mb-4"
//         value={goal}
//         onChange={(e) => setGoal(e.target.value)}
//       >
//         <option>Weight Loss</option>
//         <option>Muscle Gain</option>
//         <option>Maintenance</option>
//       </select>

//       <div className="row g-3">
//         {Object.keys(plan).map((meal) => (
//           <div className="col-md-6" key={meal}>
//             <div className="card shadow-sm p-4">
//               <h5 className="fw-bold">{meal}</h5>
//               <p className="mb-0 text-muted">{plan[meal]}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// export default function DietPlanner() {
//   const [meals, setMeals] = useState([]);
//   const [mealName, setMealName] = useState("");
//   const [mealType, setMealType] = useState("Breakfast");
//   const [calories, setCalories] = useState("");
//   const [protein, setProtein] = useState("");

//   // Load from localStorage
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("fittrack_meals")) || [];
//     setMeals(saved);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("fittrack_meals", JSON.stringify(meals));
//   }, [meals]);

//   const defaultMeals = [
//     {
//       type: "Breakfast",
//       name: "Oats + Banana + Milk",
//       calories: 350,
//       protein: 14,
//       img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       type: "Lunch",
//       name: "Rice + Dal + Salad",
//       calories: 550,
//       protein: 18,
//       img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=60",
//     },
//     {
//       type: "Dinner",
//       name: "Roti + Paneer + Veggies",
//       calories: 600,
//       protein: 25,
//       img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=900",
//     },
//     {
//       type: "Snacks",
//       name: "Dry Fruits + Green Tea",
//       calories: 200,
//       protein: 6,
//       img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=900&q=60",
//     },
//   ];

//   // If no meals, show default meals once
//   useEffect(() => {
//     if (meals.length === 0) {
//       setMeals(defaultMeals);
//     }
//     // eslint-disable-next-line
//   }, []);

//   function handleAddMeal(e) {
//     e.preventDefault();

//     if (!mealName || !calories || !protein) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const newMeal = {
//       type: mealType,
//       name: mealName,
//       calories: Number(calories),
//       protein: Number(protein),
//       img: getMealImage(mealType),
//     };

//     setMeals([newMeal, ...meals]);

//     setMealName("");
//     setCalories("");
//     setProtein("");
//     setMealType("Breakfast");
//   }

//   function deleteMeal(index) {
//     const updated = meals.filter((_, i) => i !== index);
//     setMeals(updated);
//   }

//   function getMealImage(type) {
//     if (type === "Breakfast")
//       return "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=60";

//     if (type === "Lunch")
//       return "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=60";

//     if (type === "Dinner")
//       return "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=900";

//     if(type === "Snacks")
//     return "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=900&q=60";
//   }

//   const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
//   const totalProtein = meals.reduce((sum, m) => sum + m.protein, 0);

//   return (
//     <div className="container py-5">
//       <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//         <div>
//           <h2 className="fw-bold mb-1">
//             <i className="bi bi-egg-fried me-2"></i>Diet Planner
//           </h2>
//           <p className="text-muted mb-0">
//             Plan your meals and track calories & protein.
//           </p>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="row g-3 mb-4">
//         <div className="col-md-6">
//           <div className="card shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-1">
//               <i className="bi bi-fire me-2 text-danger"></i>Total Calories
//             </h5>
//             <h2 className="fw-bold text-danger mb-0">{totalCalories} kcal</h2>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-1">
//               <i className="bi bi-lightning-charge me-2 text-primary"></i>
//               Total Protein
//             </h5>
//             <h2 className="fw-bold text-primary mb-0">{totalProtein} g</h2>
//           </div>
//         </div>
//       </div>

//       {/* Add Meal Form */}
//       <div className="card shadow-sm rounded-4 p-4 mb-4">
//         <h5 className="fw-bold mb-3">
//           <i className="bi bi-plus-circle me-2"></i>Add a Meal
//         </h5>

//         <form onSubmit={handleAddMeal} className="row g-3">
//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Meal Type</label>
//             <select
//               className="form-select"
//               value={mealType}
//               onChange={(e) => setMealType(e.target.value)}
//             >
//               <option>Breakfast</option>
//               <option>Lunch</option>
//               <option>Dinner</option>
//               <option>Snacks</option>
//             </select>
//           </div>

//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Meal Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={mealName}
//               onChange={(e) => setMealName(e.target.value)}
//               placeholder="Eg: Chicken Salad"
//             />
//           </div>

//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Calories (kcal)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={calories}
//               onChange={(e) => setCalories(e.target.value)}
//               placeholder="Eg: 450"
//             />
//           </div>

//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Protein (g)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={protein}
//               onChange={(e) => setProtein(e.target.value)}
//               placeholder="Eg: 25"
//             />
//           </div>

//           <div className="col-12">
//             <button className="btn btn-success w-100">
//               <i className="bi bi-check2-circle me-2"></i>
//               Add Meal
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Meal Cards */}
//       <div className="row g-4">
//         {meals.map((m, index) => (
//           <div className="col-md-4" key={index}>
//             <div className="card shadow-sm hover-card rounded-4 overflow-hidden">
//               <img
//                 src={m.img}
//                 alt={m.name}
//                 style={{ height: "160px", objectFit: "cover" }}
//               />

//               <div className="card-body p-4">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span className="badge bg-dark">{m.type}</span>
//                   <button
//                     className="btn btn-sm btn-outline-danger"
//                     onClick={() => deleteMeal(index)}
//                   >
//                     <i className="bi bi-trash"></i>
//                   </button>
//                 </div>

//                 <h5 className="fw-bold mt-2">{m.name}</h5>

//                 <p className="text-muted mb-1">
//                   <i className="bi bi-fire me-2 text-danger"></i>
//                   Calories: <b>{m.calories}</b> kcal
//                 </p>

//                 <p className="text-muted mb-0">
//                   <i className="bi bi-lightning-charge me-2 text-primary"></i>
//                   Protein: <b>{m.protein}</b> g
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";

// // Local Images
// import breakfastImg from "../assets/breakfast.jpg";
// import lunchImg from "../assets/lunch.jpg";
// import dinnerImg from "../assets/dinner.jpg";
// import snacksImg from "../assets/snacks.jpg";

// export default function DietPlanner() {
//   const [meals, setMeals] = useState([]);
//   const [mealName, setMealName] = useState("");
//   const [mealType, setMealType] = useState("Breakfast");
//   const [calories, setCalories] = useState("");
//   const [protein, setProtein] = useState("");

//   const [search, setSearch] = useState("");
//   const [filterType, setFilterType] = useState("All");

//   // Load from localStorage
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("fittrack_meals")) || [];
//     setMeals(saved);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("fittrack_meals", JSON.stringify(meals));
//   }, [meals]);

//   // Default meals
//   const defaultMeals = [
//     {
//       type: "Breakfast",
//       name: "Oats + Banana + Milk",
//       calories: 350,
//       protein: 14,
//       img: breakfastImg,
//     },
//     {
//       type: "Lunch",
//       name: "Rice + Dal + Salad",
//       calories: 550,
//       protein: 18,
//       img: lunchImg,
//     },
//     {
//       type: "Dinner",
//       name: "Roti + Paneer + Veggies",
//       calories: 600,
//       protein: 25,
//       img: dinnerImg,
//     },
//     {
//       type: "Snacks",
//       name: "Dry Fruits + Green Tea",
//       calories: 200,
//       protein: 6,
//       img: snacksImg,
//     },
//   ];

//   // If no meals, show default meals once
//   useEffect(() => {
//     if (meals.length === 0) {
//       setMeals(defaultMeals);
//     }
//     // eslint-disable-next-line
//   }, []);

//   function getMealImage(type) {
//     if (type === "Breakfast") return breakfastImg;
//     if (type === "Lunch") return lunchImg;
//     if (type === "Dinner") return dinnerImg;
//     return snacksImg;
//   }

//   function handleAddMeal(e) {
//     e.preventDefault();

//     if (!mealName || !calories || !protein) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const newMeal = {
//       type: mealType,
//       name: mealName,
//       calories: Number(calories),
//       protein: Number(protein),
//       img: getMealImage(mealType),
//     };

//     setMeals([newMeal, ...meals]);

//     setMealName("");
//     setCalories("");
//     setProtein("");
//     setMealType("Breakfast");
//   }

//   function deleteMeal(index) {
//     const updated = meals.filter((_, i) => i !== index);
//     setMeals(updated);
//   }

//   // Filter + Search
//   const filteredMeals = meals.filter((m) => {
//     const matchType = filterType === "All" ? true : m.type === filterType;
//     const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
//     return matchType && matchSearch;
//   });

//   const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
//   const totalProtein = meals.reduce((sum, m) => sum + m.protein, 0);

//   return (
//     <div className="container py-5">
//       {/* Header */}
//       <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
//         <div>
//           <h2 className="fw-bold mb-1">
//             <i className="bi bi-egg-fried me-2"></i>Diet Planner
//           </h2>
//           <p className="text-muted mb-0">
//             Plan your meals and track calories & protein.
//           </p>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="row g-3 mb-4">
//         {/* <div className="col-md-6">
//           <div className="card shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-1">
//               <i className="bi bi-fire me-2 text-danger"></i>Total Calories
//             </h5>
//             <h2 className="fw-bold text-danger mb-0">{totalCalories} kcal</h2>
//           </div>
//         </div> */}

//         {/* <div className="col-md-6">
//           <div className="card shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-1">
//               <i className="bi bi-lightning-charge me-2 text-primary"></i>
//               Total Protein
//             </h5>
//             <h2 className="fw-bold text-primary mb-0">{totalProtein} g</h2>
//           </div>
//         </div> */}
//       </div>

//       {/* Controls */}
//       <div className="card shadow-sm rounded-4 p-4 mb-4">
//         <div className="row g-3">
//           <div className="col-md-6">
//             <label className="form-label fw-semibold">Search Meal</label>
//             <input
//               className="form-control"
//               placeholder="Search by meal name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6">
//             <label className="form-label fw-semibold">Filter by Type</label>
//             <select
//               className="form-select"
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//             >
//               <option>All</option>
//               <option>Breakfast</option>
//               <option>Lunch</option>
//               <option>Dinner</option>
//               <option>Snacks</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Add Meal Form */}
//       <div className="card shadow-sm rounded-4 p-4 mb-4">
//         <h5 className="fw-bold mb-3">
//           <i className="bi bi-plus-circle me-2"></i>Add a Meal
//         </h5>

//         <form onSubmit={handleAddMeal} className="row g-3">
//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Meal Type</label>
//             <select
//               className="form-select"
//               value={mealType}
//               onChange={(e) => setMealType(e.target.value)}
//             >
//               <option>Breakfast</option>
//               <option>Lunch</option>
//               <option>Dinner</option>
//               <option>Snacks</option>
//             </select>
//           </div>

//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Meal Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={mealName}
//               onChange={(e) => setMealName(e.target.value)}
//               placeholder="Eg: Chicken Salad"
//             />
//           </div>

//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Calories (kcal)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={calories}
//               onChange={(e) => setCalories(e.target.value)}
//               placeholder="Eg: 450"
//             />
//           </div>

//           <div className="col-md-3">
//             <label className="form-label fw-semibold">Protein (g)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={protein}
//               onChange={(e) => setProtein(e.target.value)}
//               placeholder="Eg: 25"
//             />
//           </div>

//           <div className="col-12">
//             <button className="btn btn-success w-100">
//               <i className="bi bi-check2-circle me-2"></i>
//               Add Meal
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Meal Cards */}
//       <div className="row g-4">
//         {filteredMeals.length === 0 ? (
//           <p className="text-muted">No meals found.</p>
//         ) : (
//           filteredMeals.map((m, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card shadow-sm hover-card rounded-4 overflow-hidden">
//                 <img
//                   src={m.img}
//                   alt={m.name}
//                   style={{ height: "170px", objectFit: "cover" }}
//                 />

//                 <div className="card-body p-4">
//                   <div className="d-flex justify-content-between align-items-center">
//                     <span className="badge bg-dark">{m.type}</span>
//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() => deleteMeal(index)}
//                     >
//                       <i className="bi bi-trash"></i>
//                     </button>
//                   </div>

//                   <h5 className="fw-bold mt-2">{m.name}</h5>

//                   <p className="text-muted mb-1">
//                     <i className="bi bi-fire me-2 text-danger"></i>
//                     Calories: <b>{m.calories}</b> kcal
//                   </p>

//                   <p className="text-muted mb-0">
//                     <i className="bi bi-lightning-charge me-2 text-primary"></i>
//                     Protein: <b>{m.protein}</b> g
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";

// // Local Images
// import breakfastImg from "../assets/breakfast.jpg";
// import lunchImg from "../assets/lunch.jpg";
// import dinnerImg from "../assets/dinner.jpg";
// import snacksImg from "../assets/snacks.jpg";

// export default function DietPlanner() {
//   const [meals, setMeals] = useState([]);

//   // NOW: search will work for Breakfast/Lunch/Dinner/Snacks
//   const [search, setSearch] = useState("");
//   const [filterType, setFilterType] = useState("All");

//   // Load from localStorage
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("fittrack_meals")) || [];
//     setMeals(saved);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("fittrack_meals", JSON.stringify(meals));
//   }, [meals]);

//   // Default meals
//   const defaultMeals = [
//     {
//       type: "Breakfast",
//       name: "Oats + Banana + Milk",
//       calories: 350,
//       protein: 14,
//       img: breakfastImg,
//     },
//     {
//       type: "Lunch",
//       name: "Rice + Dal + Salad",
//       calories: 550,
//       protein: 18,
//       img: lunchImg,
//     },
//     {
//       type: "Dinner",
//       name: "Roti + Paneer + Veggies",
//       calories: 600,
//       protein: 25,
//       img: dinnerImg,
//     },
//     {
//       type: "Snacks",
//       name: "Dry Fruits + Green Tea",
//       calories: 200,
//       protein: 6,
//       img: snacksImg,
//     },
//   ];

//   // If no meals, show default meals once
//   useEffect(() => {
//     if (meals.length === 0) {
//       setMeals(defaultMeals);
//     }
//     // eslint-disable-next-line
//   }, []);

//   function deleteMeal(index) {
//     const updated = meals.filter((_, i) => i !== index);
//     setMeals(updated);
//   }

//   // Filter + Search (UPDATED)
//   // Search will match meal TYPE now
//   const filteredMeals = meals.filter((m) => {
//     const matchType = filterType === "All" ? true : m.type === filterType;
//     const matchSearch = m.type.toLowerCase().includes(search.toLowerCase());
//     return matchType && matchSearch;
//   });

//   const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
//   const totalProtein = meals.reduce((sum, m) => sum + m.protein, 0);

//   return (
//     <div className="container py-5">
//       {/* Header */}
//       <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
//         <div>
//           <h2 className="fw-bold mb-1">
//             <i className="bi bi-egg-fried me-2"></i>Diet Planner
//           </h2>
//           <p className="text-muted mb-0">
//             Plan your meals and track calories & protein.
//           </p>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="row g-3 mb-4">
//         <div className="col-md-6">
//           <div className="card shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-1">
//               <i className="bi bi-fire me-2 text-danger"></i>Total Calories
//             </h5>
//             <h2 className="fw-bold text-danger mb-0">{totalCalories} kcal</h2>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-1">
//               <i className="bi bi-lightning-charge me-2 text-primary"></i>
//               Total Protein
//             </h5>
//             <h2 className="fw-bold text-primary mb-0">{totalProtein} g</h2>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="card shadow-sm rounded-4 p-4 mb-4">
//         <div className="row g-3">
//           <div className="col-md-6">
//             <label className="form-label fw-semibold">Search Meal Type</label>
//             <input
//               className="form-control"
//               placeholder="Search: Breakfast / Lunch / Dinner / Snacks"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <div className="col-md-6">
//             <label className="form-label fw-semibold">Filter by Type</label>
//             <select
//               className="form-select"
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//             >
//               <option>All</option>
//               <option>Breakfast</option>
//               <option>Lunch</option>
//               <option>Dinner</option>
//               <option>Snacks</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Meal Cards */}
//       <div className="row g-4">
//         {filteredMeals.length === 0 ? (
//           <p className="text-muted">No meals found.</p>
//         ) : (
//           filteredMeals.map((m, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card shadow-sm hover-card rounded-4 overflow-hidden">
//                 <img
//                   src={m.img}
//                   alt={m.name}
//                   style={{ height: "170px", objectFit: "cover" }}
//                 />

//                 <div className="card-body p-4">
//                   <div className="d-flex justify-content-between align-items-center">
//                     <span className="badge bg-dark">{m.type}</span>

//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() => deleteMeal(index)}
//                     >
//                       <i className="bi bi-trash"></i>
//                     </button>
//                   </div>

//                   <h5 className="fw-bold mt-2">{m.name}</h5>

//                   <p className="text-muted mb-1">
//                     <i className="bi bi-fire me-2 text-danger"></i>
//                     Calories: <b>{m.calories}</b> kcal
//                   </p>

//                   <p className="text-muted mb-0">
//                     <i className="bi bi-lightning-charge me-2 text-primary"></i>
//                     Protein: <b>{m.protein}</b> g
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";

// Local Images
import breakfastImg from "../assets/breakfast.jpg";
import lunchImg from "../assets/lunch.jpg";
import dinnerImg from "../assets/dinner.jpg";
import snacksImg from "../assets/snacks.jpg";

export default function DietPlanner() {
  const [meals, setMeals] = useState([]);

  // Search by meal type
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fittrack_meals")) || [];
    setMeals(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("fittrack_meals", JSON.stringify(meals));
  }, [meals]);

  // Default meals
  const defaultMeals = [
    {
      type: "Breakfast",
      name: "Oats + Banana + Milk",
      calories: 350,
      protein: 14,
      img: breakfastImg,
    },
    {
      type: "Lunch",
      name: "Rice + Dal + Salad",
      calories: 550,
      protein: 18,
      img: lunchImg,
    },
    {
      type: "Dinner",
      name: "Roti + Paneer + Veggies",
      calories: 600,
      protein: 25,
      img: dinnerImg,
    },
    {
      type: "Snacks",
      name: "Dry Fruits + Green Tea",
      calories: 200,
      protein: 6,
      img: snacksImg,
    },
  ];

  // If no meals, show default meals once
  useEffect(() => {
    if (meals.length === 0) {
      setMeals(defaultMeals);
    }
    // eslint-disable-next-line
  }, []);

  // Filter + Search
  const filteredMeals = meals.filter((m) => {
    const matchType = filterType === "All" ? true : m.type === filterType;
    const matchSearch = m.type.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            <i className="bi bi-egg-fried me-2"></i>Diet Planner
          </h2>
          <p className="text-muted mb-0">
            Search meals by type and view your daily plan.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="card shadow-sm rounded-4 p-4 mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Search Meal Type</label>
            <input
              className="form-control"
              placeholder="Search: Breakfast / Lunch / Dinner / Snacks"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Filter by Type</label>
            <select
              className="form-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option>All</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snacks</option>
            </select>
          </div>
        </div>
      </div>

      {/* Meal Cards */}
      <div className="row g-4">
        {filteredMeals.length === 0 ? (
          <p className="text-muted">No meals found.</p>
        ) : (
          filteredMeals.map((m, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm hover-card rounded-4 overflow-hidden">
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", 
                      background: "#f8f9fa",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="card-body p-4">
                  <span className="badge bg-dark">{m.type}</span>

                  <h5 className="fw-bold mt-3">{m.name}</h5>

                  <p className="text-muted mb-1">
                    <i className="bi bi-fire me-2 text-danger"></i>
                    Calories: <b>{m.calories}</b> kcal
                  </p>

                  <p className="text-muted mb-0">
                    <i className="bi bi-lightning-charge me-2 text-primary"></i>
                    Protein: <b>{m.protein}</b> g
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
