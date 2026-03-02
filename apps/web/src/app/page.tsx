import { calculateGI2 } from "core/src/gi2";

export default function Home() {
  const score = calculateGI2([
    { truth: 4, responsibility: 3, restraint: 3, powerRisk: 2 }
  ]);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Guardian Academy</h1>
      <p className="mt-4">Integrity Index (GI²): {score}</p>
    </main>
  );
}
