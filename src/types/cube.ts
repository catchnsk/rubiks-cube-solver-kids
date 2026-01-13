export type CubeColor = 'white' | 'yellow' | 'red' | 'orange' | 'blue' | 'green';

export type Face = CubeColor[][];

export interface CubeState {
  front: Face;
  back: Face;
  left: Face;
  right: Face;
  top: Face;
  bottom: Face;
}

export interface Move {
  notation: string;
  description: string;
}

export const COLOR_MAP: Record<CubeColor, string> = {
  white: '#FFFFFF',
  yellow: '#FFD700',
  red: '#FF3333',
  orange: '#FF8C00',
  blue: '#4169E1',
  green: '#32CD32',
};

export const INITIAL_CUBE: CubeState = {
  front: [
    ['green', 'green', 'green'],
    ['green', 'green', 'green'],
    ['green', 'green', 'green'],
  ],
  back: [
    ['blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue'],
    ['blue', 'blue', 'blue'],
  ],
  left: [
    ['orange', 'orange', 'orange'],
    ['orange', 'orange', 'orange'],
    ['orange', 'orange', 'orange'],
  ],
  right: [
    ['red', 'red', 'red'],
    ['red', 'red', 'red'],
    ['red', 'red', 'red'],
  ],
  top: [
    ['white', 'white', 'white'],
    ['white', 'white', 'white'],
    ['white', 'white', 'white'],
  ],
  bottom: [
    ['yellow', 'yellow', 'yellow'],
    ['yellow', 'yellow', 'yellow'],
    ['yellow', 'yellow', 'yellow'],
  ],
};
