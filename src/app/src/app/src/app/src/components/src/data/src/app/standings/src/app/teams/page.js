import teams from "../../data/teams";
import Link from "next/link";

export default function Teams() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">NBA Teams</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {teams.map(team => (
          <Link key={team.id} href={`/teams/${team.id}`}>
            <div className="p-4 bg-white shadow rounded text-center cursor-pointer">
              <img src={`/logos/${team.logo}`} alt={team.name} className="w-16 mx-auto mb-2"/>
              <h2 className="font-bold">{team.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
