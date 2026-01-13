import { CubeColor, COLOR_MAP } from '../types/cube';

interface ColorPickerProps {
  selectedColor: CubeColor;
  onColorSelect: (color: CubeColor) => void;
}

export function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  const colors: CubeColor[] = ['white', 'yellow', 'red', 'orange', 'blue', 'green'];

  return (
    <div className="flex gap-3 p-4 bg-white rounded-2xl shadow-lg">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`w-16 h-16 rounded-xl border-4 transition-all transform hover:scale-110 ${
            selectedColor === color ? 'border-purple-500 scale-110 shadow-xl' : 'border-gray-300'
          }`}
          style={{ backgroundColor: COLOR_MAP[color] }}
          title={color}
        />
      ))}
    </div>
  );
}
