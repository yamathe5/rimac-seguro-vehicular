import RimacCarCard from "../../assets/Rimac-car-card.png";
import { useAuth } from "../../context/auth-context";

export default function UserCard() {
  const { user } = useAuth();

  return (
    <div className="arma_tu_plan--user_card">
      <p className="text-sm font-400 gray-100">Placa {user.placa}</p>
      <h3 className="headline-xxs">
        {user.auto} {user["año-auto"]} <br /> {user["modelo-auto"] || "BMW"}
      </h3>
      <img alt="Rimac person" src={RimacCarCard} />
    </div>
  );
}
