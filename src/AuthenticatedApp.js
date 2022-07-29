import { Navigate, Route, Routes } from "react-router-dom";
import ArmaTuPlan from "./pages/arma-tu-plan";
import GraciasPage from "./pages/gracias-page";
export default function AuthenticatedApp(){
  return(
    <>
      <Routes>
        <Route index element={<Navigate to="arma-tu-plan" />} />
        <Route path="/arma-tu-plan" element={<ArmaTuPlan />} />
        <Route path="/gracias" element={<GraciasPage />} />
      </Routes>
    </>
  )
}