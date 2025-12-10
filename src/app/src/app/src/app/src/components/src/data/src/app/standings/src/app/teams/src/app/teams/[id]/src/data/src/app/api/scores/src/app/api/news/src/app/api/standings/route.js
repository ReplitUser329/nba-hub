export async function GET() {
  const standings = [
    { team: "Lakers", wins: 32, losses: 18 },
    { team: "Celtics", wins: 30, losses: 20 },
  ];

  return new Response(JSON.stringify(standings), {
    headers: { "Content-Type": "application/json" },
  });
}
