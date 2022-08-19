import "./TeamCard.css";
export default function TeamCard({ name, points, onDeleteBtn }) {
  return (
    <div className="team-card">
      <p> {name}</p>
      <p>{points} points</p>
      <button onClick={onDeleteBtn}>X</button>
    </div>
  );
}
