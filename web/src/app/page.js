import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Capstone Project</h1>
      <p className="text-gray-600 mb-6">
        Frontend AI Engineering internship track — home screen.
      </p>
      <ul className="space-y-2">
        <li>
          <Link href="/tasks" className="text-blue-600 underline">
            Task List
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/health" className="text-blue-600 underline">
            Health Check
          </Link>
        </li>
      </ul>
    </main>
  );
}
