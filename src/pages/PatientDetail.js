import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs } from "../components/Tabs";

const PatientDetail = () => {
  const { id } = useParams();
  const patient = useSelector((state) =>
    state.patients.list.find((p) => p.id === +id)
  );

  if (!patient) return <p>Loading patient details...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{patient.name}</h1>
      <div className="my-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patient.cognitiveScores}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <Tabs patient={patient} />
      </div>
    </div>
  );
};

export default PatientDetail;
