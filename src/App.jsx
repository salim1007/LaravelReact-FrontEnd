import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-slate-300">
      <nav className=" mb-0 rounded bg-infigo-900 text-white px-2 py-2.5 sm:px-4 flex   ">
        <Link
          to="/home"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Register
        </Link>
      </nav>
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
