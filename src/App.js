import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./pages/booking/Booking";
import AuthProvider from "./pages/context/AuthProvider";
import Header from "./pages/header/Header";
import Experts from "./pages/Home/Exparts/Experts";
import Home from "./pages/Home/home/Home";
import Services from "./pages/Home/services/Services";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/privateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/experts" element={<Experts />} />
            <Route
              path="/booking/:BookId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
