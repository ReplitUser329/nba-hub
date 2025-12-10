export async function GET() {
  const news = [
    { title: "LeBron scores 40!", link: "#" },
    { title: "Celtics trade rumors heat up", link: "#" },
  ];

  return new Response(JSON.stringify(news), {
    headers: { "Content-Type": "application/json" },
  });
}
