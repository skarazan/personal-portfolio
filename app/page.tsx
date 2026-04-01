import Terminal from "@/components/Terminal";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center p-4 bg-gray-950 overflow-hidden">
      <Particles />

      {/* Header */}
      <div className="relative z-10 text-center mb-6">
        <h1 className="text-4xl font-bold text-green-400 tracking-tight">
          Saba Karazanashvili
        </h1>
        <p className="text-gray-400 mt-1 text-sm tracking-widest uppercase">
          Portfolio
        </p>
      </div>

      {/* Terminal */}
      <div className="relative z-10 w-full max-w-3xl">
        <Terminal />
      </div>
    </main>
  );
}
