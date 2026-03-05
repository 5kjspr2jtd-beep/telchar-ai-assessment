import { Routes, Route } from "react-router-dom";
import TelcharLandingPage from "./pages/TelcharLandingPage";
import TelcharAssessment from "./pages/TelcharAssessment";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TelcharLandingPage />} />
      <Route path="/assessment" element={<TelcharAssessment />} />
    </Routes>
  );
}
