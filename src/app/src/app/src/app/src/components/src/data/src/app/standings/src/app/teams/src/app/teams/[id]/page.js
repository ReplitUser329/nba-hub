import teams from "../../../data/teams";

export default function TeamPage({ params }) {
  const team = teams.find(t => t.id === params.id);
  if (!team) return <p>Team not found</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{team.name}</h1>
      <img src={`/logos/${team.logo}`} alt={team.name} className="mb-4" />
      <p>City: {team.city}</p>
      <p>Conference: {team.conference}</p>
      <p>Division: {team.division}</p>
      <p>More stats and info will appear here soon!</p>
    </div>
  );
}
