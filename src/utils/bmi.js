export function calculateBMI(weightKg, heightCm) {
  const h = heightCm / 100;
  const bmi = weightKg / (h * h);
  return Number(bmi.toFixed(2));
}

export function bmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
