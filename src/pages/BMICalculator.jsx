// // import { useState } from "react";
// // import { calculateBMI, bmiCategory } from "../utils/bmi";

// // export default function BMICalculator() {
// //   const [weight, setWeight] = useState("");
// //   const [height, setHeight] = useState("");
// //   const [result, setResult] = useState(null);

// //   function handleCalc(e) {
// //     e.preventDefault();

// //     const w = Number(weight);
// //     const h = Number(height);

// //     if (!w || !h) return;

// //     const bmi = calculateBMI(w, h);
// //     const category = bmiCategory(bmi);

// //     setResult({ bmi, category });
// //   }

// //   return (
// //     <div className="container py-5">
// //       <h2 className="fw-bold">BMI Calculator</h2>
// //       <p className="text-muted">
// //         Enter your height and weight to calculate BMI.
// //       </p>

// //       <div className="row">
// //         <div className="col-md-5">
// //           <div className="card shadow-sm p-4">
// //             <form onSubmit={handleCalc}>
// //               <input
// //                 className="form-control mb-3"
// //                 placeholder="Weight (kg)"
// //                 value={weight}
// //                 onChange={(e) => setWeight(e.target.value)}
// //               />

// //               <input
// //                 className="form-control mb-3"
// //                 placeholder="Height (cm)"
// //                 value={height}
// //                 onChange={(e) => setHeight(e.target.value)}
// //               />

// //               <button className="btn btn-dark w-100">Calculate</button>
// //             </form>

// //             {result && (
// //               <div className="alert alert-success mt-3">
// //                 <b>BMI:</b> {result.bmi} <br />
// //                 <b>Category:</b> {result.category}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";

// export default function BMICalculator() {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBmi] = useState(null);
//   const [category, setCategory] = useState("");

//   function calculateBMI(e) {
//     e.preventDefault();

//     const h = Number(height) / 100; // cm -> meter
//     const w = Number(weight);

//     if (!h || !w || h <= 0 || w <= 0) {
//       alert("Please enter valid height and weight!");
//       return;
//     }

//     const bmiValue = (w / (h * h)).toFixed(1);
//     setBmi(bmiValue);

//     if (bmiValue < 18.5) setCategory("Underweight");
//     else if (bmiValue < 25) setCategory("Normal");
//     else if (bmiValue < 30) setCategory("Overweight");
//     else setCategory("Obese");
//   }

//   function reset() {
//     setHeight("");
//     setWeight("");
//     setBmi(null);
//     setCategory("");
//   }

//   function getBadgeClass() {
//     if (category === "Underweight") return "bg-warning text-dark";
//     if (category === "Normal") return "bg-success";
//     if (category === "Overweight") return "bg-primary";
//     if (category === "Obese") return "bg-danger";
//     return "bg-secondary";
//   }

//   return (
//     <div className="container py-5">
//       <div className="row g-4 align-items-center">
//         {/* Left Side */}
//         <div className="col-md-6">
//           <h2 className="fw-bold mb-2">
//             <i className="bi bi-calculator me-2"></i>BMI Calculator
//           </h2>
//           <p className="text-muted">
//             Enter your height and weight to calculate your BMI.
//           </p>

//           <div className="card shadow-sm rounded-4 p-4">
//             <form onSubmit={calculateBMI}>
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">
//                   Height (cm)
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={height}
//                   onChange={(e) => setHeight(e.target.value)}
//                   placeholder="Eg: 170"
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">
//                   Weight (kg)
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={weight}
//                   onChange={(e) => setWeight(e.target.value)}
//                   placeholder="Eg: 65"
//                 />
//               </div>

//               <div className="d-flex gap-2">
//                 <button type="submit" className="btn btn-primary w-100">
//                   <i className="bi bi-lightning-charge me-2"></i>
//                   Calculate
//                 </button>

//                 <button
//                   type="button"
//                   onClick={reset}
//                   className="btn btn-outline-secondary w-100"
//                 >
//                   Reset
//                 </button>
//               </div>
//             </form>

//             {/* Result */}
//             {bmi && (
//               <div className="mt-4 text-center">
//                 <h4 className="fw-bold">
//                   Your BMI:{" "}
//                   <span className="text-primary">{bmi}</span>
//                 </h4>

//                 <span className={`badge ${getBadgeClass()} px-3 py-2 mt-2`}>
//                   {category}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="col-md-6 text-center">
//           <img
//             className="img-fluid rounded-4 shadow"
//             alt="BMI"
//             src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=60"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function BMICalculator() {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBmi] = useState(null);
//   const [category, setCategory] = useState("");

//   function calculateBMI(e) {
//     e.preventDefault();

//     const h = Number(height) / 100; // cm -> meter
//     const w = Number(weight);

//     if (!h || !w || h <= 0 || w <= 0) {
//       alert("Please enter valid height and weight!");
//       return;
//     }

//     const bmiValue = Number((w / (h * h)).toFixed(1));
//     setBmi(bmiValue);

//     if (bmiValue < 18.5) setCategory("Underweight");
//     else if (bmiValue < 25) setCategory("Normal");
//     else if (bmiValue < 30) setCategory("Overweight");
//     else setCategory("Obese");
//   }

//   function reset() {
//     setHeight("");
//     setWeight("");
//     setBmi(null);
//     setCategory("");
//   }

//   function getBadgeClass() {
//     if (category === "Underweight") return "bg-warning text-dark";
//     if (category === "Normal") return "bg-success";
//     if (category === "Overweight") return "bg-primary";
//     if (category === "Obese") return "bg-danger";
//     return "bg-secondary";
//   }

//   // BMI pointer position (0% to 100%)
//   function getPointerPosition() {
//     if (bmi === null) return 0;

//     // BMI range approx 10 to 40
//     const min = 10;
//     const max = 40;

//     let percent = ((bmi - min) / (max - min)) * 100;

//     if (percent < 0) percent = 0;
//     if (percent > 100) percent = 100;

//     return percent;
//   }

//   return (
//     <div className="container py-5">
//       <div className="row g-4 align-items-center">
//         {/* Left Side */}
//         <div className="col-md-6">
//           <h2 className="fw-bold mb-2">
//             <i className="bi bi-calculator me-2"></i>BMI Calculator
//           </h2>
//           <p className="text-muted">
//             Enter your height and weight to calculate BMI with a visual meter.
//           </p>

//           <div className="card shadow-sm rounded-4 p-4">
//             <form onSubmit={calculateBMI}>
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Height (cm)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={height}
//                   onChange={(e) => setHeight(e.target.value)}
//                   placeholder="Eg: 170"
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Weight (kg)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={weight}
//                   onChange={(e) => setWeight(e.target.value)}
//                   placeholder="Eg: 65"
//                 />
//               </div>

//               <div className="d-flex gap-2">
//                 <button type="submit" className="btn btn-primary w-100">
//                   <i className="bi bi-lightning-charge me-2"></i>
//                   Calculate
//                 </button>

//                 <button
//                   type="button"
//                   onClick={reset}
//                   className="btn btn-outline-secondary w-100"
//                 >
//                   Reset
//                 </button>
//               </div>
//             </form>

//             {/* Result */}
//             {bmi !== null && (
//               <div className="mt-4 text-center">
//                 <h4 className="fw-bold">
//                   Your BMI: <span className="text-primary">{bmi}</span>
//                 </h4>

//                 <span className={`badge ${getBadgeClass()} px-3 py-2 mt-2`}>
//                   {category}
//                 </span>

//                 {/* Meter */}
//                 <div className="mt-4">
//                   <p className="fw-semibold mb-2">BMI Meter</p>

//                   <div
//                     className="position-relative rounded-pill overflow-hidden"
//                     style={{ height: "16px" }}
//                   >
//                     <div className="d-flex h-100">
//                       <div
//                         style={{ width: "25%" }}
//                         className="bg-warning"
//                         title="Underweight"
//                       ></div>
//                       <div
//                         style={{ width: "25%" }}
//                         className="bg-success"
//                         title="Normal"
//                       ></div>
//                       <div
//                         style={{ width: "25%" }}
//                         className="bg-primary"
//                         title="Overweight"
//                       ></div>
//                       <div
//                         style={{ width: "25%" }}
//                         className="bg-danger"
//                         title="Obese"
//                       ></div>
//                     </div>

//                     {/* Pointer */}
//                     <div
//                       className="position-absolute top-0"
//                       style={{
//                         left: `${getPointerPosition()}%`,
//                         transform: "translateX(-50%)",
//                       }}
//                     >
//                       <i className="bi bi-caret-down-fill text-dark"></i>
//                     </div>
//                   </div>

//                   <div className="d-flex justify-content-between mt-2 small text-muted">
//                     <span>10</span>
//                     <span>18.5</span>
//                     <span>25</span>
//                     <span>30</span>
//                     <span>40</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="col-md-6 text-center">
//           <img
//             className="img-fluid rounded-4 shadow"
//             alt="BMI"
//             src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=60"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import bmiImg from "../assets/bmi.jpg";

export default function BMICalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");

  const [heightUnit, setHeightUnit] = useState("cm"); // cm | ft
  const [heightCm, setHeightCm] = useState("");

  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");

  const [weight, setWeight] = useState("");

  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  function getHeightInMeters() {
    // If cm selected
    if (heightUnit === "cm") {
      const cm = Number(heightCm);
      if (!cm || cm <= 0) return null;
      return cm / 100;
    }

    // If feet selected
    const ft = Number(heightFt);
    const inch = Number(heightIn);

    if (!ft || ft <= 0) return null;
    if (inch < 0) return null;

    const totalInches = ft * 12 + inch;
    const cm = totalInches * 2.54;
    return cm / 100;
  }

  function calculateBMI(e) {
    e.preventDefault();

    const h = getHeightInMeters();
    const w = Number(weight);

    const a = Number(age);

    if (!a || a <= 0 || a > 120) {
      alert("Please enter a valid age!");
      return;
    }

    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }

    const bmiValue = Number((w / (h * h)).toFixed(1));
    setBmi(bmiValue);

    // Standard BMI categories
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Healthy");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obesity");
  }

  function reset() {
    setAge("");
    setGender("Male");

    setHeightUnit("cm");
    setHeightCm("");

    setHeightFt("");
    setHeightIn("");

    setWeight("");

    setBmi(null);
    setCategory("");
  }

  function getBadgeClass() {
    if (category === "Underweight") return "bg-warning text-dark";
    if (category === "Healthy") return "bg-success";
    if (category === "Overweight") return "bg-primary";
    if (category === "Obesity") return "bg-danger";
    return "bg-secondary";
  }

  // BMI pointer position (0% to 100%)
  function getPointerPosition() {
    if (bmi === null) return 0;

    // BMI range approx 10 to 40
    const min = 10;
    const max = 40;

    let percent = ((bmi - min) / (max - min)) * 100;

    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;

    return percent;
  }

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        {/* Left Side */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">
            <i className="bi bi-calculator me-2"></i>BMI Calculator
          </h2>

          <p className="text-muted">
            Enter your age, gender, height and weight to calculate BMI with a
            visual meter.
          </p>

          <div className="card shadow-sm rounded-4 p-4">
            <form onSubmit={calculateBMI}>
              {/* Age + Gender */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Eg: 22"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Gender</label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    {/* <option>Other</option> */}
                  </select>
                </div>
              </div>

              {/* Height Unit */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Height Unit</label>
                <select
                  className="form-select"
                  value={heightUnit}
                  onChange={(e) => setHeightUnit(e.target.value)}
                >
                  <option value="cm">Centimeters (cm)</option>
                  <option value="ft">Feet + Inches</option>
                </select>
              </div>

              {/* Height Inputs */}
              {heightUnit === "cm" ? (
                <div className="mb-3">
                  <label className="form-label fw-semibold">Height (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    placeholder="Eg: 170"
                  />
                </div>
              ) : (
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Height (Feet)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      placeholder="Eg: 5"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Height (Inches)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      placeholder="Eg: 7"
                    />
                  </div>
                </div>
              )}

              {/* Weight */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Eg: 65"
                />
              </div>

              {/* Buttons */}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary w-100">
                  <i className="bi bi-lightning-charge me-2"></i>
                  Calculate
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="btn btn-outline-secondary w-100"
                >
                  Reset
                </button>
              </div>
            </form>

            {/* Result */}
            {bmi !== null && (
              <div className="mt-4 text-center">
                <h4 className="fw-bold">
                  Your BMI: <span className="text-primary">{bmi}</span>
                </h4>

                <span className={`badge ${getBadgeClass()} px-3 py-2 mt-2`}>
                  {category}
                </span>

                {/* Category Table */}
                <div className="mt-4 text-start">
                  <h6 className="fw-bold mb-2">BMI Categories</h6>

                  <div className="table-responsive">
                    <table className="table table-bordered table-sm">
                      <thead className="table-light">
                        <tr>
                          <th>Category</th>
                          <th>BMI Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Underweight</td>
                          <td>Below 18.5</td>
                        </tr>
                        <tr>
                          <td>Healthy</td>
                          <td>18.5 – 24.9</td>
                        </tr>
                        <tr>
                          <td>Overweight</td>
                          <td>25 – 29.9</td>
                        </tr>
                        <tr>
                          <td>Obesity</td>
                          <td>30 and above</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Meter */}
                <div className="mt-4">
                  <p className="fw-semibold mb-2">BMI Meter</p>

                  <div
                    className="position-relative rounded-pill overflow-hidden"
                    style={{ height: "16px" }}
                  >
                    <div className="d-flex h-100">
                      <div
                        style={{ width: "25%" }}
                        className="bg-warning"
                        title="Underweight"
                      ></div>
                      <div
                        style={{ width: "25%" }}
                        className="bg-success"
                        title="Healthy"
                      ></div>
                      <div
                        style={{ width: "25%" }}
                        className="bg-primary"
                        title="Overweight"
                      ></div>
                      <div
                        style={{ width: "25%" }}
                        className="bg-danger"
                        title="Obesity"
                      ></div>
                    </div>

                    {/* Pointer */}
                    <div
                      className="position-absolute top-0"
                      style={{
                        left: `${getPointerPosition()}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <i className="bi bi-caret-down-fill text-dark"></i>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-2 small text-muted">
                    <span>10</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 text-center">
          <img className="img-fluid rounded-4 shadow" alt="BMI" src={bmiImg} />
        </div>
      </div>
    </div>
  );
}
