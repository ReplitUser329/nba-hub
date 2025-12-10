export async function GET() {
  const scores = [
    { home: "Lakers", away: "Warriors", score: "102-99" },
    { home: "Celtics", away: "Bulls", score: "110-105" },
  ];

  return new Response(JSON.stringify(scores), {
    headers: { "Content-Type": "application/json" },
  });
}
