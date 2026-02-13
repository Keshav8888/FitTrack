import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function ProgressChart({ data }) {
  return (
    <div style={{ width: "100%", height: 340 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Weight line */}
          <Line type="monotone" dataKey="weight" />

          {/* Calories line */}
          <Line type="monotone" dataKey="calories" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
