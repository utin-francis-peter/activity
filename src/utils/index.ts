import { TDimension, TPosition } from "../types/types";

export const shortestPath = (
  _grid: TDimension,
  start: TPosition,
  end: TPosition
): number => {
  const grid = Array(_grid.rows)
    .fill(0)
    .map(() => Array(_grid.cols).fill(0));
  const rows = grid.length;
  const cols = grid[0]?.length;

  const visited = new Set();
  const queue: [TPosition, number][] = [[start, 0]];

  const isValid = (x: number, y: number) =>
    x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] !== 1;

  while (queue.length > 0) {
    const [current, steps] = queue.shift() as [TPosition, number];

    if (current.x === end.x && current.y === end.y) {
      return steps;
    }

    if (!visited.has(`${current.x}-${current.y}`)) {
      visited.add(`${current.x}-${current.y}`);

      const neighbors = [
        { x: current.x - 1, y: current.y },
        { x: current.x + 1, y: current.y },
        { x: current.x, y: current.y - 1 },
        { x: current.x, y: current.y + 1 },
      ];

      for (const neighbor of neighbors) {
        if (isValid(neighbor.x, neighbor.y)) {
          queue.push([neighbor, steps + 1]);
        }
      }
    }
  }

  // If no path is found
  return -1;
};
