import patientData from "../../data/patients";
import { PatientEntry, NonSensitivePatientEntry } from "../types";


const patients:PatientEntry[] = patientData as PatientEntry[];
// without using as PatientEntry[] - src/services/patientService.ts(2,24): error TS2305: Module '"../types"' has no exported member 'NonSensitivePatientEntry'.

const getPatientData =():NonSensitivePatientEntry[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation})=>({id, name,dateOfBirth, gender, occupation}));
} 

export default { getPatientData }; 

