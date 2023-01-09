import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import AuthContext from "../../store/authContext";

const BarChart = () => {
  const { userId } = useContext(AuthContext);
  axios.get("/applications/");
  const data = {};
  return <Bar data={data} />;
};

export default BarChart;
