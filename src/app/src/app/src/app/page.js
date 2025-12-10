export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">NBA HUB</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <a href="/scores" className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-bold">Scores</h2>
        </a>

        <a href="/news" className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-bold">News</h2>
        </a>

        <a href="/standings" className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-bold">Standings</h2>
        </a>

        <a href="/teams" className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-bold">Teams</h2>
        </a>
      </div>
    </div>
  );
}
