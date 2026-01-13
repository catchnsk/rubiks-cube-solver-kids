import { useState } from 'react';
import { CubeState, CubeColor, INITIAL_CUBE } from '../types/cube';
import { CubeFace } from './CubeFace';
import { ColorPicker } from './ColorPicker';
import { Shuffle, Play } from 'lucide-react';

interface CubeInputProps {
  onSolve: (cube: CubeState) => void;
}

export function CubeInput({ onSolve }: CubeInputProps) {
  const [cube, setCube] = useState<CubeState>(INITIAL_CUBE);
  const [selectedColor, setSelectedColor] = useState<CubeColor>('white');

  const updateCubeFace = (
    faceName: keyof CubeState,
    row: number,
    col: number
  ) => {
    setCube((prev) => ({
      ...prev,
      [faceName]: prev[faceName].map((r, rIdx) =>
        rIdx === row
          ? r.map((c, cIdx) => (cIdx === col ? selectedColor : c))
          : r
      ),
    }));
  };

  const resetCube = () => {
    setCube(INITIAL_CUBE);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">
          Set Your Cube Colors!
        </h2>
        <p className="text-xl text-gray-600">
          Pick a color and click on the cube squares
        </p>
      </div>

      <ColorPicker
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />

      <div className="grid grid-cols-3 gap-8 items-start">
        <div />
        <CubeFace
          face={cube.top}
          faceName="Top"
          onColorClick={(r, c) => updateCubeFace('top', r, c)}
          selectedColor={selectedColor}
          isEditing={true}
        />
        <div />

        <CubeFace
          face={cube.left}
          faceName="Left"
          onColorClick={(r, c) => updateCubeFace('left', r, c)}
          selectedColor={selectedColor}
          isEditing={true}
        />
        <CubeFace
          face={cube.front}
          faceName="Front"
          onColorClick={(r, c) => updateCubeFace('front', r, c)}
          selectedColor={selectedColor}
          isEditing={true}
        />
        <CubeFace
          face={cube.right}
          faceName="Right"
          onColorClick={(r, c) => updateCubeFace('right', r, c)}
          selectedColor={selectedColor}
          isEditing={true}
        />

        <div />
        <CubeFace
          face={cube.bottom}
          faceName="Bottom"
          onColorClick={(r, c) => updateCubeFace('bottom', r, c)}
          selectedColor={selectedColor}
          isEditing={true}
        />
        <div />

        <div />
        <CubeFace
          face={cube.back}
          faceName="Back"
          onColorClick={(r, c) => updateCubeFace('back', r, c)}
          selectedColor={selectedColor}
          isEditing={true}
        />
        <div />
      </div>

      <div className="flex gap-4">
        <button
          onClick={resetCube}
          className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all"
        >
          <Shuffle size={28} />
          Reset Cube
        </button>
        <button
          onClick={() => onSolve(cube)}
          className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all animate-pulse"
        >
          <Play size={28} />
          Solve It!
        </button>
      </div>
    </div>
  );
}
