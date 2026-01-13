import { useState } from 'react';
import { CubeState, Move } from './types/cube';
import { CubeInput } from './components/CubeInput';
import { SolutionDisplay } from './components/SolutionDisplay';
import { solveCube } from './utils/cubeSolver';
import { Sparkles } from 'lucide-react';

function App() {
  const [solving, setSolving] = useState(false);
  const [solution, setSolution] = useState<Move[]>([]);

  const handleSolve = (cube: CubeState) => {
    const moves = solveCube(cube);
    setSolution(moves);
    setSolving(true);
  };

  const handleReset = () => {
    setSolving(false);
    setSolution([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <div className="container mx-auto py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles size={48} className="text-yellow-500" />
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Rubik's Cube Solver
            </h1>
            <Sparkles size={48} className="text-yellow-500" />
          </div>
          <p className="text-2xl text-gray-700 font-semibold">
            For Super Smart Kids! 🧠✨
          </p>
        </header>

        <main className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl mx-4">
          {!solving ? (
            <CubeInput onSolve={handleSolve} />
          ) : (
            <SolutionDisplay moves={solution} onReset={handleReset} />
          )}
        </main>

        <footer className="text-center mt-8 text-gray-600">
          <p className="text-lg">Have fun solving! 🎮</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
