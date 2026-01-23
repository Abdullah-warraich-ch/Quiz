import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "../Auth/SignUp";
import MainLayout from "./MainLayout";
import SignIIn from "../Auth/SignIIn";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIIn />} />
            <Route path="/homepage" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
import SignIn from "../Auth/SignIIn";
import ProtectedRoute from "../Auth/ProtectedRoute";

export default App;
