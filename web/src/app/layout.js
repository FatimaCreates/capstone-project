import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Capstone Project",
  description: "Frontend AI Engineering internship capstone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-900 text-white p-4">
          <div className="max-w-4xl mx-auto flex gap-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/tasks" className="hover:underline">
              Tasks
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/health" className="hover:underline">
              Health
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
