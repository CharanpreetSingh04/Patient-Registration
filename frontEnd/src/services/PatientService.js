import React from 'react'
import axios from 'axios'
const patients_REST_API_URL="http://localhost:8080/api/patients";

const PatientService =()=> {
    return (
        function getPatients(){
            return axios.get(patients_REST_API_URL);
        }
    )
}

export default PatientService;


