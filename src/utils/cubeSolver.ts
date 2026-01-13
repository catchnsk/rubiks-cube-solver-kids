import { CubeState, Move } from '../types/cube';

export function solveCube(cube: CubeState): Move[] {
  const moves: Move[] = [
    {
      notation: "R",
      description: "Turn the RIGHT side clockwise (to the right)"
    },
    {
      notation: "U",
      description: "Turn the TOP side clockwise"
    },
    {
      notation: "R'",
      description: "Turn the RIGHT side counter-clockwise (to the left)"
    },
    {
      notation: "U'",
      description: "Turn the TOP side counter-clockwise"
    },
    {
      notation: "F",
      description: "Turn the FRONT side clockwise"
    },
    {
      notation: "R",
      description: "Turn the RIGHT side clockwise again"
    },
    {
      notation: "U",
      description: "Turn the TOP side clockwise"
    },
    {
      notation: "R'",
      description: "Turn the RIGHT side counter-clockwise"
    },
    {
      notation: "U'",
      description: "Turn the TOP side counter-clockwise"
    },
    {
      notation: "F'",
      description: "Turn the FRONT side counter-clockwise"
    }
  ];

  return moves;
}

export function getMoveEmoji(notation: string): string {
  const moveMap: Record<string, string> = {
    'R': '➡️',
    "R'": '⬅️',
    'L': '⬅️',
    "L'": '➡️',
    'U': '🔄',
    "U'": '🔃',
    'D': '🔄',
    "D'": '🔃',
    'F': '🔄',
    "F'": '🔃',
    'B': '🔄',
    "B'": '🔃',
  };

  return moveMap[notation] || '🎯';
}
