import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "../Auth/SignUp";
import MainLayout from "./MainLayout";
import SignIIn from "../Auth/SignIIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
import SignIn from "../Auth/SignIIn";

export default App;
