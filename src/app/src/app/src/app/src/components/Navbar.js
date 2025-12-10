export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <a href="/" className="font-bold text-xl">NBA HUB</a>
        <a href="/scores">Scores</a>
        <a href="/news">News</a>
        <a href="/standings">Standings</a>
        <a href="/teams">Teams</a>
      </div>
    </nav>
  );
}
