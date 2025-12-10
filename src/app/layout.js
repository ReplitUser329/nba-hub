import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "NBA Hub",
  description: "NBA scores, news, standings and teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
