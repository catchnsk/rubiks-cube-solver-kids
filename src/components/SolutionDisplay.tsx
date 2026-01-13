import { useState } from 'react';
import { Move } from '../types/cube';
import { ChevronLeft, ChevronRight, RotateCcw, Home } from 'lucide-react';

interface SolutionDisplayProps {
  moves: Move[];
  onReset: () => void;
}

export function SolutionDisplay({ moves, onReset }: SolutionDisplayProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < moves.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentMove = moves[currentStep];
  const progress = ((currentStep + 1) / moves.length) * 100;

  return (
    <div className="flex flex-col items-center gap-8 p-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-green-600 mb-4">
          Let's Solve Your Cube! 🎉
        </h2>
        <p className="text-2xl text-gray-700">
          Step {currentStep + 1} of {moves.length}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full">
        <div className="text-center space-y-6">
          <div className="text-9xl">
            {getMoveVisual(currentMove.notation)}
          </div>

          <div className="text-6xl font-bold text-blue-600">
            {currentMove.notation}
          </div>

          <div className="text-3xl text-gray-700 leading-relaxed">
            {currentMove.description}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronLeft size={32} />
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === moves.length - 1}
          className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Next
          <ChevronRight size={32} />
        </button>
      </div>

      {currentStep === moves.length - 1 && (
        <div className="bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-8 text-center animate-bounce">
          <p className="text-4xl font-bold text-yellow-800">
            Great Job! You Did It! 🌟
          </p>
        </div>
      )}

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-8 py-4 bg-gray-500 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-gray-600 transform hover:scale-105 transition-all"
      >
        <Home size={28} />
        Start Over
      </button>
    </div>
  );
}

function getMoveVisual(notation: string): string {
  const visuals: Record<string, string> = {
    'R': '↪️',
    "R'": '↩️',
    'L': '↩️',
    "L'": '↪️',
    'U': '🔄',
    "U'": '🔃',
    'D': '🔄',
    "D'": '🔃',
    'F': '🔄',
    "F'": '🔃',
    'B': '🔄',
    "B'": '🔃',
  };

  return visuals[notation] || '🎯';
}
