import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPatients } from "../features/patients/patientSlics";
import PatientsCard from "../components/PatientsCard";

const PatientList = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Patient List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {list.map((p) => (
            <PatientsCard key={p.id} patient={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientList ;
