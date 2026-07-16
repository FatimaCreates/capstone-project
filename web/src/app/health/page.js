async function getHealthData() {
  // Fetching a public placeholder API to demonstrate data fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch health data");
  }

  return res.json();
}

export default async function HealthPage() {
  const data = await getHealthData();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Health Check</h1>
      <p className="text-gray-600 mb-4">
        This page confirms server-side data fetching is working.
      </p>
      <div className="bg-gray-100 rounded-lg p-4">
        <pre className="text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
      <p className="mt-4 text-green-600 font-semibold">
        ✓ Status: Healthy — data fetched successfully
      </p>
    </main>
  );
}
