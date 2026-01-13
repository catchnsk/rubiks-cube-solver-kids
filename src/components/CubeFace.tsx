import { Face, CubeColor, COLOR_MAP } from '../types/cube';

interface CubeFaceProps {
  face: Face;
  faceName: string;
  onColorClick?: (row: number, col: number) => void;
  selectedColor?: CubeColor;
  isEditing?: boolean;
}

export function CubeFace({ face, faceName, onColorClick, selectedColor, isEditing }: CubeFaceProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm font-bold text-gray-700 uppercase">{faceName}</div>
      <div className="inline-grid grid-cols-3 gap-1 bg-gray-800 p-2 rounded-lg">
        {face.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => isEditing && onColorClick?.(rowIndex, colIndex)}
              className={`w-12 h-12 rounded border-2 border-gray-900 transition-transform ${
                isEditing ? 'cursor-pointer hover:scale-110' : ''
              }`}
              style={{ backgroundColor: COLOR_MAP[color] }}
              disabled={!isEditing}
            />
          ))
        )}
      </div>
    </div>
  );
}
