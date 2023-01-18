// import React, { useContext, useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import axios from "axios";
// import AuthContext from "../../store/authContext";

// const BarChart = () => {
//   const [state, setState] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1,
//         hoverBackgroundColor: "rgba(255,99,132,0.4)",
//         hoverBorderColor: "rgba(255,99,132,1)",
//         data: [],
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       // Fetch data from the API
//       const response = await axios
//         .get("http://localhost:3000/api/endpoint")
//         .then((res) => {
//           const data = res.data;
//           const filteredData = data.filter((item) => {
//             const date = new Date(item.date);
//             const month = date.getMonth();
//             return month === 0; // Change this to the month you want to filter by
//           });
//         });
//       // Add data to the state

//       // Filter the data based on the month

//       // Extract the labels and data from the filtered data
//       const labels = filteredData.map((item) => {
//         const date = new Date(item.date);
//         const month = date.getMonth();
//         return months[month];
//       });
//       const data = filteredData.map((item) => item.value);

//       // Update the state with the new labels and data
//       setState({
//         labels,
//         datasets: [
//           {
//             ...state.datasets[0],
//             data,
//           },
//         ],
//       });
//     };

//     fetchData();
//   }, []);

//   return <Bar data={state} />;
// };

// export default BarChart;
