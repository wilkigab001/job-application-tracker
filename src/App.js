import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NewApplicationForm from "./Components/NewApplicationForm/NewApplicationForm";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newapplication" element={<NewApplicationForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
